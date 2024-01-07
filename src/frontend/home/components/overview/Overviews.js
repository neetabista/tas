import React from 'react'
import Button from '../../../../components/common/button/Button'

const Overview = () => {
  return (
    <>
      <div className="overview">
        <div
          className="overview__bg--image"
          style={{ backgroundImage: 'url("/images/Group-1.jpg")' }}
        >
          <div className="container">
            <div className="overview__content">
              <div className="overview__subtitle">
                Providing the Best Sustainable Heating Solution With
              </div>
              <div className="overview__title">THERMAX TCA</div>
              <div className="overview__samary">
                We are the authorized distributors of Thermax Global providing
                the best Domestic and Industrial heating solution and boilers in
                Nepal
              </div>
              <Button btnData="Explore More" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview
