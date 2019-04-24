import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Video from "../components/video-background"

const IndexPage = ({ data }) => (
  <>
    <Video
      videoSrcURL="https://www.youtube.com/embed/Y_9SwDFd_9Y?&autoplay=1&controls=0&&showinfo=0&loop=1​&start=145&mute=1"
      videoTitle="Sample Coding on Youtube"
    />
    <Layout>
      <SEO title="Home" keywords={[`computer science`, `coding`, `gatsby`]} />
    </Layout>
  </>
)

export default IndexPage
