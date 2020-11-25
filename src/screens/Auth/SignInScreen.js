import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useMutation } from "react-apollo-hooks";
import { vw, vh } from "react-native-expo-viewport-units";

import { useLogIn } from "../../context/AuthContext";

import { CONFIRM_SECRET } from "./AuthQueries";

import colors from "../../constants/colors";
import {
  // SIGN_IN,
  USERNAME,
  CANT_BE_EMPTY,
  INVALID_PASSWORD,
  WRONG_PASSWORD,
  CHECK_USERNAME_PASSWORD,
  CANT_CONFIRM_PASSWORD,
} from "../../constants/strings";

import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";
// import Auth from "../../components/Auth";

export default SignInScreen = ({ route, navigation }) => {
  const logIn = useLogIn();
  const [loading, setLoading] = useState(false);
  const usernameInput = useInput(route.params ? route.params.username : "");
  const secretInput = useInput(route.params ? route.params.secret : "");

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      username: usernameInput.value,
      secret: secretInput.value,
    },
  });

  const handleSignIn = async () => {
    const { value: username } = usernameInput;
    const { value: secret } = secretInput;

    if (username === "") {
      return Alert.alert(`${USERNAME} ${CANT_BE_EMPTY}`);
    }

    if (secret === "") {
      return Alert.alert(INVALID_PASSWORD);
    }

    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();

      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert(CANT_CONFIRM_PASSWORD);
      }
    } catch (error) {
      console.log("Error @handleSignIn_SignInScreen: ", error.message);
      if (error.message.includes("combination")) {
        // When secret is wrong - "Wrong username/secret combination"
        Alert.alert(WRONG_PASSWORD);
      } else {
        Alert.alert(CHECK_USERNAME_PASSWORD);
      }
    } finally {
      setLoading(false);
    }
  };

  // return (
  //   <Auth
  //     content={SIGN_IN}
  //     handleAuth={handleSignIn}
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
          <Text style={styles.headerText}>Welcome back!</Text>
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
              onSubmitEditing={handleSignIn}
              secureTextEntry={true}
            />
          </View>
        </View>

        <AuthButton onPress={handleSignIn} text={"Log In"} loading={loading} />

        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          activeOpacity={0.5}
        >
          <Text style={styles.signUpLeftText}>
            First time here?{"  "}
            <Text style={styles.signUpRightText}>Sign Up</Text>{" "}
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
  signUpLeftText: {
    fontSize: vw(4),
    textAlign: "center",
  },
  signUpRightText: {
    fontSize: vw(4.5),
    fontWeight: "600",
    color: colors.whiteColor,
  },
});
