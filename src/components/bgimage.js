import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from 'styled-components'
import Menu from "./menu"
import Header from "./header"

const BackgroundSection = ({className}) => (
    <StaticQuery query={graphql`
        query {
            desktop: file(relativePath: { eq: "sabeenlaptop.JPG" }) {
                childImageSharp {
                    fluid(quality: 100, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `}
    render={data => {
        // Set ImageData.
        const imageData = data.desktop.childImageSharp.fluid
        return (
           <BackgroundImage Tag="section"
                            className={className}
                            fluid={imageData}
                            backgroundColor={`#040e18`}
           >
          <Menu />
          </BackgroundImage>
        )
      }
      }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 120vh;
  z-index: -1;
`

export default StyledBackgroundSection