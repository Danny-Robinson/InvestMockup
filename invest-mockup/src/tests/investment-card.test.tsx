import renderer from "react-test-renderer";
import InvestmentCard from "../components/investment-card";
import { MOCK_LOANS } from "./test-helpers";

describe("investment card", () => {
  const baseProps = {
    loan: MOCK_LOANS[0],
    invested: false,
    onClick: () => null,
  };

  it("renders correctly with base props", () => {
    const tree = renderer.create(<InvestmentCard {...baseProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders invested status", () => {
    const tree = renderer
      .create(<InvestmentCard {...baseProps} invested={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
