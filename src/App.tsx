import { Box, styled } from "@mui/material"
import About from "./pages/Home/sections/About/About"
import Hero from "./pages/Home/sections/Hero/Hero"
import Navbar from "./components/NavBar/NavBar"
import Projects from "../src/pages/Home/sections/Projects/Projects"
import Footer from "./components/Footer/Footer"
import Experience from "./pages/Home/sections/Experience/Experience"

const Desk = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  padding: "28px 14px",
  [theme.breakpoints.up("md")]: {
    padding: "42px 0",
  },
}))

const PaperPage = styled("main")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  width: "min(1160px, calc(100vw - 28px))",
  margin: "0 auto",
  color: theme.palette.text.primary,
  borderRadius: "4px 18px 10px 6px",
  boxShadow: "0 24px 60px rgba(47, 52, 56, 0.34), inset 0 0 0 1px rgba(47, 52, 56, 0.1)",
  backgroundColor: theme.palette.background.paper,
  backgroundImage: `
    linear-gradient(rgba(47, 52, 56, 0.055) 1px, transparent 1px),
    radial-gradient(circle at 22% 18%, rgba(200, 92, 74, 0.06), transparent 18%),
    radial-gradient(circle at 78% 42%, rgba(47, 52, 56, 0.045), transparent 20%)
  `,
  backgroundSize: "100% 34px, 100% 100%, 100% 100%",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    pointerEvents: "none",
    opacity: 0.28,
    backgroundImage:
      "repeating-radial-gradient(circle at 12% 18%, rgba(47,52,56,0.16) 0 0.5px, transparent 0.5px 4px)",
    mixBlendMode: "multiply",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: "10px",
    pointerEvents: "none",
    background: "linear-gradient(90deg, rgba(47,52,56,0.14), transparent)",
  },
}))

const App: React.FC = () => {

  return (
    <Desk>
      <PaperPage>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </PaperPage>
    </Desk>
  )
}

export default App
