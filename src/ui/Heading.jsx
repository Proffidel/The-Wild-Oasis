import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 === 5 && "background-color:yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      color: blue;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 200;
      color: #441c1c;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;
    `}

  line-height: 5.5rem
`;

export default Heading;
