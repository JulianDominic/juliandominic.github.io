import { Typography } from "@mui/material";
import { useState, useEffect } from "react";

export default function LastUpdated() {
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/repos/JulianDominic/juliandominic.github.io")
    .then((res) => {
      if (!res.ok) {
        throw new Error("we done goofed");
      }
      return res.json();
    })
    .then((data) => {
      setLastUpdated(data.updated_at);
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    lastUpdated != null && 
    <Typography
      variant="caption"
      color="textDisabled"
      sx={{ fontStyle: "italic" }}
    >
      Last updated: {lastUpdated}
    </Typography>
  );
}
