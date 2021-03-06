import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function NameBah(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TextInput placeholder="Name" style={styles.inputStyle}></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderColor: "#D9D5DC",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,1)"
  },
  inputStyle: {
    color: "#000",
    fontSize: 16,
    alignSelf: "stretch",
    flex: 1,
    lineHeight: 16,
    borderRadius: 10,
    padding: 10
  }
});

export default NameBah;
