import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaRocket, FaCogs} from 'react-icons/fa'
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

let StyledImg = styled(GatsbyImage)`
  perspective: 1500px;
  perspective-origin: left center;
  overflow: visible !important;
  img {
    transform: rotateY(-35deg) rotateX(15deg);
    box-shadow: 25px 60px 125px -25px rgba(80,102,144,.1), 16px 40px 75px -40px rgba(0,0,0,.2);
    border-radius: .625rem;
    transition: 1s !important;
    &:hover {
      transform: rotateY(-30deg) rotateX(15deg);
    }
  }
`

let Benefit = ({Icon, title, content}) => (
  <div className="d-flex mb-4">
    <Icon size={30} className="text-primary"/>
    <div className="ml-3">
      <h4>{title}</h4>
      <p className="m-0 text-muted">{content}</p>
    </div>
  </div>
)

let Benefits = ({data}) => {
  const image = getImage(data.file)
  return (
    <Container className="py-5">
      <Row className="d-flex align-items-center">
        <Col md="6">
          <div className="mb-4">
            <h2 className="text-primary">Ready to Transform Your Business with AI?</h2>
            <p className="text-muted">Cut costs and boost efficiency with practical automation solutions.</p>
          </div>
          <Benefit Icon={FaRocket} title="Fast AI Implementation" content="We help Texas businesses deploy AI automation workflows that save 5-10 hours per employee per week. Start seeing results within weeks, not months."/>
          <Benefit Icon={FaCogs} title="Custom Workflow Solutions" content="Your business is unique. We build tailored AI solutions using ChatGPT, Claude, and proven automation platforms—no vendor lock-in, complete training included."/>
        </Col>
        <Col md="6">
          <StyledImg image={image} alt="AI Automation Services" objectFit="contain" objectPosition="50% 50%"/>
        </Col>
      </Row>
    </Container>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BenefitsQuery {
        file(relativePath: {eq: "ppcmarketing.png"}) {
          id
          childImageSharp {
            gatsbyImageData(
              width: 600
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={data => (
      <Benefits data={data}/>
    )}
  />
)
