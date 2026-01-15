import { StyleSheet, Text, View } from "react-native";
import { Transaction } from "@/src/types/transaction.type";

export const TransactionItem = ({ item }: { item: Transaction }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLocaleLowerCase()) {
      case "completed":
        return "#4CAF50";
      case "pending":
        return "#FF9800";
      case "failed":
        return "#F44336";
      default:
        return "#000";
    }
  };

  const getCurrencySymbol = (currency: string) => {
    switch (currency.toUpperCase()) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "NGN":
        return "₦";
      default:
        return currency;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardRow}>
        {/* Left Side */}
        <View style={styles.cardRowStyle}>
          <Text style={styles.recipientText}>{item.recipient_name}</Text>
          <Text style={styles.dateText}>
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </Text>
        </View>

        {/* Right Side */}
        <View style={[styles.cardRowStyle, { alignItems: "flex-end" }]}>
          <Text style={styles.amountText}>
            {getCurrencySymbol(item.currency)}
            {item.amount.toFixed(2)}
          </Text>

          <Text>
            <Text style={styles.typeText}>{`${item.type}: `}</Text>

            <Text
              style={[
                styles.statusText,
                { color: getStatusColor(item.status) },
              ]}
            >
              {item.status}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  cardRow: {
    flex: 1,

    flexDirection: "row",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#baabab",
  },

  cardRowStyle: {
    flex: 1,
    flexDirection: "column",
    gap: 4,
  },

  recipientText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
  },
  dateText: {
    fontSize: 9,
    fontWeight: "900",
    color: "#999",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A1A1A",
  },

  typeText: {
    fontSize: 8,
    fontWeight: "900",
    color: "#666",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    textTransform: "capitalize",
  },

  statusText: {
    fontSize: 12,
    fontWeight: "800",
  },
});
