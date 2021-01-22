import { useFormStyles, useModalStyles } from "../styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { isAmountLarger, secondsToMonthsDays } from "../constants";
import { AppActions, Loan } from "../types";
import React from "react";
import TextField from "@material-ui/core/TextField";
import AppButton from "./app-button";
import { useCallback } from "react";
import { useEffect } from "react";

interface InvestModalProps {
  selectedLoan: Loan;
  open: boolean;
  handleClose: () => void;
  invest: (amount: string) => AppActions;
}

const InvestModal = ({
  selectedLoan,
  open,
  handleClose,
  invest,
}: InvestModalProps) => {
  const modalClasses = useModalStyles();
  const formClasses = useFormStyles();
  const [amountToInvest, setAmountToInvest] = React.useState("");
  const [valid, setValid] = React.useState(true);

  useEffect(() => {
    if (!(amountToInvest && selectedLoan?.available)) {
      return setValid(true);
    }
    setValid(!isAmountLarger(amountToInvest, selectedLoan?.available));
  }, [amountToInvest, selectedLoan]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmountToInvest(event.target.value);
  };

  const handleClick = () => {
    invest(amountToInvest);
    handleClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={modalClasses.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={modalClasses.paper}>
          <h2 id="transition-modal-title">Invest in Loan</h2>
          <p id="transition-modal-description">
            {selectedLoan?.title}
            <br />
            <br />
            Amount available: £{selectedLoan?.available}
            <br />
            Loan ends in: {secondsToMonthsDays(selectedLoan?.term_remaining)}
          </p>
          <br />
          <form className={formClasses.root} noValidate autoComplete="off">
            <div>
              <TextField
                label="Investment amount (£)"
                value={amountToInvest}
                onChange={handleChange}
              />
              <AppButton
                onClick={handleClick}
                disabled={!valid || !amountToInvest}
              >
                Invest
              </AppButton>
              {!valid && (
                <div>You cannot invest more than the available amount</div>
              )}
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  );
};

export default InvestModal;
