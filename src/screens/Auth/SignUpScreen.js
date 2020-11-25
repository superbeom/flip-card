import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { vw, vh } from "react-native-expo-viewport-units";

import { CREATE_ACCOUNT } from "./AuthQueries";

import { checkValueName } from "../../utils/checkAuthInput";
import colors from "../../constants/colors";
import {
  // SIGN_UP,
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
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
// import Auth from "../../components/Auth";

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

  // return (
  //   <Auth
  //     content={SIGN_UP}
  //     handleAuth={handleSignup}
  //     usernameInput={usernameInput}
  //     secretInput={secretInput}
  //     loading={loading}
  //     navigation={navigation}
  //   />
  // );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.screen}
        source={require("../../../assets/images/background.png")}
      >
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome!</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Username</Text>
            <AuthInput {...usernameInput} returnKeyType={"next"} />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.inputText}>Password</Text>
            <AuthInput
              {...secretInput}
              onSubmitEditing={handleSignup}
              secureTextEntry={true}
            />
          </View>
        </View>

        <AuthButton onPress={handleSignup} text={"Sign Up"} loading={loading} />

        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          activeOpacity={0.5}
        >
          <Text style={styles.signInLeftText}>
            Already have an account?{"  "}
            <Text style={styles.signInRightText}>Log In</Text>{" "}
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    marginTop: vh(15),
    marginBottom: vh(15),
  },
  headerText: {
    fontSize: vh(4),
    fontWeight: "500",
    textAlign: "center",
    color: colors.whiteColor,
  },
  inputContainer: {
    marginBottom: vh(15),
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: "100%",
    alignItems: "center",
    marginBottom: vh(4),
  },
  inputText: {
    width: "70%",
    color: colors.whiteColor,
    fontSize: vh(1.5),
    textTransform: "uppercase",
    fontWeight: "500",
  },
  signInLeftText: {
    fontSize: vw(4),
    textAlign: "center",
  },
  signInRightText: {
    fontSize: vw(4.5),
    fontWeight: "600",
    color: colors.whiteColor,
  },
});
