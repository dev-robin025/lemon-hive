import { NextPage } from "next";
import Head from "next/head";
import Typography from "../components/shared/Typography";

const Conference: NextPage = () => {
  return (
    <div className="max-w-[1320px] mx-auto px-16">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Typography.H2>Conference info</Typography.H2>
      <Typography.H3>
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.
      </Typography.H3>
    </div>
  );
};

export default Conference;