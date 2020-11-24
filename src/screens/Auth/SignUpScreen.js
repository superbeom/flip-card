import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
} from "react-native";
import { useMutation } from "react-apollo-hooks";

import { CREATE_ACCOUNT } from "./AuthQueries";

import { checkValueName } from "../../utils/checkAuthInput";
import { EMPTY, BLANK } from "../../constants/strings";

import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

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
        return Alert.alert(`${nameStringArray[i]} can't be empty`);
      } else if (result === BLANK) {
        return Alert.alert(`${nameStringArray[i]} can't be blank`);
      }
    }

    try {
      setLoading(true);
      const {
        data: { createAccount },
      } = await createAccountMutation();

      if (createAccount) {
        Alert.alert("Account created", "Log in now!");
        navigation.navigate("SignIn", { username, secret });
      } else {
        Alert.alert("Can't create account");
      }
    } catch (error) {
      console.log("Error @handleSignup_SignUpScreen: ", error.message);
      if (error.message.includes("username")) {
        // When username is already taken - "This username is already taken"
        Alert.alert("This username is already taken");
      } else {
        Alert.alert("Can't create account");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <AuthInput {...usernameInput} placeholder={"Username"} />
        <AuthInput
          {...secretInput}
          placeholder={"Password"}
          onSubmitEditing={handleSignup}
          secureTextEntry={true}
        />
        <AuthButton onPress={handleSignup} text={"Sign Up"} loading={loading} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
