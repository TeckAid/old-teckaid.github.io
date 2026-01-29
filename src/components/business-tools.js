import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import { FaRobot, FaChartBar, FaCalculator, FaTasks } from 'react-icons/fa'

const ToolCard = styled.div`
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.1);
  background: white;
  border-top: 3px solid ${props => props.theme.primary};
  transition-duration: 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
`

const FilterButton = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 0.25rem;
  border: 2px solid ${props => props.active ? props.theme.primary : '#dee2e6'};
  background: ${props => props.active ? props.theme.primary : 'white'};
  color: ${props => props.active ? 'white' : '#495057'};
  border-radius: 2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    border-color: ${props => props.theme.primary};
    background: ${props => props.active ? props.theme.primary : '#f8f9fa'};
  }
`

const PricingBadge = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: #e9ecef;
  border-radius: 1rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #495057;
  margin-top: auto;
`

const tools = [
  {
    name: 'ChatGPT',
    category: 'AI Automation',
    description: 'Conversational AI for content generation, customer support automation, and data analysis.',
    pricing: 'Free - $20/mo',
    icon: FaRobot
  },
  {
    name: 'Claude',
    category: 'AI Automation',
    description: 'Advanced reasoning and document analysis for complex business workflows and decision support.',
    pricing: 'Free - $20/mo',
    icon: FaRobot
  },
  {
    name: 'Make.com',
    category: 'AI Automation',
    description: 'Visual workflow automation platform connecting apps and services without code.',
    pricing: 'Free - $9/mo',
    icon: FaRobot
  },
  {
    name: 'Zapier',
    category: 'AI Automation',
    description: 'No-code app integration platform automating repetitive tasks across 5000+ apps.',
    pricing: 'Free - $20/mo',
    icon: FaRobot
  },
  {
    name: 'n8n',
    category: 'AI Automation',
    description: 'Open-source automation platform with self-hosting options for cost-effective workflows.',
    pricing: 'Free (self-host)',
    icon: FaRobot
  },
  {
    name: 'HubSpot CRM',
    category: 'CRM',
    description: 'Free CRM with contact management, email tracking, and pipeline visualization.',
    pricing: 'Free - $50/mo',
    icon: FaChartBar
  },
  {
    name: 'Pipedrive',
    category: 'CRM',
    description: 'Sales-focused CRM with visual pipeline management and activity tracking.',
    pricing: '$15/user/mo',
    icon: FaChartBar
  },
  {
    name: 'Zoho CRM',
    category: 'CRM',
    description: 'Cost-effective alternative to Salesforce with comprehensive features at $14/user vs $150/user.',
    pricing: '$14/user/mo',
    icon: FaChartBar
  },
  {
    name: 'QuickBooks Online',
    category: 'Accounting',
    description: 'Industry-standard cloud accounting software with invoicing, expense tracking, and tax preparation.',
    pricing: '$30-$200/mo',
    icon: FaCalculator
  },
  {
    name: 'Wave',
    category: 'Accounting',
    description: 'Free accounting and invoicing software perfect for small businesses and freelancers.',
    pricing: 'Free',
    icon: FaCalculator
  },
  {
    name: 'Xero',
    category: 'Accounting',
    description: 'Cloud accounting with real-time collaboration and 1000+ app integrations.',
    pricing: '$13-$70/mo',
    icon: FaCalculator
  },
  {
    name: 'FreshBooks',
    category: 'Accounting',
    description: 'Service business-focused accounting with time tracking and project management.',
    pricing: '$17-$55/mo',
    icon: FaCalculator
  },
  {
    name: 'Monday.com',
    category: 'Project Management',
    description: 'Workflow automation platform with customizable boards and team collaboration features.',
    pricing: '$9-$19/user/mo',
    icon: FaTasks
  },
  {
    name: 'ClickUp',
    category: 'Project Management',
    description: 'Comprehensive project management with tasks, docs, goals, and time tracking in one platform.',
    pricing: 'Free - $19/user/mo',
    icon: FaTasks
  },
  {
    name: 'Notion',
    category: 'Project Management',
    description: 'All-in-one workspace combining documentation, tasks, wikis, and databases.',
    pricing: 'Free - $10/user/mo',
    icon: FaTasks
  },
  {
    name: 'Asana',
    category: 'Project Management',
    description: 'Team collaboration platform with project tracking, automation, and portfolio management.',
    pricing: 'Free - $25/user/mo',
    icon: FaTasks
  }
]

const categories = ['All', 'AI Automation', 'CRM', 'Accounting', 'Project Management']

const Tool = ({ tool }) => {
  const Icon = tool.icon
  return (
    <Col md={6} lg={4} className="mb-4">
      <ToolCard>
        <div className="d-flex align-items-center mb-3">
          <Icon size={24} className="text-primary me-3" style={{minWidth: '24px'}}/>
          <h5 className="m-0">{tool.name}</h5>
        </div>
        <p className="text-muted small mb-2" style={{fontWeight: '600', textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '0.5px'}}>
          {tool.category}
        </p>
        <p className="text-muted mb-3">{tool.description}</p>
        <PricingBadge>{tool.pricing}</PricingBadge>
      </ToolCard>
    </Col>
  )
}

const BusinessTools = () => {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredTools = activeCategory === 'All'
    ? tools
    : tools.filter(tool => tool.category === activeCategory)

  return (
    <div className="py-5" style={{background: '#f8f9fa'}} id="business-tools">
      <Container>
        <div className="text-center mb-4">
          <h2>Business Tools We Recommend</h2>
          <p className="text-muted lead">
            Research-based recommendations for AI automation platforms, CRM, accounting, and project management tools
            that help Texas businesses save money and work smarter.
          </p>
        </div>

        <div className="text-center mb-4">
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </div>

        <Row>
          {filteredTools.map(tool => (
            <Tool key={tool.name} tool={tool} />
          ))}
        </Row>

        <div className="text-center mt-4">
          <p className="text-muted">
            Need help choosing the right tools or integrating them into your workflow?
            <a href="/contact" className="text-primary ml-1">Contact us for a free consultation.</a>
          </p>
        </div>
      </Container>
    </div>
  )
}

export default BusinessTools
