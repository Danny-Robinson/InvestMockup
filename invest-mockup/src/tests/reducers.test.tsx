import { transformLoans, INITIAL_LOAN_STATE } from "../constants";
import { invested, loans } from "../redux/reducers";
import { investAction } from "./test-helpers";

const investedIn1 = { ["1"]: true };

describe("invested reducer", () => {
  it("should update invested status for undefined investment", () => {
    expect(invested({}, investAction({}))).toEqual(investedIn1);
  });

  it("should update invested status and retain other investments", () => {
    expect(invested(investedIn1, investAction({ id: "5" }))).toEqual({
      ...investedIn1,
      "5": true,
    });
  });
});

describe("loans reducer", () => {
  it("should update available amount when investing", () => {
    expect(
      loans(undefined, investAction({ amount: "1000" }))["1"].available
    ).toEqual("10,959");
  });

  it("should fail gracefully with bad id", () => {
    expect(
      loans(undefined, investAction({ id: "some bad id", amount: "1000" }))
    ).toEqual(transformLoans(INITIAL_LOAN_STATE.loans));
  });
});
