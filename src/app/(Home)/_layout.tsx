import { TransactionProvider } from "@/src/contexts/transactionContext";
import { Stack } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const MyCustomHeaderTitle = (props: { title: string }) => {
  return (
    <View style={styles.customTitleContainer}>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

export const HomeLayout = () => {
  return (
    <TransactionProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0052FF",
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerTitle: (props) => (
              <MyCustomHeaderTitle {...props} title="SendSprint" />
            ),
          }}
        />
      </Stack>
    </TransactionProvider>
  );
};

const styles = StyleSheet.create({
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
  },
});
export default HomeLayout;
