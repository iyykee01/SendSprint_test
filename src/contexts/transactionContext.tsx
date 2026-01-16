import React, { createContext, ReactNode } from "react";
import { Transaction } from "@/src/types/transaction.type";
import { useTransaction } from "@/src/hooks/transaction/useTransaction";
import { NetworkState } from "@/src/types/network.types";

// Define props for TransactionProvider
interface TransactionProviderProps {
  children: ReactNode;
}

interface TransactionContextProps extends NetworkState {
  transactions: Transaction[];
  fetchTransactions: () => void;
}

// Create TransactionContext
export const TransactionContext = createContext<
  TransactionContextProps | undefined
>(undefined);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const { fetchTransactions, transactions, loading, error } = useTransaction();

  const value = {
    transactions,
    loading,
    error,
    fetchTransactions,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};
