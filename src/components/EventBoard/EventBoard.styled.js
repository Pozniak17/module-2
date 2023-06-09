import styled from 'styled-components';

export const Container = styled.div`
  margin-left: ${props => props.theme.spacing(4)};
  margin-right: ${props => props.theme.spacing(4)};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, auto));
  gap: 24px;
  padding-left: ${props => props.theme.space[4]};
  padding-right: ${props => props.theme.space[4]};
`;
