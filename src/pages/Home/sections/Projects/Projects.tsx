import { Box, Container, Grid, Typography, styled } from "@mui/material";
import type { FC } from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const StyledExperience = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const ProjectsSection: FC = () => {

  const projects: ProjectCardProps[] = [
    {
      title: "Project Escape The Maze",
      subtitle: "Feb 2025",
      srcImg: "/src/assets/images/project-escape-the-maze.gif",
      description:
        "A maze escape game in which a procedural algorithm creates a different layout on every launch. The player moves using the keyboard and must navigate the maze to reach the flag and complete the game.",
      technologies: "Technologies: JavaScript, HTML, CSS",
      websiteURL: "https://enzrossi12.github.io/Escape-the-Maze/",
      codeURL: "https://github.com/enzrossi12/Escape-the-Maze",
    },
  ];

  return (
    <StyledExperience>
      <Container maxWidth="lg">
        <Box id="projects" pt={5} pb={3}>
          <Typography variant="h2" textAlign="center" color="primary.contrastText">
            Projects
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
