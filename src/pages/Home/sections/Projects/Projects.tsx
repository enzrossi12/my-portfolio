import { Box, Container, Stack, Typography, styled } from "@mui/material";
import type { FC } from "react";
import ProjectCard from "../../../../components/ProjectCard/ProjectCard";
import type { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import { useLanguage } from "../../../../contexts/LanguageContext/useLanguage";

const Section = styled("section")(({ theme }) => ({
  padding: "24px 0 84px",
  [theme.breakpoints.up("md")]: {
    padding: "36px 0 104px",
  },
}));

const PageLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const SectionTitle = styled(Typography)(() => ({
  display: "inline-block",
  textDecoration: "underline",
  textDecorationColor: "rgba(47, 52, 56, 0.34)",
  textDecorationThickness: "3px",
  textUnderlineOffset: "8px",
}));

const Note = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 800,
  transform: "rotate(-5deg)",
  width: "fit-content",
  marginLeft: "auto",
  marginBottom: theme.spacing(2),
  "&::after": {
    content: '"↘"',
    marginLeft: theme.spacing(1),
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 0,
    marginTop: theme.spacing(2),
  },
}));

const ProjectsSection: FC = () => {
  const { t } = useLanguage();

  const projects: ProjectCardProps[] = [
    {
      title: "Project Escape The Maze",
      subtitle: "#game",
      srcImg: "/maze.gif",
      description: t("projects.maze.description"),
      technologies: t("projects.maze.tech"),
      websiteURL: "https://enzrossi12.github.io/Escape-the-Maze/",
      codeURL: "https://github.com/enzrossi12/Escape-the-Maze",
      viewProjectLabel: t("project.viewProject"),
      viewCodeLabel: t("project.viewCode"),
    },

    {
      title: "To-do List API",
      subtitle: "#backend",
      srcImg: "/patrick-star.gif",
      description: t("projects.todo.description"),
      technologies: t("projects.todo.tech"),
      codeURL: "https://github.com/enzrossi12/TodoApi",
      viewProjectLabel: t("project.viewProject"),
      viewCodeLabel: t("project.viewCode"),
    },
  ];

  return (
    <Section id="projects">
      <Container maxWidth="lg">
        <Box>
          <PageLabel>{t("section.projectsLabel")}</PageLabel>
          <SectionTitle variant="h2">{t("projects.title")}</SectionTitle>
          <Note>{t("projects.note")}</Note>
        </Box>

        <Stack spacing={3}>
          {projects.map((project) => (
            <AnimationComponent key={project.title}>
              <ProjectCard {...project} />
            </AnimationComponent>
          ))}
        </Stack>
      </Container>
    </Section>
  );
};

export default ProjectsSection;
