import { app_url } from "@/src/constant/appUrl";
import { get_transaction_path } from "@/src/constant/transactionPaths";
import { fetchData } from "@/src/requestAPI/requestApi";
import { NetworkState } from "@/src/types/network.types";
import { Transaction } from "@/src/types/transaction.type";
import { useEffect, useState } from "react";

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

export interface TransactionContextProps extends NetworkState {
  transactions: Transaction[];
}

export const useTransactionHook = () => {
  const [transactionState, setTransactionState] =
    useState<TransactionContextProps>({
      transactions: [],
      loading: true,
      error: null,
    });

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await fetchData(`${app_url}${get_transaction_path}`);
      setTransactionState({
        transactions: response || MOCK_DATA,
        loading: false,
        error: null,
      });
    } catch (err) {
      setTransactionState({
        transactions: [],
        loading: false,
        error: err instanceof Error ? err.message : "Failed to fetch data",
      });
    }
  };

  return { transactionState, fetchTransactions };
};
