import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Header = () => {
  const {
    site: { siteMetadata: info },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
          author
          data {
            age
          }
        }
      }
    }
  `)
  console.log(info)
  return (
    <div>
      {/* <h1>author: {data.site.siteMetadata.author}</h1> */}
      <h1>author: {info.author}</h1>
      <h1>title: {info.title}</h1>
    </div>
  )
}

export default Header
