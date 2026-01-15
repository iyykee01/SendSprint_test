import React, { createContext, useContext, ReactNode } from "react";

import {
  TransactionContextProps,
  useTransactionHook,
} from "@/src/hooks/transaction/transactionHook";

const TransactionContext = createContext<TransactionContextProps | undefined>(
  undefined
);

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const { transactionState } = useTransactionHook();

  return (
    <TransactionContext.Provider value={transactionState}>
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionContext);

  if (!context)
    throw new Error("useTransactions must be used within TransactionProvider");
  return context;
};
