import { TransactionItem } from "@/src/components/ui/transactionItem";
import { FlatListScroller } from "@/src/components/ui/flatListScroller";
import { View, Text, StyleSheet } from "react-native";
import { Loader } from "@/src/components/ui/loader";
import { ErrorModal } from "@/src/components/errorModal/errorModal";
import { useContext, useEffect } from "react";
import { TransactionContext } from "@/src/contexts/transactionContext";

const TransactionScreen = () => {
  // Access transaction context
  const context = useContext(TransactionContext);

  // Ensure context is available
  if (!context)
    throw new Error("useTransactions must be used within TransactionProvider");

  // Destructure context values
  const { transactions, loading, error, fetchTransactions } = context;

  // Fetch transactions on component mount
  useEffect(() => {
    fetchTransactions();
  }, []);

  // Handle loading and error states
  if (loading) {
    return <Loader />;
  }

  // Show error modal if there's an error and return early
  if (error) {
    return (
      <ErrorModal title="Error" bodyText={error} onPress={fetchTransactions} />
    );
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
