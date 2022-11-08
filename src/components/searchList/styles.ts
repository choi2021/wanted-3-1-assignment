import styled from 'styled-components';

const List = styled.ul`
  padding: 1rem 0;
  text-align: start;
  h3 {
    margin: 0.5rem 0;
    margin-bottom: 0.25rem;
    padding: 0.25rem 1rem;
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.grey};
  }
  li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    transition: all ease-in 100ms;
    svg {
      margin-right: 1rem;
      color: ${(props) => props.theme.colors.grey};
    }
    &:hover {
      background-color: ${(props) => props.theme.colors.lightGrey};
    }
  }
`;

const S = {
  List,
};

export default S;
