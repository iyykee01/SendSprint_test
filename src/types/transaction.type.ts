export interface Transaction {
  id: string;
  type: "DEPOSIT" | "TRANSFER";
  status: "COMPLETED" | "PENDING" | "FAILED";
  amount: number;
  currency: string;
  date: string;
  recipient_name: string;
}
