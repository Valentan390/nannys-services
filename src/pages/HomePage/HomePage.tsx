import { FC } from "react";
import Hero from "../../components/Hero/Hero";
import MainSection from "../../components/MainSection/MainSection";

const HomePage: FC = () => {
  return (
    <MainSection>
      <Hero />
    </MainSection>
  );
};

export default HomePage;
