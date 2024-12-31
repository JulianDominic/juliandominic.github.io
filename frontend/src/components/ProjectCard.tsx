import { Box, Card, CardContent, Container, Link, Typography } from "@mui/material";

export default function ProjectCard({ proj } : { proj:projJson }) {
  return (
    <Card>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5em"
        }}
      >
        <Typography variant="h6">{proj.name}</Typography>
        {
          proj.endDate !== undefined 
            ? <Typography variant="subtitle1" color="textSecondary">{proj.startDate} - {proj.endDate}</Typography>
            : <Typography variant="subtitle1" color="textSecondary">{proj.startDate}</Typography>
        }
        <Typography variant="body1" align="justify">{proj.description}</Typography>
        <Typography variant="body1"><Box component="span" fontWeight='fontWeightMedium'>Technologies:</Box> {proj.techStack}</Typography>
        {
          proj.url !== undefined ? <Link href={proj.url} target="_blank" rel="noopener noreferrer"><Typography>Link to Repository</Typography></Link> : <Container />
        }
      </CardContent>
    </Card>
  );   
}
