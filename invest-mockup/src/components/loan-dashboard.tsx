import { Typography } from "@material-ui/core";
import { connect, ConnectedProps } from "react-redux";

import { StoreState } from "../redux/store";
import React from "react";
import { useModalStyles } from "../styles";
import { invest } from "../redux/actions";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import {
  numberWithCommas,
  secondsToMonthsDays,
  totalAvailable,
} from "../constants";
import InvestmentCard from "./investment-card";
import InvestModal from "./invest-modal";

export type LoanDashboardProps = ConnectedProps<typeof connector>;

const LoanDashboard = ({ loans, invested, invest }: LoanDashboardProps) => {
  const [open, setOpen] = React.useState(false);
  const [selectedInvestment, setSelectedInvestment] = React.useState("");

  const handleOpen = (id: string) => () => {
    setSelectedInvestment(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedInvestment("");
  };

  const composeInvestment = (id: string) => (amount: string) =>
    invest(id, amount);

  if (!loans) {
    return <div>No Loans Available</div>;
  }

  return (
    <>
      <div className="margin-base">
        <Typography variant="h3" component="h2" gutterBottom>
          Current Loans
        </Typography>
      </div>

      {Object.keys(loans).map((key) => {
        return (
          <InvestmentCard
            loan={loans[key]}
            invested={invested && invested[key]}
            onClick={handleOpen(key)}
          />
        );
      })}

      <div>
        Total amount available for investments:{" "}
        <em>£{numberWithCommas(totalAvailable(loans))}</em>
      </div>

      <InvestModal
        selectedLoan={loans[selectedInvestment]}
        open={open}
        handleClose={handleClose}
        invest={composeInvestment(selectedInvestment)}
      />
    </>
  );
};

const mapState = (state: StoreState) => ({
  loans: state?.loans,
  invested: state?.invested,
});

const connector = connect(mapState, { invest });

export default connector(LoanDashboard);
