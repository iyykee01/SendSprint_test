import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export const Loader = () => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#0052FF" />
      <Text style={styles.loadingText}>Loading Transactions...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  loadingText: {
    marginTop: 10,
    color: "#666",
  },
});
