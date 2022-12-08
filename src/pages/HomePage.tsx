import { HomeBanner } from "modules/home";
import styled from "styled-components";

const StyledHomePage = styled.div``;

const HomePage = () => {
  return (
    <StyledHomePage>
      <div className="container">
        <HomeBanner />
      </div>
    </StyledHomePage>
  );
};

export default HomePage;
