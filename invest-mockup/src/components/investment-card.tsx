import {
  Typography,
  Grid,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";
import React from "react";
import { useDashboardStyles } from "../styles";
import { Loan } from "../types";
import AppButton from "./app-button";

interface InvestmentCardProps {
  loan: Loan;
  invested?: boolean;
  onClick: () => void;
}
const InvestmentCard = ({ loan, invested, onClick }: InvestmentCardProps) => {
  const classes = useDashboardStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <CardContent>
            <Typography color="textPrimary" gutterBottom>
              {loan.title}
            </Typography>

            <Typography color="textSecondary">Amount: {loan.amount}</Typography>
            <Typography variant="body2" component="p">
              Available: {loan.available}
              <br />
              Annualised return: {loan.annualised_return}
              <br />
              Tranch: {loan.tranche}
              <br />
              LTV: {loan.ltv}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={4}>
          {invested && <Typography color="textSecondary">Invested</Typography>}
          <CardActions>
            <AppButton
              size="small"
              onClick={onClick}
              disabled={parseInt(loan.available) <= 0}
            >
              Invest
            </AppButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

export default InvestmentCard;
