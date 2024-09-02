import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

function Sidebar() {
  return (
    <StyledAside>
      <Logo />
      <MainNav />
    </StyledAside>
  );
}

export default Sidebar;

//styles using styled component
const StyledAside = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row-start: 1;
  grid-row-end: -1;
  /* the below expression is the same as the above */
  /* grid-row: 1/-1; */
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
