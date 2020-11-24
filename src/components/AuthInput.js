import React from "react";
import { StyleSheet, View, TextInput, Dimensions } from "react-native";
import PropTypes from "prop-types";

const windowWidth = Dimensions.get("window").width;

const AuthInput = ({
  value,
  onChange,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
  returnKeyType = "done",
  onSubmitEditing = () => null,
  secureTextEntry = false,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
      secureTextEntry={secureTextEntry}
      autoCorrect={false}
    />
  </View>
);

AuthInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  keyboardType: PropTypes.oneOf([
    "default",
    "number-pad",
    "decimal-pad",
    "numeric",
    "email-address",
    "phone-pad",
  ]),
  autoCapitalize: PropTypes.oneOf(["none", "sentences", "words", "characters"]),
  returnKeyType: PropTypes.oneOf(["done", "go", "next", "search", "send"]),
  onSubmitEditing: PropTypes.func,
  secureTextEntry: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textInput: {
    width: windowWidth / 1.5,
    padding: 10,
    backgroundColor: "#F9F9F9",
    borderWidth: 1,
    borderColor: "#999",
    borderStyle: "solid",
    borderRadius: 4,
  },
});

export default AuthInput;
