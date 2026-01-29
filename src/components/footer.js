import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import Link from './link';
import styled from "styled-components"

const Footer = styled.footer`
  padding: 3rem 0;
  background: #f8f9fa;
  a, a:hover {
    color: inherit;
  }
  ul {
    color: rgba(0, 0, 0, 0.5);
    -webkit-padding-start: 0;
    padding: 0;
    & > li {
      list-style: none;
      a, a:hover {
        color: inherit;
      }
    }
  }
`

let SocialLink = ({Icon}) => (
  <Link to="/" className="mr-2">
    <Icon size={30}/>
  </Link>
)

let FooterLink = ({to, children}) => (
  <li>
    <Link to={to}>
      {children}
    </Link>
  </li>
)

export default () => (
  <Footer>
    <Container>
      <Row>
        <Col md={6} lg={3}>
          <h5>AI Automation Services</h5>
          <ul>
            <FooterLink to="/#services">SOP Automation</FooterLink>
            <FooterLink to="/#services">AI Customer Service</FooterLink>
            <FooterLink to="/#services">Workflow Integration</FooterLink>
            <FooterLink to="/#services">Cost Reduction Analysis</FooterLink>
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5>Business Tools</h5>
          <ul>
            <FooterLink to="/#business-tools">AI Platforms</FooterLink>
            <FooterLink to="/#business-tools">CRM Solutions</FooterLink>
            <FooterLink to="/#business-tools">Accounting Software</FooterLink>
            <FooterLink to="/#business-tools">Project Management</FooterLink>
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5>Company</h5>
          <ul>
            <FooterLink to="/aboutus">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </ul>
        </Col>
        <Col md={6} lg={3}>
          <h5>Service Areas</h5>
          <ul>
            <li>Houston, TX</li>
            <li>Dallas, TX</li>
            <li>Austin, TX</li>
            <li>San Antonio, TX</li>
          </ul>
        </Col>
      </Row>
    </Container>
  </Footer>
)
