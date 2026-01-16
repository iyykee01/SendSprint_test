import { app_url } from "@/src/constant/appUrl";
import { get_transaction_path } from "@/src/constant/transactionPaths";
import { fetchData } from "@/src/requestAPI/requestApi";
import { Transaction } from "@/src/types/transaction.type";
import { useState } from "react";

// Mock Data
const MOCK_DATA: Transaction[] = [
  {
    id: "T001",
    type: "DEPOSIT",
    status: "COMPLETED",
    amount: 500.0,
    currency: "USD",
    date: "2026-01-10T10:00:00Z",
    recipient_name: "Self",
  },
  {
    id: "T002",
    type: "TRANSFER",
    status: "PENDING",
    amount: 150.5,
    currency: "EUR",
    date: "2026-01-13T15:30:00Z",
    recipient_name: "Akinola Adekunle",
  },
  {
    id: "T003",
    type: "TRANSFER",
    status: "FAILED",
    amount: 75.0,
    currency: "NGN",
    date: "2026-01-14T09:45:00Z",
    recipient_name: "Nkechi Okoro",
  },
];

export const useTransaction = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchTransactions = async () => {
    // setTransactions(MOCK_DATA);
    setLoading(true);

    try {
      //using a 2minute delay to simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const data = await fetchData(`${app_url}${get_transaction_path}`);
      setTransactions(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };
  return { transactions, loading, error, fetchTransactions };
};
