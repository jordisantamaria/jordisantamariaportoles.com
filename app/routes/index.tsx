import { AboutMe } from "~/components/landingPage/AboutMe";
import { Hero } from "~/components/landingPage/Hero";
import { MySolution } from "~/components/landingPage/MySolution";
import { StoryTelling } from "~/components/landingPage/StoryTelling";
import { TecnologiesStack } from "~/components/landingPage/TecnologiesStack";
import { MainContainer } from "~/components/MainContainer";
import { Nav } from "~/components/Nav";

export default function Index() {
  return (
    <MainContainer>
      <Nav />
      <Hero/>
      <StoryTelling/>
      <MySolution/>
      <AboutMe/>
      <TecnologiesStack/>
    </MainContainer>
  );
}
