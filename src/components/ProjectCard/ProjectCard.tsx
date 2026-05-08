import { Box, Grid, Stack, Typography, styled } from "@mui/material";
import type { FC } from "react";
import StyledButton from "../StyledButton/StyledButton";

export interface ProjectCardProps {
  title: string;
  subtitle: string;
  srcImg?: string;
  description: string;
  technologies: string;
  websiteURL?: string;
  codeURL: string;
  viewProjectLabel?: string;
  viewCodeLabel?: string;
}

const StyledCard = styled("article")(({ theme }) => ({
  position: "relative",
  border: `2px solid rgba(47, 52, 56, 0.34)`,
  backgroundColor: "rgba(251, 244, 230, 0.42)",
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  boxShadow: "5px 6px 0 rgba(47, 52, 56, 0.06)",
  transition: "transform 180ms ease, border-color 180ms ease",
  "&:hover": {
    transform: "rotate(-0.6deg) translateY(-2px)",
    borderColor: theme.palette.secondary.main,
  },
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "170px",
  objectFit: "cover",
  border: `1.5px solid rgba(47, 52, 56, 0.28)`,
  filter: "grayscale(1) contrast(0.9) sepia(0.14)",
  opacity: 0.82,
  [theme.breakpoints.up("md")]: {
    height: "180px",
  },
}));

const ProjectTag = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 800,
}));

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  subtitle,
  srcImg,
  description,
  technologies,
  websiteURL,
  codeURL,
  viewProjectLabel = "View project",
  viewCodeLabel = "View code",
}) => {
  const openLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <StyledCard>
      <Grid container spacing={3} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }}>
          {srcImg ? <StyledImg src={srcImg} alt={title} /> : null}
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Stack direction="row" justifyContent="space-between" gap={2}>
            <Typography variant="h5">{title}</Typography>
            <ProjectTag>{subtitle}</ProjectTag>
          </Stack>

          <Typography pt={1}>{description}</Typography>

          <Typography color="text.secondary" pt={1.5}>
            {technologies}
          </Typography>

          <Box display="flex" flexWrap="wrap" gap={1.5} pt={2}>
            {websiteURL ? (
              <StyledButton onClick={() => openLink(websiteURL)}>
                {viewProjectLabel}
              </StyledButton>
            ) : null}

            <StyledButton onClick={() => openLink(codeURL)}>
              {viewCodeLabel}
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </StyledCard>
  );
};

export default ProjectCard;
