import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Should be visible on mobile</h1>
      <StaticImage src="../images/icon.png" alt="logo" className="md:hidden" />
      <h1>Should be visible on tablet</h1>
      <StaticImage
        src="../images/icon.png"
        alt="logo"
        className="hidden md:block"
      />
    </main>
  );
};

export default IndexPage;
