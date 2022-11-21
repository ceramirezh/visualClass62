import styled from "styled-components";
import TestPage1 from "./TestPage1";

const Popultaion = () => {
  return (
    <div>
      <Title>This is Population</Title>
      <TestPage1 />
    </div>
  );
};

export default Popultaion;

const Title = styled.h3`
  display: flex;
  justify-content: center;
`;
