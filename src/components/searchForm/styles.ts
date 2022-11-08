import styled from 'styled-components';

const Form = styled.form`
  margin-top: 2rem;
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 1.5rem;
  overflow: hidden;
  svg {
    margin-left: 1rem;
  }
  input {
    background-color: transparent;
    border: none;
    outline: none;
    flex: 1 1 80%;
    font-size: 1.2rem;
    margin-left: 1rem;
  }
  button {
    flex: 1 1 10%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.blue};
    color: white;
    border: none;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
  }
`;

const S = {
  Form,
};
export default S;
