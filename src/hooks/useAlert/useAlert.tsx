import { Alert } from "react-native";
import { useTransaction } from "@/src/hooks/transaction/useTransaction";

export const useAlert = () => {
  const { fetchTransactions } = useTransaction();

  const customModal = () =>
    Alert.alert("ERROR!!!", "Error loading transactions. Please try again.", [
      { text: "Retry", onPress: () => fetchTransactions() },
    ]);

  return {
    customModal,
  };
};
