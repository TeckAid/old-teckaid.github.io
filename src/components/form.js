import React from 'react'
import {NormalField} from 'reactstrap-form-fields'
import Button from './btn'

export default () => (
  <form name="Contact Form" action="https://mailthis.to/hello@teckaid.com" method="POST">
    <input type="hidden" name="form-name" value="Contact Form"/>
    <NormalField name="Full Name"/>
    <NormalField name="Email"/>
    <NormalField name="Phone Number"/>
    <NormalField name="Comments" type="textarea"/>
    <input type="hidden" name="_subject" value="Contact Lead from homepage."/>
    <input type="hidden" name="_honeypot" value=""/>
    <input type="hidden" name="_confirmation" value="Thank You"/>
    <Button type="submit">Submit</Button>
  </form>
)
