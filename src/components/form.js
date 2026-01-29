import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'

export default () => (
  <form name="Contact Form" action="https://mailthis.to/hello@teckaid.com" method="POST">
    <input type="hidden" name="form-name" value="Contact Form"/>
    <NormalField name="Full Name" required/>
    <NormalField name="Email" type="email" required/>
    <NormalField name="Phone Number" type="tel"/>
    <NormalField name="Comments" type="textarea" rows="5"/>
    <input type="hidden" name="_subject" value="AI Automation Consultation Request"/>
    <input type="hidden" name="_honeypot" value=""/>
    <input type="hidden" name="_confirmation" value="Thank You"/>
    <div className="text-center mt-3">
      <Button type="submit" className="btn-lg">Submit Request</Button>
    </div>
  </form>
)
