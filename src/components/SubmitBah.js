import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function SubmitBah(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.submit}>submit</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  submit: {
    color: "rgba(21,0,53,1)",
    fontSize: 14,
    fontFamily: "roboto-500"
  }
});

export default SubmitBah;
