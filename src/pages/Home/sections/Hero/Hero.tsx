import { styled } from "@mui/material"



const Hero = () => {

    const StyledHero = styled("div")(() => ({
       backgroundColor: "black"
    }))

  return (
    <>
        <StyledHero>
            ola
        </StyledHero>
         
    </>
  )
}

export default Hero
