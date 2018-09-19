import React from "react";
import Head from "next/head";

const Index = () => (
  <div>
    <Head>
      <title>Tracko - An inventory and sales tracking app</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
);

export default Index;
