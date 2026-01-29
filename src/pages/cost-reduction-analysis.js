import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Button from '../components/btn'
import Layout from '../components/layout'
import { FaChartLine, FaDollarSign, FaCalculator, FaClipboardCheck, FaLightbulb, FaCogs } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import SEO from "../components/seo"
import Box from '../components/box'

let StatCard = ({Icon, stat, label, description}) => (
  <Col md={4} className="mb-4">
    <Box className="h-100 text-center">
      <Icon size={40} className="text-primary mb-3"/>
      <div className="display-4 text-primary font-weight-bold">{stat}</div>
      <h5 className="mb-2">{label}</h5>
      <p className="text-muted small">{description}</p>
    </Box>
  </Col>
)

let ProcessStep = ({number, title, description}) => (
  <div className="d-flex align-items-start mb-4">
    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{minWidth: '40px', height: '40px', fontWeight: 'bold', flexShrink: 0}}>
      {number}
    </div>
    <div>
      <h5>{title}</h5>
      <p className="text-muted">{description}</p>
    </div>
  </div>
)

let CostArea = ({title, description, savings}) => (
  <Col md={6} className="mb-4">
    <Box className="h-100" style={{textAlign: 'left'}}>
      <h5 className="mb-2">{title}</h5>
      <p className="text-muted small mb-3">{description}</p>
      <div className="d-flex align-items-center">
        <span className="badge bg-success text-white px-3 py-2">
          Typical Savings: {savings}
        </span>
      </div>
    </Box>
  </Col>
)

const CostReductionAnalysis = () => (
  <Layout>
    <SEO
      title="Cost Reduction Analysis | AI Automation ROI Assessment for Texas Businesses"
      description="Get a free analysis identifying where AI automation can cut your operational costs by 30-40%. Detailed ROI projections for your business. Serving Houston, Dallas, Austin, San Antonio."
    />
    <PageTitle title="Cost Reduction Analysis"/>

    <Container>
      {/* Hero Section */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto text-center">
          <h2 className="mb-3">Discover Where AI Automation Can Save Your Business 30-40%</h2>
          <p className="lead text-muted">
            Get a detailed analysis of your current operations and see exactly where AI automation
            can reduce costs. We identify opportunities, project ROI, and show you the path to
            implementation—all before you commit a dollar.
          </p>
          <div className="mt-4">
            <Button to="/contact" className="btn btn-primary btn-lg me-3">
              Get Free Analysis
            </Button>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* Key Stats */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">What Texas Businesses Are Saving</h3>
          <Row>
            <StatCard
              Icon={FaDollarSign}
              stat="30-40%"
              label="Cost Reduction"
              description="Average operational cost savings from AI automation across labor, errors, and efficiency gains"
            />
            <StatCard
              Icon={FaChartLine}
              stat="3-6mo"
              label="ROI Timeline"
              description="Typical time to break even on automation investment. Some processes pay for themselves in weeks"
            />
            <StatCard
              Icon={FaCogs}
              stat="5-10hr"
              label="Time Saved Weekly"
              description="Average hours saved per employee per week through automated workflows and AI assistance"
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* What We Analyze */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Cost Areas We Analyze</h3>
          <Row>
            <CostArea
              title="Manual Data Entry & Processing"
              description="Time spent manually entering data, processing forms, updating spreadsheets, and copying information between systems."
              savings="70-90%"
            />
            <CostArea
              title="Customer Support Labor"
              description="Hours spent answering repetitive questions, routing inquiries, and handling routine support tasks that AI could manage."
              savings="60-80%"
            />
            <CostArea
              title="Document Processing"
              description="Time extracting information from invoices, contracts, applications, and other documents that AI can read automatically."
              savings="80-95%"
            />
            <CostArea
              title="Error Correction & Rework"
              description="Cost of fixing mistakes from manual processes, missed follow-ups, and inconsistent procedures."
              savings="85-95%"
            />
            <CostArea
              title="Repetitive Communications"
              description="Hours sending status updates, appointment reminders, follow-up emails, and routine notifications."
              savings="90-100%"
            />
            <CostArea
              title="Report Generation"
              description="Time manually pulling data, creating reports, and distributing to stakeholders on regular schedules."
              savings="75-90%"
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Our Analysis Process */}
      <div className="py-5" style={{background: '#f8f9fa'}}>
        <Container>
          <Row>
            <Col lg={8} className="mx-auto">
              <h3 className="text-center mb-5">Our Analysis Process</h3>
              <ProcessStep
                number="1"
                title="Process Inventory"
                description="We document your current manual processes, workflows, and pain points. Where does your team spend the most time on repetitive tasks?"
              />
              <ProcessStep
                number="2"
                title="Cost Calculation"
                description="We calculate the true cost of each manual process: labor hours × hourly rate + error costs + opportunity costs of delayed work."
              />
              <ProcessStep
                number="3"
                title="Automation Opportunities"
                description="We identify which processes are best candidates for automation based on volume, complexity, and impact. Not everything should be automated—we focus on what matters."
              />
              <ProcessStep
                number="4"
                title="ROI Projection"
                description="For each automation opportunity, we project implementation costs, time savings, error reduction, and break-even timeline. You see exact numbers, not vague promises."
              />
              <ProcessStep
                number="5"
                title="Prioritized Roadmap"
                description="We rank opportunities by ROI and create a phased implementation plan. Start with quick wins that fund bigger projects."
              />
            </Col>
          </Row>
        </Container>
      </div>

      <Hr/>

      {/* What You Get */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto">
          <h3 className="text-center mb-5">What's Included in Your Free Analysis</h3>
          <Row>
            <Col md={6} className="mb-4">
              <div className="d-flex align-items-start">
                <FaClipboardCheck size={24} className="text-primary me-3 mt-1" style={{flexShrink: 0}}/>
                <div>
                  <h5>Process Assessment Report</h5>
                  <p className="text-muted small">
                    Detailed breakdown of your current manual processes with time and cost analysis.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="d-flex align-items-start">
                <FaCalculator size={24} className="text-primary me-3 mt-1" style={{flexShrink: 0}}/>
                <div>
                  <h5>ROI Projections</h5>
                  <p className="text-muted small">
                    Specific cost savings estimates for each automation opportunity with break-even timelines.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="d-flex align-items-start">
                <FaLightbulb size={24} className="text-primary me-3 mt-1" style={{flexShrink: 0}}/>
                <div>
                  <h5>Automation Recommendations</h5>
                  <p className="text-muted small">
                    Which processes to automate first, which tools to use, and how to implement.
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} className="mb-4">
              <div className="d-flex align-items-start">
                <FaChartLine size={24} className="text-primary me-3 mt-1" style={{flexShrink: 0}}/>
                <div>
                  <h5>Implementation Roadmap</h5>
                  <p className="text-muted small">
                    Phased plan prioritizing quick wins and showing the path to full automation.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Real Examples */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto">
          <h3 className="text-center mb-4">Real Cost Reduction Examples</h3>
          <div className="mb-4">
            <Box style={{textAlign: 'left'}}>
              <h5 className="text-primary">Houston Professional Services Firm</h5>
              <p className="text-muted mb-2">
                <strong>Challenge:</strong> 15 hours weekly spent manually processing client intake forms,
                creating project folders, and sending welcome emails.
              </p>
              <p className="text-muted mb-2">
                <strong>Solution:</strong> Automated intake form processing with document extraction,
                folder creation, and email sequences.
              </p>
              <p className="mb-0">
                <strong className="text-success">Result:</strong> <span className="text-muted">Saved $32,000 annually in admin labor. ROI in 4 months.</span>
              </p>
            </Box>
          </div>
          <div className="mb-4">
            <Box style={{textAlign: 'left'}}>
              <h5 className="text-primary">Dallas E-Commerce Business</h5>
              <p className="text-muted mb-2">
                <strong>Challenge:</strong> Customer service team spending 20 hours weekly answering
                "Where's my order?" inquiries manually checking tracking.
              </p>
              <p className="text-muted mb-2">
                <strong>Solution:</strong> AI chatbot integrated with shipping API provides instant
                order status and tracking updates.
              </p>
              <p className="mb-0">
                <strong className="text-success">Result:</strong> <span className="text-muted">Reduced support costs by 65%. Freed support team for complex issues.</span>
              </p>
            </Box>
          </div>
          <div className="mb-4">
            <Box style={{textAlign: 'left'}}>
              <h5 className="text-primary">Austin Healthcare Clinic</h5>
              <p className="text-muted mb-2">
                <strong>Challenge:</strong> Front desk manually handling 150+ appointment confirmation
                calls weekly, plus rescheduling and reminders.
              </p>
              <p className="text-muted mb-2">
                <strong>Solution:</strong> Automated SMS/email appointment reminders with AI-powered
                rescheduling via text conversation.
              </p>
              <p className="mb-0">
                <strong className="text-success">Result:</strong> <span className="text-muted">Saved 12 hours weekly, reduced no-shows by 40%, ROI in 2 months.</span>
              </p>
            </Box>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* CTA Section */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto text-center">
          <h3 className="mb-3">Get Your Free Cost Reduction Analysis</h3>
          <p className="text-muted lead mb-4">
            No obligation, no sales pitch. Just a detailed analysis showing exactly where AI
            automation can save your Texas business 30-40% on operational costs with clear ROI
            projections.
          </p>
          <Button to="/contact" className="btn btn-primary btn-lg">
            Request Free Analysis
          </Button>
          <p className="text-muted small mt-3">
            Serving Houston, Dallas, Austin, and San Antonio
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default CostReductionAnalysis
