import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledBackgroundSection from "../components/backgroundimage"

const IndexPage = ({ data }) => (
  <>
    <StyledBackgroundSection>
      <Layout>
        <SEO title="Home" keywords={[`computer science`, `coding`, `gatsby`]} />
      </Layout>
    </StyledBackgroundSection>
  </>
)

export default IndexPage
