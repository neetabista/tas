import React from 'react'
import { Link } from 'react-router-dom'

const FooterMenuItem = ({ data, index }) => {
  return (
    <>
      <li className="item" key={index}>
        <Link to={data.slug}>{data.title}</Link>
      </li>
    </>
  )
}

export default FooterMenuItem
