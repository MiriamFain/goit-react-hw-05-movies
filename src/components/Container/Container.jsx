import styled from 'styled-components';

const Wrapper = styled('section')`
  padding: 20px 30px;
  text-align: center;
`;

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};
