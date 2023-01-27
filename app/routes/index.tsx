import { Hero } from "~/components/landingPage/Hero";
import { StoryTelling } from "~/components/landingPage/StoryTelling";
import { MainContainer } from "~/components/MainContainer";
import { Nav } from "~/components/Nav";

export default function Index() {
  return (
    <MainContainer>
      <Nav />
      <Hero/>
      <StoryTelling/>
    </MainContainer>
  );
}
