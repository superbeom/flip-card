import React, { useState } from "react";
import { Alert } from "react-native";
import { useMutation } from "react-apollo-hooks";

import { CREATE_ACCOUNT } from "./AuthQueries";

import { checkValueName } from "../../utils/checkAuthInput";
import {
  SIGN_UP,
  EMPTY,
  BLANK,
  USERNAME,
  PASSWORD,
  CANT_BE_EMPTY,
  CANT_BE_BLANK,
  SIGN_IN,
  ACCOUNT_CREATED,
  LOG_IN_NOW,
  CANT_CREATE_ACCOUNT,
  USERNAME_ONLY,
  USERNAME_UNDER_30,
  USERNAME_ALREADY_TAKEN,
} from "../../constants/strings";

import useInput from "../../hooks/useInput";
import Auth from "../../components/Auth";

export default ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const usernameInput = useInput("");
  const secretInput = useInput("");

  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      username: usernameInput.value,
      secret: secretInput.value,
    },
  });

  const handleSignup = async () => {
    const { value: username } = usernameInput;
    const { value: secret } = secretInput;
    const nameValueArray = [username, secret];
    let result = null;

    for (let i = 0; i < nameValueArray.length; i++) {
      result = checkValueName(nameValueArray[i]);
      if (result === EMPTY) {
        return Alert.alert(
          `${
            nameValueArray[i] === username ? USERNAME : PASSWORD
          } ${CANT_BE_EMPTY}`
        );
      } else if (result === BLANK) {
        return Alert.alert(
          `${
            nameValueArray[i] === username ? USERNAME : PASSWORD
          } ${CANT_BE_BLANK}`
        );
      }
    }

    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation();

      if (createAccount) {
        Alert.alert(ACCOUNT_CREATED, LOG_IN_NOW);
        navigation.navigate(SIGN_IN, { username, secret });
      } else {
        Alert.alert(CANT_CREATE_ACCOUNT);
      }
    } catch (error) {
      console.log("Error @handleSignup_SignUpScreen: ", error.message);
      if (error.message.includes("only")) {
        Alert.alert(USERNAME_ONLY);
      } else if (error.message.includes("under")) {
        /* When username over 30 characters already taken - "This username is already taken" */
        Alert.alert(USERNAME_UNDER_30);
      } else if (error.message.includes("username")) {
        /* When username is already taken - "This username is already taken" */
        Alert.alert(USERNAME_ALREADY_TAKEN);
      } else {
        Alert.alert(CANT_CREATE_ACCOUNT);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Auth
      content={SIGN_UP}
      handleAuth={handleSignup}
      usernameInput={usernameInput}
      secretInput={secretInput}
      loading={loading}
      navigation={navigation}
    />
  );
};
