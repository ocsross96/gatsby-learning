import React from 'react'
import Link from 'gatsby-link'

import styles from './page-2.module.scss';

const SecondPage = () => (
  <div>
    <h1>Hi from the second page</h1>
    <p className={styles.base}>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
