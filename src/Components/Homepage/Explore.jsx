import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";

function Tooltip(props) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 345, backgroundColor: "#0000" }}>
        <CardActionArea>
          {props.logo}
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.details}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            {props.months}
          </Button>{" "}
          <Button size="small" color="primary">
            {props.plateform}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default function Explore() {
  return (
    <Grid container spacing={2}>
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="12 months"
        plateform="online"
      />
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="2 years"
        plateform="offline"
      />
      <Tooltip
        logo="Hello"
        title="Welcome"
        details="nehvbbfv"
        months="1 year"
        plateform="classroom"
      />
    </Grid>
  );
}
