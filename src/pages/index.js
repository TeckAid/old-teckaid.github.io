import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Button from '../components/btn'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Form from '../components/form'
import Slider from '../components/slider'
import Box from '../components/box'
import Hr from '../components/hr'
import { FaRobot, FaCogs, FaChartLine } from 'react-icons/fa';
import Benefits from '../components/benefits'
import BusinessTools from '../components/business-tools'
import styled from 'styled-components'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

let Service = ({title, Icon, url}) => (
  <Col>
    <Link to={url}>
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

export default () => (
  <Layout>
    <SEO title="AI Automation Services for Texas Small Businesses | Houston, Dallas, Austin, San Antonio" />
    <Slider/>
    <Container className="pt-4">
      <div className="text-center">
        <h4>Making AI Automation Accessible for Texas Businesses</h4>
        <p className="text-muted">Transform your business operations with custom AI automation workflows. We help small and mid-size businesses in Houston, Dallas, Austin, and San Antonio cut operational costs by 30-40% through smart automation. Free your team from manual, repetitive tasks and focus on what matters most—growing your business. Our Texas-based team delivers practical AI solutions using ChatGPT, Claude, and proven automation platforms. No complexity, no jargon, just results.</p>
      </div>
    </Container>
    <Container className="py-5" id="services">
      <h2 className="text-center mb-4">Services</h2>
      <Row>
        <Service title="SOP Automation" Icon={FaRobot} url="/sop-automation"/>
        <Service title="AI Customer Service" Icon={FaCogs} url="/ai-customer-service"/>
        <Service title="Cost Reduction Analysis" Icon={FaChartLine} url="/cost-reduction-analysis"/>
      </Row>
    </Container>
    <StyledBackground>
      <Benefits/>
      <BusinessTools/>
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Box style={{textAlign: 'left'}}>
                <h3 className="text-center">Take Action Now, Contact Us!</h3>
                <Hr/>
                <Form/>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
  </Layout>
)
