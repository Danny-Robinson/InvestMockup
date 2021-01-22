import { INVEST, InvestAction, Loan } from "../types";

interface InvestActionProps {
  id?: string;
  amount?: string;
}
export const investAction = ({
  id = "1",
  amount = "1",
}: InvestActionProps): InvestAction => {
  return {
    type: INVEST,
    id,
    amount,
  };
};

export const MOCK_LOANS: ReadonlyArray<Loan> = [
  {
    id: "1",
    title: "title",
    tranche: "Z",
    available: "50",
    annualised_return: "50",
    term_remaining: "323123",
    ltv: "2",
    amount: "23123",
  },
  {
    id: "2",
    title: "title 2",
    tranche: "Z",
    available: "502",
    annualised_return: "50",
    term_remaining: "222",
    ltv: "2",
    amount: "22222222",
  },
];
