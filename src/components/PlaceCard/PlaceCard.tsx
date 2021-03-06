import { Button, Collapse, useMediaQuery, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import ColorButton from "../ColorButton/ColorButton";
import { ANIMATION_DURATION } from "../Welcome/Welcome";

interface Props {
  image: string;
  title: string;
  description: string;
  animate: boolean;
}

const PlaceCard: React.FC<Props> = ({
  image,
  title,
  description,
  animate,
}: Props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Collapse
      in={animate}
      timeout={ANIMATION_DURATION}
      orientation="vertical"
      collapsedSize={"10px"}
    >
      <Card
        sx={{
          maxWidth: 645,
          backgroundColor: "primary.main",
          m: "2em",
        }}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          height={matches ? "400" : "140"}
          image={image}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            fontSize={matches ? "2rem" : "1.3rem"}
            fontWeight="bold"
            color="text.primary"
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
            fontSize={matches ? "1.1rem" : "1rem"}
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" disableElevation>
            Share
          </Button>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            disableElevation
          >
            Learn More
          </Button>
          {/* <AppButton size="small">Learn More</AppButton> */}
          <ColorButton size="small">More</ColorButton>
        </CardActions>
      </Card>
    </Collapse>
  );
};

export default PlaceCard;
