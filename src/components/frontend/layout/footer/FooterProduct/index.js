import React from 'react'
import { Link } from 'react-router-dom'

const FooterProduct = ({ data, index }) => {
  return (
    <>
      <li className="item" key={index}>
        <Link to={data.slug}>{data.title}</Link>
      </li>
    </>
  )
}

export default FooterProduct
