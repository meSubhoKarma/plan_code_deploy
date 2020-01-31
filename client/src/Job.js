import React from "react"
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"

function Job({ job, onClick }) {
  return (
    <Paper className="job" onClick={onClick}>
      <div>
        <Typography variant="h6">{job.title}</Typography>
        <Typography variant="h5">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>{job.created_at.split(" ").slice(0, 3)}</Typography>
      </div>
    </Paper>
  )
}

export default Job
