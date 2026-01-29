import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Link from '../components/link'
import Layout from '../components/layout'
import ContactForm from '../components/form'
import SEO from '../components/seo'
import { FaPhone, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import { graphql } from 'gatsby'

let Cirle = Styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

let ContactItem = ({text, type, Icon, href}) => (
  <Col xs={4} lg={4} className="d-flex flex-column align-items-center" style={{wordBreak: 'break-word'}}>
    <Cirle className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
      <Icon size={30}/>
    </Cirle>
    <div className="text-center">
      <h6>{type}</h6>
      <span className="text-secondary">
        {href ? <Link to={href} className="reset">{text}</Link> : text}
      </span>
    </div>
  </Col>
)

export default ({data}) => (
  <Layout>
    <SEO title="Contact TeckAid - AI Automation Consultation | Texas" description="Get your free 30-minute AI automation consultation. Contact TeckAid to learn how we can help your Texas business cut costs and boost efficiency." />
    <PageTitle title="Contact Us"/>
    <Container>
      <Row className="py-5">
        <Col lg={8} className="m-auto text-center mb-4">
          <h2>Get Your Free 30-Minute AI Consultation</h2>
          <p className="text-muted lead">
            Let's discuss how AI automation can transform your business operations. No sales pitch—just
            practical insights on cost reduction opportunities and automation workflows tailored to your needs.
          </p>
        </Col>
      </Row>
      <Row className="pb-3">
        <ContactItem text={data.site.siteMetadata.address} type="Address" Icon={FaMapMarkerAlt}/>
        <ContactItem text={data.site.siteMetadata.email} href={`mailto:support@teckaid.com`} type="Email" Icon={FaEnvelope}/>
        <ContactItem text={data.site.siteMetadata.phone} href={`tel:2812010151`} type="Phone" Icon={FaPhone}/>
      </Row>
      <hr/>
      <Row className="py-5">
        <Col md={6} className="m-auto">
          <h4 className="text-center text-secondary">Message Us</h4>
          <Hr/>
          <ContactForm/>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        address
        email
        phone
        fax
      }
    }
  }
`
