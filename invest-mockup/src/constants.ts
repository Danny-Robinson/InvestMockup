import { Loan } from "./types";

export const INITIAL_LOAN_STATE = {
  loans: [
    {
      id: "1",
      title: "Voluptate et sed tempora qui quisquam.",
      tranche: "A",
      available: "11,959",
      annualised_return: "8.60",
      term_remaining: "864000",
      ltv: "48.80",
      amount: "85,754",
    },
    {
      id: "5",
      title: "Consectetur ipsam qui magnam minus dolore ut fugit.",
      tranche: "B",
      available: "31,405",
      annualised_return: "7.10",
      term_remaining: "1620000",
      ltv: "48.80",
      amount: "85,754",
    },
    {
      id: "12",
      title:
        "Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.",
      tranche: "C",
      available: "12,359",
      annualised_return: "4.80",
      term_remaining: "879000",
      ltv: "48.80",
      amount: "85,754",
    },
  ],
};

export const transformLoans = (
  loans: ReadonlyArray<Loan>
): { [id: string]: Loan } =>
  loans.reduce((obj, loan) => Object.assign(obj, { [loan.id]: loan }), {});

export const subtractStrings = (string1: string, string2: string) => {
  const number1 = parseInt(string1.replace(/\D/g, ""));
  const number2 = parseInt(string2.replace(/\D/g, ""));
  return numberWithCommas(number1 - number2);
};

export const numberWithCommas = (x: number) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const secondsToMonthsDays = (seconds: string) => {
  const secondsNum = parseInt(seconds);
  const months = Math.floor(secondsNum / 2.628e6);
  const days = Math.floor((secondsNum % 2.628e6) / 86400);

  const mDisplay =
    months > 0 ? months + (months === 1 ? " months " : " months ") : "";
  const dDisplay = days > 0 ? days + (days === 1 ? " day " : " days ") : "";

  return `${mDisplay} ${dDisplay}`;
};

export const totalAvailable = (loans: { [id: string]: Loan }) =>
  Object.keys(loans).reduce((acc, key) => {
    return acc + parseInt(loans[key].available.replace(/\D/g, ""));
  }, 0);

export const isAmountLarger = (amount1: string, amount2: string) =>
  parseInt(amount1.replace(/\D/g, "")) > parseInt(amount2.replace(/\D/g, ""));
