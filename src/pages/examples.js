import React from 'react'
import HeaderHook from '../examples/Header-Hooks'
import HeaderStatic from '../examples/Header-Static'
import { graphql } from 'gatsby'

const examples = props => {
  const { name, age } = props.data.site.siteMetadata.person
  return (
    <div>
      examples page
      <HeaderHook />
      <HeaderStatic />
      <div>
          this is our person
          <h1>name: {name}</h1>
          <h1>age: {age}</h1>
      </div>
    </div>
  )
}

export const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        description
        author
        person: data {
          age
          name
        }
      }
    }
  }
`

export default examples
