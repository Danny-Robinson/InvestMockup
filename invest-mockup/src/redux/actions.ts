import { AppActions, INVEST } from "../types";

export const invest = (id: string, amount: string): AppActions => ({
  type: INVEST,
  id,
  amount,
});
