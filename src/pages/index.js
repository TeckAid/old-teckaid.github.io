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
import { FaAmazon, FaBuysellads, FaShieldAlt, FaRegEnvelopeOpen } from 'react-icons/fa';
import Benefits from '../components/benefits'
import styled from 'styled-components'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

let Service = ({title, Icon}) => (
  <Col>
    <Link to="/">
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

export default () => (
  <Layout>
    <SEO title="3rd Party eCommerce Management Services" />
    <Slider/>
    <Container className="pt-4">
      <div className="text-center">
        <h4>Build a Successful Brand on Amazon.</h4>
        <p className="text-muted">We take pride in our work to help your products  and brand reach a wider audience.  We also provide a full range of services that  extend beyond just product listing and amazon PPC marketing. Since we’re among one of the largest of Amazon sellers. We understand the ecosystem better then anyone.  We have helped over 100 brands take control of the Amazon channel, improve their positioning, and grow sales. Our data driven methods, have proved to our suppliers, and partners  that we mean results. See below, why we’re the partner you business needs to improve your Amazon presence. </p>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">Services</h2>
      <Row>
        <Service title="Manage Listing" Icon={FaAmazon}/>
        <Service title="PPC Management" Icon={FaBuysellads}/>
        <Service title="Brand Protection" Icon={FaShieldAlt}/>
      </Row>
    </Container>
    <div className="text-center py-5">
      <Button to="/contact" className="btn btn-primary btn-lg">
        <FaRegEnvelopeOpen className="mr-1"/>
        Contact Us
      </Button>
    </div>
    <StyledBackground>
      <Benefits/>
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
