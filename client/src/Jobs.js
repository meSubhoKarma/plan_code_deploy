import React from "react"
import Typography from "@material-ui/core/Typography"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

import Job from "./Job"
import JobModal from "./JobModal"

function Jobs({ jobs }) {
  // modal
  const [open, setOpen] = React.useState(false)
  const [selectedJob, selectJob] = React.useState({})

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  // pagination
  const numJobs = jobs.length
  const numPages = Math.ceil(numJobs / 50)

  const [activeStep, setActiveStep] = React.useState(0)

  const jobsOnPage = jobs.slice(activeStep * 50, activeStep * 50 + 50)

  // step == 0, show 0-49
  // step == 1, show 50-99

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography variant="h4" component="h1">
        Entry level Software Jobs
      </Typography>

      <Typography variant="h6" component="h1">
        Found {numJobs} Jobs
      </Typography>

      {jobsOnPage.map((job, i) => (
        <Job
          key={i}
          job={job}
          onClick={() => {
            handleClickOpen()
            selectJob(job)
          }}
        />
      ))}

      <div>
        Page {activeStep + 1} of {numPages}
      </div>

      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  )
}

export default Jobs
