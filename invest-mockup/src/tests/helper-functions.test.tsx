import {
  numberWithCommas,
  subtractStrings,
  transformLoans,
} from "../constants";
import { MOCK_LOANS } from "./test-helpers";

describe("transform loans", () => {
  it("should convert array of loans to loans keyed by id", () => {
    expect(transformLoans(MOCK_LOANS)).toEqual({
      [MOCK_LOANS[0].id]: MOCK_LOANS[0],
      [MOCK_LOANS[1].id]: MOCK_LOANS[1],
    });
  });
});

describe("subtract strings", () => {
  it("should subtract the second string from the first", () => {
    expect(subtractStrings("10", "5")).toEqual("5");
  });

  it("should handle and retain commas in strings", () => {
    expect(subtractStrings("10,005", "5")).toEqual("10,000");
  });

  it("should gracefully handle garbage", () => {
    expect(subtractStrings("trash", "5")).toEqual("NaN");
  });
});

describe("numberWithCommas", () => {
  it("should return a large number as a string with appropriate commas", () => {
    expect(numberWithCommas(1000000)).toEqual("1,000,000");
  });

  it("should retain sign/polarity", () => {
    expect(numberWithCommas(-1000000)).toEqual("-1,000,000");
  });
});

//AND SO ON AND SO FORTH
