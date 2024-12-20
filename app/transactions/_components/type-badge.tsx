import { Badge } from "@/app/_components/ui/badge";
import { Transaction, TransactionsType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionTypeBadgeProps {
  transaction: Transaction;
}
const TransactionTypeBadge = ({ transaction }: TransactionTypeBadgeProps) => {
  if (transaction.type === TransactionsType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10} />
        Depósito
      </Badge>
    );
  }
  if (transaction.type === TransactionsType.EXPENSE) {
    return (
      <Badge className="hover:bg- bg-danger bg-opacity-10 font-bold text-danger">
        <CircleIcon className="mr-2 fill-danger" size={10} />
        Despesa
      </Badge>
    );
  }
  if (transaction.type === TransactionsType.INVESTMENT) {
    return (
      <Badge className="hover:bg- bg-white bg-opacity-10 font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10} />
        Investimento
      </Badge>
    );
  }
};

export default TransactionTypeBadge;
