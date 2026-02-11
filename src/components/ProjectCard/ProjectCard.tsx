import { Grid, Typography, styled } from "@mui/material";
import type { FC } from "react";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg?: string;          
  description: string;
  technologies: string;
  websiteURL: string;
  codeURL: string;
}

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  objectFit: "contain",
  height: "80vw",
  padding: "10px 0",
  [theme.breakpoints.up("md")]: {
    height: "45vh",
  },
}));

const StyledCard = styled("div")(({ theme }) => ({
  borderRadius: "3px",
  border: `0.5px solid ${theme.palette.primary.contrastText}`,
  backgroundColor: "transparent",
  color: theme.palette.primary.contrastText,
  padding: "20px",
  transition: "background-color 150ms ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  websiteURL,
  codeURL,
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <StyledCard>
      <Typography variant="h5">{title}</Typography>

      <Typography>{subtitle}</Typography>

      {srcImg ? <StyledImg src={srcImg} alt={title} /> : null}

      <Typography>{description}</Typography>

      <Typography fontWeight={600} pt={2}>
        {technologies}
      </Typography>

      <Grid container spacing={1} pt={2}>
        <Grid size ={{ xs: 6 }}>
          <StyledButton onClick={() => openLink(websiteURL)}>
            View Project
          </StyledButton>
        </Grid>

        <Grid size ={{ xs: 6 }}>
          <StyledButton onClick={() => openLink(codeURL)}>
            View Code
          </StyledButton>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
