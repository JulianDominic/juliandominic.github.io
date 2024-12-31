import { Card, CardContent, Typography } from "@mui/material";

export default function ExperienceCard() {
  return (
    <Card elevation={0}>
      <CardContent>
        <Typography>Company</Typography>
        <Typography>Role & Duration</Typography>
        <Typography>Description</Typography>
        <Typography>Technologies</Typography>
      </CardContent>
    </Card>
  );   
}
