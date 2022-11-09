import styled from 'styled-components';

const Wrapper = styled.section`
  padding: 2rem 2.5rem;
  width: 100%;
  min-height: 100%;
  max-width: 50rem;
  background-color: ${(props) => props.theme.colors.bg};
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  h1 {
    margin-top: 3rem;
    font-weight: bold;
    font-size: 1.5rem;
  }
`;

const S = {
  Wrapper,
};

export default S;
