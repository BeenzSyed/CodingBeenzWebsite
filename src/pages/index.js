import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/backgroundimage"
import Menu from "../components/menu"


const IndexPage = ({ data }) => (
  <>
  <StyledBackgroundSection>
      <Layout>
      <SEO title="Home" keywords={[`computer science`, `coding`, `gatsby`]} />
      </Layout>
    </StyledBackgroundSection>
  </>
);

export default IndexPage;