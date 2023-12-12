import React from "react";
import type { GetServerSideProps, NextPage } from "next";

type Props = {
  serverData: string;
};

/**
 * The Test page
 * @return {JSX.Element} The JSX Code for the page
 */

// eslint-disable-next-line react/prop-types
const Test: NextPage<Props> = ({ serverData }) => {
  return <h1>{serverData}</h1>;
};

/**
 * SSR
 * @return {Object} The Props to pass along to the front-end
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=300, stale-while-revalidate=604800"
  );
  res.setHeader(
    "CDN-Cache-Control",
    "s-maxage=300, stale-while-revalidate=604800"
  );

  return {
    props: {
      serverData: "Hello world",
    },
  };
};

export default Test;
