import React, { createContext, ReactNode } from "react";

import {
  TransactionContextProps,
  useTransaction,
} from "@/src/hooks/transaction/useTransaction";

// Define props for TransactionProvider
interface TransactionProviderProps {
  children: ReactNode;
}

// Create TransactionContext
export const TransactionContext = createContext<
  TransactionContextProps | undefined
>(undefined);

export const TransactionProvider = ({ children }: TransactionProviderProps) => {
  const { transactionState } = useTransaction();

  return (
    <TransactionContext.Provider value={transactionState}>
      {children}
    </TransactionContext.Provider>
  );
};
