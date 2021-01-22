export const CLEAR_STORE = "CLEAR_STORE";
export interface ClearStoreAction {
  type: typeof CLEAR_STORE;
}

export const INVEST = "INVEST";
export interface InvestAction {
  type: typeof INVEST;
  id: string;
  amount: string;
}

//keeping these values as strings as per the original dataset
export interface Loan {
  id: string;
  title: string;
  tranche: string;
  available: string;
  annualised_return: string;
  term_remaining: string;
  ltv: string;
  amount: string;
}

export type AppActions = ClearStoreAction | InvestAction;
