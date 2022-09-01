import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <TitleA>Hello world!</TitleA>
      </main>
    </div>
  );
};

export const TitleA = styled.h1`
  color: gray;
`;

export default Home;
