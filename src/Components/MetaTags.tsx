import { Helmet } from "react-helmet";


const MetaTags = () => {
  return (<Helmet>
    <meta property="og:url" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Surya T" />
    <meta property="og:description" content="I Design/Develop Stuff" />
    <meta property="og:image" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Surya T" />
    <meta name="twitter:description" content="I Design/Develop Stuff" />
    <meta name="twitter:image" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />

    <meta name="theme-color" content="#000000" />
    <meta property="og:image" content={`${process.env.PUBLIC_URL}/surya.jpeg`} />
    <meta name="description" content="I Design/Develop Stuff" />
  </Helmet>)
}

export default MetaTags;