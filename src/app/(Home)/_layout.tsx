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
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#0052FF", // Your brand color
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
  );
};

const styles = StyleSheet.create({
  customTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#0052FF",
  },
  titleText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "800",
  },
});
export default HomeLayout;
