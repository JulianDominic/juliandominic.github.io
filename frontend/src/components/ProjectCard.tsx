import { Card, CardContent, Typography } from "@mui/material";

export default function ProjectCard() {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography>Start Date - End Date</Typography>
        <Typography>Name of Project</Typography>
        <Typography>Description</Typography>
      </CardContent>
    </Card>
  );   
}
