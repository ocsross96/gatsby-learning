import React from 'react'
import Link from 'gatsby-link'

import Button from 'rp-react-components/src/components/Button';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>

    <Link to="/page-2/">Go to page 2</Link>

    <Button size="small">Test</Button>
  </div>
)

export default IndexPage
