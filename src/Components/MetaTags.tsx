import { Helmet } from "react-helmet";

const MetaTags = () => {
  console.log("url ->", process.env.PUBLIC_URL);

  return (<Helmet>
    <meta property="og:url" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Surya T" />
    <meta property="og:description" content="I Design/Develop Stuff" />
    <meta property="og:image" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="I Design/Develop Stuff" />
  </Helmet>)
}

export default MetaTags;