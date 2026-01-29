import React from 'react'
import { Helmet } from 'react-helmet'

const LocalSEOSchema = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "TeckAid",
    "image": "https://teckaid.com/teckaidfav.png",
    "description": "AI automation workflows for small and mid-size businesses in Texas. Custom AI solutions, SOP automation, and workflow integration services.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "telephone": "832-856-3488",
    "email": "hello@teckaid.com",
    "url": "https://teckaid.com",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "City",
        "name": "Houston",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Dallas",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Austin",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "San Antonio",
        "containedIn": {
          "@type": "State",
          "name": "Texas"
        }
      }
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Automation Consulting",
    "provider": {
      "@type": "Organization",
      "name": "TeckAid",
      "url": "https://teckaid.com"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Houston"
      },
      {
        "@type": "City",
        "name": "Dallas"
      },
      {
        "@type": "City",
        "name": "Austin"
      },
      {
        "@type": "City",
        "name": "San Antonio"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SOP Automation",
            "description": "Transform manual procedures into automated workflows, save 5-10 hours per employee per week"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Customer Service",
            "description": "24/7 chatbots handling common questions, integrated with existing support tools"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Cost Reduction Analysis",
            "description": "Identify automation opportunities with ROI projections"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Workflow Integration",
            "description": "Connect your business tools and automate data flow between systems"
          }
        }
      ]
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  )
}

export default LocalSEOSchema
