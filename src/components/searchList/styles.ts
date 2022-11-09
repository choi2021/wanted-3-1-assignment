import styled from 'styled-components';

const List = styled.ul`
  padding: 0.5rem 0;
  text-align: start;

  h3 {
    margin: 0.5rem 0;
    margin-bottom: 0.25rem;
    padding: 0.25rem 1.5rem;
    font-size: 0.7rem;
    color: ${(props) => props.theme.colors.grey};
  }
`;

const S = {
  List,
};

export default S;
