import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFoundImage = styled('img')`
  display: block;
  width: 580px;
`;

const NotFoundWrapper = styled('div')`
  display: flex;
  align-items: center;
`;

const BackHomeLink = styled(Link)`
  padding: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: rgb(3, 37, 65);
  font-size: 15px;
  color: white;
  border: none;
  border-radius: 20px;
  margin: 10px;
  text-decoration: none;
`;

const NotFound = () => {
  return (
    <NotFoundWrapper className="mt-[4%] block md:flex w-full">
      <NotFoundImage
        src="https://krishnandinesh.github.io/404-Error/images/scarecrow.png"
        alt="img"
      />
      <div>
        <h1>
          I Have Bad News <br /> For You
        </h1>
        <h4 style={{ letterSpacing: '-0.035em' }}>
          The page you are looking <br />
          for might be removed or is <br />
          temporarily unavailable
        </h4>
        <BackHomeLink end to="/">
          Back to Home
        </BackHomeLink>
      </div>
    </NotFoundWrapper>
  );
};

export default NotFound;
