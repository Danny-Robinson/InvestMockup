import {
  INITIAL_LOAN_STATE,
  subtractStrings,
  transformLoans,
} from "../constants";
import { AppActions, INVEST, Loan } from "../types";

// find it more readable to access the data when keyed by id
export const loans = (
  state = transformLoans(INITIAL_LOAN_STATE.loans),
  action: AppActions
): { [id: string]: Loan } => {
  switch (action.type) {
    case INVEST:
      const loan = state[action.id];

      if (!loan) {
        return state;
      }

      return {
        ...state,
        [action.id]: {
          ...loan,
          available: subtractStrings(loan.available, action.amount),
        },
      };
    default:
      return state;
  }
};

export const invested = (
  state = {},
  action: AppActions
): { [id: string]: boolean } => {
  switch (action.type) {
    case INVEST:
      return { ...state, [action.id]: true };
    default:
      return state;
  }
};
