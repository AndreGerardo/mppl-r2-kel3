import React from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import MainCard from "./Main-card";
import { Grid } from "@material-ui/core";
import styles from "../styles/MainContent.module.css";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";


export default function MainContent() {
  return (
    <div className={styles.root}>
        <Typography align="center">Dashboard</Typography>
    </div>
  );
}

MainContent.propTypes = {
  token: PropTypes.string,
  data: PropTypes.object,
};
