import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`computer science`, `coding`, `gatsby`]} />
    <section class="center-aligned">
      <Image />
      <div class="text">
        <h1>Welcome!</h1>
        <p>Learn about computer science concepts here!!</p>
      </div>
    </section>

  </Layout>
)

export default IndexPage;