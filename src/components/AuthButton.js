import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import PropTypes from "prop-types";

const windowWidth = Dimensions.get("window").width;

const AuthButton = ({ onPress, text, loading = false }) => (
  <TouchableOpacity onPress={onPress} disabled={loading}>
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator color={"white"} />
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  </TouchableOpacity>
);

AuthButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth / 1.5,
    backgroundColor: "#3897f0",
    padding: 10,
    borderRadius: 4,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
    color: "white",
  },
});

export default AuthButton;
