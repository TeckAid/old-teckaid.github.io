import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Button from '../components/btn'
import Layout from '../components/layout'
import { FaCheckCircle, FaClock, FaRocket, FaChartLine } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import SEO from "../components/seo"
import Box from '../components/box'

let BenefitCard = ({Icon, title, description}) => (
  <Col md={6} className="mb-4">
    <div className="d-flex align-items-start">
      <Icon size={28} className="text-primary me-3 mt-1" style={{minWidth: '28px', flexShrink: 0}}/>
      <div>
        <h5>{title}</h5>
        <p className="text-muted">{description}</p>
      </div>
    </div>
  </Col>
)

let ProcessStep = ({number, title, description}) => (
  <Col md={6} lg={3} className="mb-4">
    <Box className="h-100">
      <div className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle mb-3" style={{width: '50px', height: '50px', margin: '0 auto', fontWeight: 'bold', fontSize: '1.5rem'}}>
        {number}
      </div>
      <h5>{title}</h5>
      <p className="text-muted small">{description}</p>
    </Box>
  </Col>
)

let UseCase = ({title, before, after}) => (
  <Col md={6} className="mb-4">
    <Box className="h-100" style={{textAlign: 'left'}}>
      <h5 className="mb-3">{title}</h5>
      <div className="mb-2">
        <strong className="text-danger">Before:</strong>
        <p className="text-muted small mb-0">{before}</p>
      </div>
      <div>
        <strong className="text-success">After:</strong>
        <p className="text-muted small mb-0">{after}</p>
      </div>
    </Box>
  </Col>
)

const SOPAutomation = () => (
  <Layout>
    <SEO
      title="SOP Automation Services | AI Workflow Automation for Texas Businesses"
      description="Transform manual standard operating procedures into automated AI workflows. Save 5-10 hours per employee per week with SOP automation. Serving Houston, Dallas, Austin, San Antonio."
    />
    <PageTitle title="SOP Automation"/>

    <Container>
      {/* Hero Section */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto text-center">
          <h2 className="mb-3">Transform Manual Procedures Into Automated Workflows</h2>
          <p className="lead text-muted">
            Stop wasting valuable employee time on repetitive manual tasks. Our SOP automation solutions
            help Texas businesses save 5-10 hours per employee per week by automating standard operating
            procedures using AI-powered workflows.
          </p>
          <div className="mt-4">
            <Button to="/contact" className="btn btn-primary btn-lg me-3">
              Get Free Analysis
            </Button>
            <Button to="/#business-tools" className="btn btn-outline-primary btn-lg">
              View Tools
            </Button>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* Key Benefits */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Why Automate Your SOPs?</h3>
          <Row>
            <BenefitCard
              Icon={FaClock}
              title="Save 5-10 Hours Per Employee Weekly"
              description="Eliminate repetitive data entry, manual approvals, and routine follow-ups. Your team focuses on high-value work, not busywork."
            />
            <BenefitCard
              Icon={FaCheckCircle}
              title="Reduce Errors by 90%"
              description="Automated workflows follow procedures perfectly every time. No more missed steps, forgotten notifications, or inconsistent processes."
            />
            <BenefitCard
              Icon={FaRocket}
              title="Faster Process Completion"
              description="What took days now takes hours. Automated handoffs, instant notifications, and parallel processing speed everything up."
            />
            <BenefitCard
              Icon={FaChartLine}
              title="30-40% Cost Reduction"
              description="Lower labor costs, fewer errors, and faster turnaround times directly impact your bottom line with measurable ROI."
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Our Process */}
      <div className="py-5" style={{background: '#f8f9fa'}}>
        <Container>
          <h3 className="text-center mb-5">Our SOP Automation Process</h3>
          <Row>
            <ProcessStep
              number="1"
              title="Discovery"
              description="We analyze your current manual processes to identify automation opportunities and bottlenecks."
            />
            <ProcessStep
              number="2"
              title="Design"
              description="We map out your automated workflow, showing exactly how AI will handle each step of your SOP."
            />
            <ProcessStep
              number="3"
              title="Build"
              description="We implement the automation using proven platforms like Make.com, Zapier, and custom AI integrations."
            />
            <ProcessStep
              number="4"
              title="Train"
              description="Your team learns how to manage and expand the automation. You own it—we just built it."
            />
          </Row>
        </Container>
      </div>

      <Hr/>

      {/* Use Cases */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Real-World SOP Automation Examples</h3>
          <Row>
            <UseCase
              title="Employee Onboarding"
              before="HR manually sends welcome emails, creates accounts, schedules meetings, and tracks paperwork across multiple systems. Takes 3-4 hours per new hire."
              after="Automated workflow triggers on hire date, creates all accounts, sends personalized emails, schedules onboarding meetings, and tracks document completion. Takes 10 minutes of HR oversight."
            />
            <UseCase
              title="Invoice Processing"
              before="Bookkeeper manually extracts data from invoices, enters into QuickBooks, routes for approval, and follows up on pending items. 2 hours daily."
              after="AI extracts invoice data automatically, creates QuickBooks entries, routes to approvers via email, sends reminders, and updates status. 15 minutes of review time."
            />
            <UseCase
              title="Customer Inquiry Routing"
              before="Support team manually reads each inquiry, categorizes it, assigns to correct department, and follows up. 20-30 inquiries per day take 3-4 hours."
              after="AI reads inquiries, categorizes by intent, routes to right team member, creates ticket, and sends acknowledgment. Support only handles complex cases."
            />
            <UseCase
              title="Inventory Reordering"
              before="Manager checks inventory weekly, manually creates purchase orders, emails suppliers, and tracks delivery status. Takes 5 hours weekly."
              after="Automated system monitors inventory levels, generates POs when thresholds hit, emails suppliers, and updates tracking. Manager just approves recommendations."
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* What We Automate */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto">
          <h3 className="text-center mb-4">Common SOPs We Automate</h3>
          <Row>
            <Col md={6}>
              <ul className="text-muted">
                <li>Employee onboarding/offboarding</li>
                <li>Invoice processing and approval</li>
                <li>Customer inquiry routing</li>
                <li>Lead qualification and follow-up</li>
                <li>Inventory management and reordering</li>
                <li>Report generation and distribution</li>
                <li>Contract review and approval</li>
                <li>Compliance documentation</li>
              </ul>
            </Col>
            <Col md={6}>
              <ul className="text-muted">
                <li>Meeting scheduling and reminders</li>
                <li>Document collection and filing</li>
                <li>Data entry and migration</li>
                <li>Quality assurance checks</li>
                <li>Customer feedback collection</li>
                <li>Performance review cycles</li>
                <li>Expense report processing</li>
                <li>Social media content scheduling</li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* CTA Section */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto text-center">
          <h3 className="mb-3">Ready to Automate Your Standard Operating Procedures?</h3>
          <p className="text-muted lead mb-4">
            Get a free analysis of your manual processes and see exactly how much time and money
            you can save with SOP automation. No obligation, no sales pitch—just practical insights
            for your Texas business.
          </p>
          <Button to="/contact" className="btn btn-primary btn-lg">
            Schedule Free Consultation
          </Button>
          <p className="text-muted small mt-3">
            Serving Houston, Dallas, Austin, and San Antonio
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default SOPAutomation
