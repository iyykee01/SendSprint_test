import React from "react";

import { TransactionProvider } from "@/src/contexts/transactionContext";
import TransactionScreen from "@/src/app/(Home)/transactionScreen";

const Index = () => {
  return (
    <TransactionProvider>
      <TransactionScreen />
    </TransactionProvider>
  );
};

export default Index;
