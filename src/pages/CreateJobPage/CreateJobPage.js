import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { ReactComponent as PackageSvg } from "../../assets/svg/package.svg";
import { ReactComponent as Paws } from "../../assets/svg/paws.svg";
import { DeliveryInfo } from "../../components/Job/DeliveryInfo";
import { DeliveryType } from "../../components/Job/DeliveryType";
import { ItemInfo } from "../../components/Job/ItemInfo";
import { JobType } from "../../components/Job/JobType";
import { PaymentDetails } from "../../components/Job/PaymentDetails";
import { PickupInfo } from "../../components/Job/PickupInfo";
import TextComp from "../../components/shared-components/TextComp";
import AdditionalQuestions from "../../components/Job/AdditionalQuestions";
import PaymentBreakdown from "../../components/Job/PaymentBreakdown";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  marginBottom: "1rem",
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    {...props}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgba(255, 255, 255, .05)" : "#fff",
  flexDirection: "",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  // borderTop: "none",
}));

// page comp start ----------------------------------------------------------------------------------
const CreateJobPage = () => {
  // accordion logic ----------------------------------------------------------------------------------
  const [expanded, setExpanded] = React.useState(null);
  const handleChange = (panel) => (event, newExpanded) => {
    console.log("handleChange Triggered", newExpanded);
    setExpanded(newExpanded ? panel : false);
  };
  const handleChangeForChildComp = (panel) => {
    setExpanded(panel ? panel : false);
  };
  //-----------------------------------------------------------------------------------------------------

  // jop  type data -------------------------------------------------------------------------------------
  const [jobType, setJobType] = React.useState(null);
  const jobTypeHandler = (value) => {
    sessionStorage.setItem("jobType", JSON.stringify(value));
    setJobType(value);
  };
  //---------------------------------------------------------------------------------------------------

  // job items info data --------------------------------------------------------------------------------

  //---------------------------------------------------------------------------------------------------

  // console.log(itemName);

  //-----------------------------------------------------------------------------------------------------

  const onHandleSubmit = (e) => {
    console.log(e);
  };

  return (
    <>
      <TextComp variant="heading">Enter your job details</TextComp>
      <p className="opacity-50">
        Please provide us with all the details required for this job{" "}
      </p>
      <div className="mt-8">
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <div className="flex flex-col ">
              <Typography fontWeight="600">Job Type</Typography>
              {jobType && (
                <div className="flex">
                  {jobType === "Goods" ? (
                    <PackageSvg width={"1.2rem"} />
                  ) : (
                    <Paws width={"1.2rem"} />
                  )}
                  <p className="opacity-50 mt-3 ml-2">{jobType}</p>
                </div>
              )}
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <JobType
              jobType={jobType}
              jobTypeHandler={jobTypeHandler}
              handleChange={handleChangeForChildComp}
            />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography fontWeight="600">Item information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ItemInfo />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography fontWeight="600">Pickup information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PickupInfo />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography fontWeight="600">Delivery information</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DeliveryInfo />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Typography fontWeight="600">Delivery type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DeliveryType />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography fontWeight="600">Additional Questions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AdditionalQuestions />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography fontWeight="600">Payment details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PaymentDetails />
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography fontWeight="600">Payment breakdown</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <PaymentBreakdown />
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
};

export default CreateJobPage;
