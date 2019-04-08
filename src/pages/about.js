import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <p class="about">
        Hi! I'm Sabeen and I love teaching and writing about Computer Science
        concepts. Check out my <Link to="/blog">Blog</Link>,{" "}
        <a href="https://www.instagram.com/codingbeenz/">Instagram</a> and{" "}
        <a href="https://twitter.com/CodingBeenz">Twitter</a> where I post
        regularly!
      </p>
    </Layout>
  )
}

export default AboutPage
