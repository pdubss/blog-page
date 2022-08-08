import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const steps = ["First", "Second", "Third"];

const ModalStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const nextStep = () => {
    setActiveStep((activeStep) => activeStep + 1);
  };
  const previousStep = () => {
    setActiveStep((activeStep) => activeStep - 1);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div className={styles.buttonContainer}>
        <Button
          variant="outlined"
          sx={{
            "&:hover": { backgroundColor: "#aef5ff" },
            borderRadius: "5px",
          }}
          onClick={previousStep}
        >
          Previous Step
        </Button>
        <Button
          variant="outlined"
          sx={{
            "&:hover": { backgroundColor: "#aef5ff" },
            borderRadius: "5px",
          }}
          onClick={nextStep}
        >
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default ModalStepper;
