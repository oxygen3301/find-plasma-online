import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function Getstarted(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.text}>{props.getStarted || "GET STARTED"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 42,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  text: {
    color: "rgba(21,0,53,1)",
    fontSize: 17,
    fontFamily: "roboto-500",
    textAlign: "center"
  }
});

export default Getstarted;
