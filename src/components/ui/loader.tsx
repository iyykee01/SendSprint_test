import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

interface LoaderProps {
  loadingText?: string | "Loading Transactions...";
}

export const Loader = ({ loadingText }: LoaderProps) => {
  return (
    <View style={styles.center}>
      <ActivityIndicator size="large" color="#0052FF" />
      <Text style={styles.loadingText}>{loadingText}</Text>
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
