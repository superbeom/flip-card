import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import { useMutation } from "react-apollo-hooks";

import { useLogIn } from "../../context/AuthContext";

import { CONFIRM_SECRET } from "./AuthQueries";

import useInput from "../../hooks/useInput";
import AuthInput from "../../components/AuthInput";
import AuthButton from "../../components/AuthButton";

export default SignInScreen = ({ route, navigation }) => {
  const logIn = useLogIn();
  const usernameInput = useInput(route.params ? route.params.username : "");
  const secretInput = useInput(route.params ? route.params.secret : "");
  const [loading, setLoading] = useState(false);

  const [confirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      username: usernameInput.value,
      secret: secretInput.value,
    },
  });

  const handleSignIn = async () => {
    const { usernameValue } = usernameInput;
    const { secretValue } = secretInput;

    if (usernameValue === "") {
      return Alert.alert("Username can't be empty");
    }

    if (secretValue === "" || !secretValue.includes(" ")) {
      return Alert.alert("Invalid password");
    }

    try {
      setLoading(true);
      const {
        data: { confirmSecret },
      } = await confirmSecretMutation();

      if (confirmSecret !== "" || confirmSecret !== false) {
        logIn(confirmSecret);
      } else {
        Alert.alert("Can't confirm password");
      }
    } catch (error) {
      console.log("Error @handleSignIn_SignInScreen: ", error.message);
      if (error.message.includes("conbination")) {
        // When secret is wrong - "Wrong username/secret conbination"
        Alert.alert("Wrong password!");
      } else {
        Alert.alert("Can't confirm password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.signIn}>
      <View style={styles.main}>
        <Text style={styles.headerText}>Welcome back!</Text>
      </View>

      <View style={styles.auth}>
        <View style={styles.authContainer}>
          <Text style={styles.authTitle}>Username</Text>
          <AuthInput
            {...usernameInput}
            placeholder={"Username"}
            returnKeyType={"next"}
          />
        </View>

        <View>
          <Text style={styles.authTitle}>Password</Text>
          <AuthInput
            {...secretInput}
            placeholder={"Password"}
            returnKeyType={"done"}
            onSubmitEditing={handleSignIn}
            secureTextEntry={true}
          />
        </View>
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={handleSignIn}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator style={{ color: "#ffffff", size: "small" }} />
        ) : (
          <AuthButton
            onPress={handleSignIn}
            text={"Log In"}
            loading={loading}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.signUp}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.signUpTopText}>
          First time here? <Text style={styles.signUpBottomText}>Sign Up</Text>{" "}
        </Text>
      </TouchableOpacity>

      <View style={styles.headerGraphic}>
        <View style={styles.rightCircle} />
        <View style={styles.leftCircle} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signIn: {
    flex: 1,
  },
  main: {
    marginTop: 192,
  },
  auth: {
    marginTop: 64,
    marginRight: 32,
    marginBottom: 32,
  },
  headerText: {
    fontSize: 32,
    fontWeight: "300",
    textAlign: "center",
  },
  authContainer: {
    marginBottom: 32,
  },
  authTitle: {
    color: "#8e93a1",
    fontSize: 12,
    textTransform: "uppercase",
    fontWeight: "300",
  },
  authField: {
    borderBottomColor: "#8e93a1",
    borderBottomWidth: 0.5,
    height: 48,
  },
  signInButton: {
    height: 48,
    marginVertical: 0,
    marginHorizontal: 32,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#8022d9",
    borderRadius: 6,
  },
  signInText: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    color: "#ffffff",
  },
  signUp: {
    marginTop: 16,
  },
  signUpTopText: {
    fontSize: 13,
    textAlign: "center",
  },
  signUpBottomText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#8022d9",
  },
  headerGraphic: {
    position: "absolute",
    width: "100%",
    top: -50,
    zIndex: -100,
  },
  rightCircle: {
    position: "absolute",
    backgroundColor: "#8022d9",
    width: 400,
    height: 400,
    borderRadius: 200,
    top: -200,
    right: -100,
  },
  leftCircle: {
    position: "absolute",
    backgroundColor: "#23a6d5",
    width: 200,
    height: 200,
    borderRadius: 100,
    top: -50,
    left: -50,
  },
});
