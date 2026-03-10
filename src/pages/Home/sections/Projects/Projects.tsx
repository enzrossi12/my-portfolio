import { Box, Container, Grid, Typography, styled } from "@mui/material";
import type { FC } from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { useLanguage } from "../../../../contexts/LanguageContext/LanguageContext";

const StyledExperience = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const ProjectsSection: FC = () => {
  const { t } = useLanguage();

  const projects: ProjectCardProps[] = [
    {
      title: "Project Escape The Maze",
      subtitle: "Feb 2026",
      srcImg: "/maze.gif",
      description: t("projects.maze.description"),
      technologies: t("projects.maze.tech"),
      websiteURL: "https://enzrossi12.github.io/Escape-the-Maze/",
      codeURL: "https://github.com/enzrossi12/Escape-the-Maze",
      viewProjectLabel: t("project.viewProject"),
      viewCodeLabel: t("project.viewCode"),
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="primary.contrastText">
            {t("projects.title")}
          </Typography>
        </Box>

        <Grid container spacing={5} pb={3}>
          {projects.map((project, index) => (
            <Grid size ={{  md: 4 }} key={index}>
              <AnimationComponent moveDirection={index % 2 === 0 ? "right" : "left"}>
                <ProjectCard {...project} />
              </AnimationComponent>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledExperience>
  );
};

export default ProjectsSection;
