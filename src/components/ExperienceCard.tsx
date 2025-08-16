import { Box, Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function ExperienceCard({ exp }: { exp: expJson }) {
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
        <Typography variant="subtitle1" color="textSecondary">
          {exp.role} | {exp.startDate} - {exp.endDate}
        </Typography>

        <List sx={{ listStyleType: "disc", pl: 2 }}>
          {exp.description.map((point: string, index: number) => (
            <ListItem key={index} sx={{ display: "list-item", p: 0 }}>
              <ListItemText primary={point} />
            </ListItem>
          ))}
        </List>

        <Typography variant="body1">
          <Box component="span" fontWeight="fontWeightMedium">
            Technologies:
          </Box>{" "}
          {exp.techStack}
        </Typography>
      </CardContent>
    </Card>
  );
}
