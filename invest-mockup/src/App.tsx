import React from "react";
import { makeStyles } from "@material-ui/core";

import "./App.css";
import LoanDashboard from "./components/loan-dashboard";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    background: "#ededed",
  },
});

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoanDashboard />
    </div>
  );
}

export default App;
