import { TransactionItem } from "@/src/components/ui/transactionItem";
import { FlatListScroller } from "@/src/components/ui/flatListScroller";
import { useTransactions } from "@/src/contexts/transactionContext";
import { View, Text, StyleSheet } from "react-native";
import { Loader } from "@/src/components/loader";
import { useAlertHook } from "@/src/hooks/alertHook/alertHook";

const TransactionScreen = () => {
  const { transactions, loading, error } = useTransactions();
  const { customModal } = useAlertHook();

  if (loading) {
    return <Loader />;
  }

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
