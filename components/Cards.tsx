import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";

const StyledCard = styled(Card)(() => ({
  borderRadius: 15,
  boxShadow: "none",
}));

// const CardActionArea = styled(CardActions)(() => ({
//   // borderRadius: 16,
//   padding: "0",
//   transition: "0.2s",
//   "&:hover": {
//     transform: "scale(1.1)"
//   }
// }));

interface CardContProps {
  section: string;
}

const CardCont = styled(CardContent)<CardContProps>(({ section }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "left",
  textAlign: "left",
  padding: "1rem",
  backgroundColor: section === "coding" ? "#FFF7F4" : "#EC297B",
}));

// const CardImg = styled(CardMedia)(() => ({
//   maxHeight:"50%"
// }));

interface TypographyTitleProps {
  section: string;
}

const TypographyTitle = styled(Typography)<TypographyTitleProps>(
  ({ section }) => ({
    fontFamily: "Lato",
    color: section === "coding" ? "#039490" : "#EAE8EB",
    fontSize: "2rem",
    fontWeight: "400",
    paddingLeft: "0.7273rem",
    marginBottom: "1rem",
    marginTop: "0.5rem",
  })
);

const Links = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "left",
  alignItems: "center",
  textAlign: "left",
  fontFamily: "Lato",
  color: "#332e2e",
  fontSize: "1.2rem",
  fontWeight: "300",
}));

export default function Cards({ title, image, link, section }) {
  const theme = createTheme({});
  // const matchesXsOnly = useMediaQuery(theme.breakpoints.only('xs'));
  // const matchesLgOnly = useMediaQuery(theme.breakpoints.only('lg'));
  // const cardMaxWidth = matchesXsOnly ? '100%' : matchesLgOnly ? 350 : 250;
  return (
    <StyledCard sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ height: "auto" }}
      />
      <CardCont section={section}>
        <TypographyTitle section={section} variant="h2">
          {title}
        </TypographyTitle>
        {section === "coding" ? (
          <Links>
            <IconButton
              aria-label="github"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "#3C3C3C" }}
            >
              <GitHubIcon />
            </IconButton>
            <a href={link} style={{ color: "#3C3C3C", textDecoration: "none" }}>
              Learn More
            </a>
          </Links>
        ) : (
          <Links>
            <audio controls>
              <source src={link} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </Links>
        )}
      </CardCont>
      {/* <CardActionArea>
      </CardActionArea> */}
    </StyledCard>
  );
}
