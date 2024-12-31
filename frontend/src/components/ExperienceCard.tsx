import { Box, Card, CardContent, Typography } from "@mui/material";

export default function ExperienceCard({ exp } : { exp:expJson }) {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em"
        }}
      >
        <Typography variant="h6">{exp.company}</Typography>
        <Typography variant="subtitle1" color="textSecondary">{exp.role} | {exp.startDate} - {exp.endDate}</Typography>
        <Typography variant="body1" align="justify">{exp.description}</Typography>
        <Typography variant="body1"><Box component="span" fontWeight='fontWeightMedium'>Technologies:</Box> {exp.techStack}</Typography>
      </CardContent>
    </Card>
  );   
}
