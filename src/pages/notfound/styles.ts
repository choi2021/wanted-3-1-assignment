import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 50rem;
  background-color: rgb(31 41 55);
`;
const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  color: rgb(243 244 246);
`;
const HomeButton = styled.button`
  color: rgb(31 41 55);
  margin-top: 50px;
  cursor: pointer;
  background-color: rgb(243 244 246);
  padding: 0.5rem;
  border-radius: 10px;
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background-color: rgb(31 41 55);
    color: rgb(243 244 246);
  }
`;

const S = {
  Section,
  HomeButton,
  Title,
};

export default S;
