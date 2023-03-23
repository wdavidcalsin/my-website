import * as React from "react";
import Head from "next/head";

interface IPropsMetaHead {
  title: string;
  description: string;
}

const MetaHead: React.FC<IPropsMetaHead> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/image/logo-img5.png" />
    </Head>
  );
};

export default MetaHead;
