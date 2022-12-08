import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const StyledPrimaryLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  main {
    flex: 1;
  }
`;

const PrimaryLayout = () => {
  return (
    <StyledPrimaryLayout>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </StyledPrimaryLayout>
  );
};

export default PrimaryLayout;
