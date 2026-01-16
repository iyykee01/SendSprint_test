import { TransactionItem } from "@/src/components/ui/transactionItem";
import { FlatListScroller } from "@/src/components/ui/flatListScroller";
import { View, Text, StyleSheet } from "react-native";
import { Loader } from "@/src/components/ui/loader";
import { useAlert } from "@/src/hooks/useAlert/useAlert";
import { useContext } from "react";
import { TransactionContext } from "@/src/contexts/transactionContext";

const TransactionScreen = () => {
  // Access transaction context
  const context = useContext(TransactionContext);

  // Ensure context is available
  if (!context)
    throw new Error("useTransactions must be used within TransactionProvider");

  // Destructure context values
  const { transactions, loading, error } = context;

  // Access custom alert hook
  const { customModal } = useAlert();

  // Handle loading and error states
  if (loading) {
    return <Loader />;
  }

  // Show error modal if there's an error
  if (error) {
    customModal();
  }

  return (
    <FlatListScroller
      listHeader={
        <View>
          <Text style={styles.headerSubtitle}>Recent Transactions</Text>
        </View>
      }
      data={transactions}
      renderItem={({ item }) => <TransactionItem item={item} />}
      contentContainerStyle={styles.listPadding}
    />
  );
};

const styles = StyleSheet.create({
  headerSubtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
  },

  listPadding: {
    padding: 16,
  },
});

export default TransactionScreen;
