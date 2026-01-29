import React from 'react'
import { Row, Col, Container } from 'reactstrap'
import Button from '../components/btn'
import Layout from '../components/layout'
import { FaLink, FaExchangeAlt, FaSyncAlt, FaCogs, FaRocket, FaShieldAlt } from 'react-icons/fa'
import Styled from 'styled-components'
import Hr from '../components/hr'
import PageTitle from '../components/page-title'
import SEO from "../components/seo"
import Box from '../components/box'

let BenefitCard = ({Icon, title, description}) => (
  <Col md={6} lg={4} className="mb-4">
    <div className="d-flex align-items-start">
      <Icon size={28} className="text-primary me-3 mt-1" style={{minWidth: '28px', flexShrink: 0}}/>
      <div>
        <h5>{title}</h5>
        <p className="text-muted small">{description}</p>
      </div>
    </div>
  </Col>
)

let WorkflowExample = ({title, trigger, actions}) => (
  <Col md={6} className="mb-4">
    <Box className="h-100" style={{textAlign: 'left'}}>
      <h5 className="mb-3">{title}</h5>
      <div className="mb-3">
        <div className="badge bg-primary text-white mb-2">Trigger</div>
        <p className="text-muted small mb-0">{trigger}</p>
      </div>
      <div>
        <div className="badge bg-success text-white mb-2">Automated Actions</div>
        <ul className="text-muted small mb-0">
          {actions.map((action, index) => (
            <li key={index}>{action}</li>
          ))}
        </ul>
      </div>
    </Box>
  </Col>
)

let PlatformCategory = ({category, platforms}) => (
  <Col md={6} lg={4} className="mb-4">
    <h5 className="mb-3">{category}</h5>
    <ul className="text-muted">
      {platforms.map((platform, index) => (
        <li key={index}>{platform}</li>
      ))}
    </ul>
  </Col>
)

const WorkflowIntegration = () => (
  <Layout>
    <SEO
      title="Workflow Integration & Automation | Connect Your Business Tools with AI"
      description="Connect your CRM, accounting, project management, and communication tools with automated workflows. Eliminate manual data entry and streamline operations. Serving Houston, Dallas, Austin, San Antonio."
    />
    <PageTitle title="Workflow Integration"/>

    <Container>
      {/* Hero Section */}
      <Row className="py-5">
        <Col lg={10} className="mx-auto text-center">
          <h2 className="mb-3">Connect Your Tools, Automate Your Data Flow</h2>
          <p className="lead text-muted">
            Stop manually copying information between your CRM, accounting software, project management
            tools, and communication platforms. We build automated workflows that sync data across all
            your business systems in real-time.
          </p>
          <div className="mt-4">
            <Button to="/contact" className="btn btn-primary btn-lg me-3">
              Get Integration Plan
            </Button>
            <Button to="/#business-tools" className="btn btn-outline-primary btn-lg">
              View Compatible Tools
            </Button>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* Key Benefits */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Why Integrate Your Workflows?</h3>
          <Row>
            <BenefitCard
              Icon={FaSyncAlt}
              title="Real-Time Data Sync"
              description="Information updates automatically across all systems. No more outdated spreadsheets or conflicting data."
            />
            <BenefitCard
              Icon={FaExchangeAlt}
              title="Eliminate Manual Entry"
              description="Stop copying data between platforms. Workflow automation handles it instantly and accurately."
            />
            <BenefitCard
              Icon={FaRocket}
              title="Faster Operations"
              description="Tasks that took hours now happen in seconds. Automated handoffs keep work moving without delays."
            />
            <BenefitCard
              Icon={FaShieldAlt}
              title="Reduce Errors"
              description="Automated data transfer means no typos, no missed fields, no inconsistent information."
            />
            <BenefitCard
              Icon={FaLink}
              title="No Vendor Lock-In"
              description="We use industry-standard platforms like Make, Zapier, and n8n. Your workflows, your control."
            />
            <BenefitCard
              Icon={FaCogs}
              title="Scalable Solutions"
              description="Start simple, add complexity as needed. Workflows grow with your business without breaking."
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Workflow Examples */}
      <Row className="py-5">
        <Col lg={12}>
          <h3 className="text-center mb-5">Common Workflow Integrations</h3>
          <Row>
            <WorkflowExample
              title="New Lead to CRM"
              trigger="Website form submission or chatbot conversation"
              actions={[
                "Create contact in HubSpot/Salesforce with all form data",
                "Send Slack notification to sales team",
                "Add lead to email nurture sequence",
                "Create follow-up task with 24-hour deadline",
                "Log activity in project management system"
              ]}
            />
            <WorkflowExample
              title="Invoice Processing"
              trigger="Invoice received via email attachment"
              actions={[
                "AI extracts vendor, amount, due date, line items",
                "Creates invoice in QuickBooks/Xero",
                "Routes to manager for approval via Slack/email",
                "Schedules payment on due date",
                "Updates expense tracking spreadsheet"
              ]}
            />
            <WorkflowExample
              title="New Customer Onboarding"
              trigger="Contract signed in DocuSign/PandaDoc"
              actions={[
                "Create customer account in billing system",
                "Generate welcome email with login credentials",
                "Create onboarding project in Monday/ClickUp",
                "Add to customer communication channel",
                "Schedule kickoff meeting and send calendar invite"
              ]}
            />
            <WorkflowExample
              title="Support Ticket Management"
              trigger="New support request via email, chat, or form"
              actions={[
                "Create ticket in Zendesk/Freshdesk",
                "Categorize by urgency using AI",
                "Route to appropriate team member",
                "Send auto-reply to customer with ticket number",
                "Update internal dashboard with ticket stats"
              ]}
            />
            <WorkflowExample
              title="Project Completion"
              trigger="Project marked complete in project management tool"
              actions={[
                "Generate final invoice in accounting system",
                "Send invoice to client via email",
                "Update CRM with project completion date",
                "Trigger customer satisfaction survey",
                "Archive project files to cloud storage"
              ]}
            />
            <WorkflowExample
              title="Employee Time Tracking"
              trigger="Employee clocks in/out via mobile app"
              actions={[
                "Log hours in time tracking system",
                "Update project time allocation",
                "Calculate overtime if applicable",
                "Sync to payroll system",
                "Send daily summary to manager"
              ]}
            />
          </Row>
        </Col>
      </Row>

      <Hr/>

      {/* Platforms We Integrate */}
      <div className="py-5" style={{background: '#f8f9fa'}}>
        <Container>
          <h3 className="text-center mb-5">Tools We Connect</h3>
          <Row>
            <PlatformCategory
              category="CRM & Sales"
              platforms={[
                "HubSpot",
                "Salesforce",
                "Pipedrive",
                "Zoho CRM",
                "Copper",
                "Monday CRM"
              ]}
            />
            <PlatformCategory
              category="Accounting & Finance"
              platforms={[
                "QuickBooks Online",
                "Xero",
                "FreshBooks",
                "Wave",
                "Bill.com",
                "Stripe"
              ]}
            />
            <PlatformCategory
              category="Project Management"
              platforms={[
                "Monday.com",
                "ClickUp",
                "Asana",
                "Notion",
                "Trello",
                "Jira"
              ]}
            />
            <PlatformCategory
              category="Communication"
              platforms={[
                "Slack",
                "Microsoft Teams",
                "Gmail",
                "Outlook",
                "Zoom",
                "WhatsApp"
              ]}
            />
            <PlatformCategory
              category="E-Commerce"
              platforms={[
                "Shopify",
                "WooCommerce",
                "BigCommerce",
                "Square",
                "Stripe",
                "PayPal"
              ]}
            />
            <PlatformCategory
              category="Marketing"
              platforms={[
                "Mailchimp",
                "ActiveCampaign",
                "Facebook Ads",
                "Google Ads",
                "WordPress",
                "Webflow"
              ]}
            />
          </Row>
          <p className="text-center text-muted mt-4">
            Plus hundreds more through Make.com, Zapier, and custom API integrations.
          </p>
        </Container>
      </div>

      <Hr/>

      {/* How We Build Integrations */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto">
          <h3 className="text-center mb-5">Our Integration Process</h3>
          <div className="mb-4">
            <h5>1. Map Your Current Workflow</h5>
            <p className="text-muted">
              We document how data currently flows through your business. Where does information
              get stuck? What gets copied manually?
            </p>
          </div>
          <div className="mb-4">
            <h5>2. Design Automated Connections</h5>
            <p className="text-muted">
              We diagram the automated workflow showing triggers, actions, and data transformations.
              You approve before we build anything.
            </p>
          </div>
          <div className="mb-4">
            <h5>3. Build & Test</h5>
            <p className="text-muted">
              We create the integration using platforms like Make.com or Zapier, test with real data,
              and handle edge cases.
            </p>
          </div>
          <div className="mb-4">
            <h5>4. Monitor & Refine</h5>
            <p className="text-muted">
              We set up error monitoring, create dashboards, and refine the workflow based on real
              usage. Your team gets training on managing it.
            </p>
          </div>
        </Col>
      </Row>

      <Hr/>

      {/* CTA Section */}
      <Row className="py-5">
        <Col lg={8} className="mx-auto text-center">
          <h3 className="mb-3">Ready to Integrate Your Business Tools?</h3>
          <p className="text-muted lead mb-4">
            Get a free integration plan showing how we'll connect your CRM, accounting, project
            management, and communication tools with automated workflows. See exactly how data will
            flow through your business without manual intervention.
          </p>
          <Button to="/contact" className="btn btn-primary btn-lg">
            Get Free Integration Plan
          </Button>
          <p className="text-muted small mt-3">
            Serving Houston, Dallas, Austin, and San Antonio
          </p>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default WorkflowIntegration
