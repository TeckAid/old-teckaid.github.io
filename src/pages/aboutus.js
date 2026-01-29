import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Button from '../components/btn'
import Layout from '../components/layout'
import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake, FaGraduationCap } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import Box from '../components/box'

let IconBox = Styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`

let City = ({name}) => (
  <Col md={6} lg={3} className="mb-3">
    <Box className="text-center">
      <FaCheckCircle size={30} className="text-primary mb-2"/>
      <h5>{name}</h5>
    </Box>
  </Col>
)

let WhyItem = ({Icon, title, content}) => (
  <IconBox>
    <Icon size={30} className="text-primary me-4 mt-1" style={{minWidth: '30px', flexShrink: 0}}/>
    <div>
      <h4>{title}</h4>
      <p className="text-muted">{content}</p>
    </div>
  </IconBox>
)

const AboutUs = () => (
  <Layout>
    <SEO title="About TeckAid - AI Automation Experts for Texas Businesses" description="Learn about TeckAid's mission to make AI automation accessible for small and mid-size businesses across Texas. Serving Houston, Dallas, Austin, and San Antonio." />
    <PageTitle title="About Us"/>
    <Container>
      <Row className="py-5">
        <Col lg={12}>
          <div className="mb-5">
            <h2>Making AI Accessible for Texas Businesses</h2>
            <Hr/>
            <p className="lead text-muted">
              At TeckAid, we believe that AI automation shouldn't be reserved for Fortune 500 companies.
              Small and mid-size businesses across Texas deserve access to the same powerful tools that help
              cut costs, eliminate repetitive tasks, and free teams to focus on growth.
            </p>
            <p className="text-muted">
              We're a Texas-based team that understands your market. We've seen firsthand how businesses
              struggle with manual processes, rising labor costs, and the complexity of modern technology.
              That's why we focus on practical, results-driven AI solutions using proven platforms like
              ChatGPT, Claude, Make.com, and Zapier. No vendor lock-in, no complexity, no jargon—just
              automation that works.
            </p>
          </div>

          <div className="mb-5">
            <h3>Why Choose TeckAid?</h3>
            <Hr/>
            <Row>
              <Col md={6}>
                <WhyItem
                  Icon={FaUsers}
                  title="Texas-Based Team"
                  content="We understand your market, your challenges, and your goals. We're not a distant agency—we're your neighbors."
                />
                <WhyItem
                  Icon={FaLightbulb}
                  title="Practical Solutions"
                  content="No over-engineering. We build automation workflows that solve real problems and deliver measurable ROI within weeks."
                />
              </Col>
              <Col md={6}>
                <WhyItem
                  Icon={FaHandshake}
                  title="No Vendor Lock-In"
                  content="We use industry-standard platforms and open-source tools. Your workflows belong to you, not us."
                />
                <WhyItem
                  Icon={FaGraduationCap}
                  title="Training Included"
                  content="We don't just build and leave. Your team gets complete training to manage and expand your AI automation."
                />
              </Col>
            </Row>
          </div>

          <div className="mb-5">
            <h3>Service Areas</h3>
            <Hr/>
            <p className="text-muted mb-4">
              We proudly serve small and mid-size businesses across Texas, with a focus on the state's
              major business hubs:
            </p>
            <Row>
              <City name="Houston"/>
              <City name="Dallas"/>
              <City name="Austin"/>
              <City name="San Antonio"/>
            </Row>
          </div>

          <div className="text-center py-4">
            <h3 className="mb-3">Ready to Transform Your Business?</h3>
            <p className="text-muted mb-4">
              Schedule a free 30-minute consultation to discuss how AI automation can help your business
              cut costs and boost efficiency.
            </p>
            <Button to="/contact" className="btn btn-primary btn-lg">
              Get Your Free Consultation
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AboutUs
