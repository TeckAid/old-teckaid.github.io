import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Button from '../components/btn'
import Layout from '../components/layout'
import { FaClock, FaComments, FaChartLine, FaHeadset, FaRobot, FaCheck } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import SEO from "../components/seo"
import Box from '../components/box'

let FeatureCard = ({Icon, title, description}) => (
  <Col md={6} lg={4} className="mb-4">
    <Box className="h-100">
      <Icon size={32} className="text-primary mb-3"/>
      <h5>{title}</h5>
      <p className="text-muted small">{description}</p>
    </Box>
  </Col>
)

let Benefit = ({title, stat, description}) => (
  <Col md={4} className="mb-4 text-center">
    <div className="mb-2">
      <div className="display-4 text-primary font-weight-bold">{stat}</div>
      <h5>{title}</h5>
    </div>
    <p className="text-muted small">{description}</p>
  </Col>
)

let Integration = ({name}) => (
  <Col xs={6} md={4} lg={3} className="mb-3">
    <div className="d-flex align-items-center">
      <FaCheck className="text-success me-2" size={16}/>
      <span className="text-muted">{name}</span>
    </div>
  </Col>
)

const AICustomerService = () => (
  <Layout>
    <SEO
      title="AI Customer Service Chatbots | 24/7 Automated Support for Texas Businesses"
      description="Deploy AI-powered chatbots that handle customer inquiries 24/7. Reduce support costs by 60% while improving response times. Serving Houston, Dallas, Austin, San Antonio."
    />
    <PageTitle title="AI Customer Service"/>

    <Container>
      {/* Hero Section */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto text-center">
          <h2 className="mb-3">24/7 AI-Powered Customer Support Without the Headcount</h2>
          <p className="lead text-muted">
            Deploy intelligent AI chatbots that handle common customer inquiries instantly, escalate
            complex issues to your team, and work around the clock. Reduce support costs by 60%
            while improving response times and customer satisfaction.
          </p>
          <div className="mt-4">
            <Button to="/contact" className="btn btn-primary btn-lg me-3">
              Get Free Demo
            </Button>
            <Button to="/#business-tools" className="btn btn-outline-primary btn-lg">
              View AI Tools
            </Button>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* Key Benefits */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Why AI Customer Service?</h3>
          <Row>
            <Benefit
              stat="24/7"
              title="Always Available"
              description="Never miss a customer inquiry. AI handles questions instantly, even at 2 AM on weekends."
            />
            <Benefit
              stat="60%"
              title="Cost Reduction"
              description="AI handles 60-80% of routine inquiries, freeing your team for complex issues that need human touch."
            />
            <Benefit
              stat="<5s"
              title="Instant Response"
              description="Customers get immediate answers to common questions. No wait times, no frustration."
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Features */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">What Our AI Customer Service Can Do</h3>
          <Row>
            <FeatureCard
              Icon={FaComments}
              title="Answer Common Questions"
              description="Pricing, hours, services, policies—AI handles frequently asked questions instantly with accurate, consistent responses."
            />
            <FeatureCard
              Icon={FaHeadset}
              title="Smart Escalation"
              description="AI recognizes when it needs human help. Complex issues are routed to your team with full context and conversation history."
            />
            <FeatureCard
              Icon={FaRobot}
              title="Natural Conversations"
              description="Powered by ChatGPT and Claude, our chatbots understand context, intent, and nuance—not just keywords."
            />
            <FeatureCard
              Icon={FaClock}
              title="Appointment Scheduling"
              description="AI checks your calendar availability, books appointments, sends confirmations, and handles rescheduling requests."
            />
            <FeatureCard
              Icon={FaChartLine}
              title="Order Status & Tracking"
              description="Customers check order status, track shipments, and get delivery updates without contacting support."
            />
            <FeatureCard
              Icon={FaCheck}
              title="Lead Qualification"
              description="AI asks qualifying questions, collects contact info, and routes hot leads to sales with detailed context."
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* How It Works */}
      <div className="py-5" style={{background: '#f8f9fa'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h3 className="text-center mb-4">How It Works</h3>
              <div className="mb-4">
                <h5>1. Train Your AI on Your Business</h5>
                <p className="text-muted">
                  We feed your FAQs, policies, product info, and documentation into the AI. It learns
                  your business inside and out—like training a new support rep, but in hours, not weeks.
                </p>
              </div>
              <div className="mb-4">
                <h5>2. Integrate With Your Existing Tools</h5>
                <p className="text-muted">
                  Connect to your website, scheduling software, CRM, and support ticketing system.
                  AI works within your existing workflow—no rip and replace.
                </p>
              </div>
              <div className="mb-4">
                <h5>3. Deploy Across All Channels</h5>
                <p className="text-muted">
                  Website chat widget, Facebook Messenger, SMS, email—your AI works everywhere customers
                  reach out. One AI, consistent answers everywhere.
                </p>
              </div>
              <div className="mb-4">
                <h5>4. Monitor & Improve</h5>
                <p className="text-muted">
                  Review conversations, see what questions the AI struggled with, and refine responses.
                  Your AI gets smarter over time.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Hr/>

      {/* Use Cases */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Common Customer Service Tasks We Automate</h3>
          <Row>
            <Col md={6} lg={4} className="mb-3">
              <ul className="text-muted">
                <li>Answering product questions</li>
                <li>Explaining pricing and packages</li>
                <li>Providing business hours and locations</li>
                <li>Booking appointments and demos</li>
                <li>Collecting customer information</li>
              </ul>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <ul className="text-muted">
                <li>Checking order status</li>
                <li>Processing returns and exchanges</li>
                <li>Troubleshooting common issues</li>
                <li>Sending password reset links</li>
                <li>Updating account information</li>
              </ul>
            </Col>
            <Col md={6} lg={4} className="mb-3">
              <ul className="text-muted">
                <li>Qualifying sales leads</li>
                <li>Routing urgent issues to staff</li>
                <li>Collecting customer feedback</li>
                <li>Sending policy and warranty info</li>
                <li>Generating support tickets</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Integrations */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto">
          <h3 className="text-center mb-4">Works With Your Existing Tools</h3>
          <p className="text-center text-muted mb-4">
            Our AI customer service integrates seamlessly with the platforms you already use:
          </p>
          <Row>
            <Integration name="Website (any platform)"/>
            <Integration name="Facebook Messenger"/>
            <Integration name="Instagram DM"/>
            <Integration name="WhatsApp"/>
            <Integration name="SMS/Text"/>
            <Integration name="Email"/>
            <Integration name="Zendesk"/>
            <Integration name="HubSpot"/>
            <Integration name="Salesforce"/>
            <Integration name="Calendly"/>
            <Integration name="Google Calendar"/>
            <Integration name="Shopify"/>
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* CTA Section */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto text-center">
          <h3 className="mb-3">Ready to Deploy AI Customer Service?</h3>
          <p className="text-muted lead mb-4">
            See how AI can handle 60-80% of your customer inquiries automatically. Get a free demo
            customized to your business and see exactly what your AI chatbot would say to your
            actual customer questions.
          </p>
          <Button to="/contact" className="btn btn-primary btn-lg">
            Schedule Free Demo
          </Button>
          <p className="text-muted small mt-3">
            Serving Houston, Dallas, Austin, and San Antonio
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default AICustomerService
