import { Alert } from "react-native";
import { useTransactionHook } from "@/src/hooks/transaction/transactionHook";

export const useAlertHook = () => {
  const { fetchTransactions } = useTransactionHook();

  const customModal = () =>
    Alert.alert("ERROR!!!", "Error loading transactions. Please try again.", [
      { text: "Retry", onPress: () => fetchTransactions() },
    ]);

  return {
    customModal,
  };
};
