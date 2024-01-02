import React from "react";
const Testimonial = () => {
  return (
    <>
      <div className="testimonils">
        <div
          className="testimonils__bg-image"
          style={{ backgroundImage: 'url("/images/testimonils.jpg")' }}
        >
          <div className="testimonils__content">
            <i className="ri-double-quotes-l"></i>
            <p>
              Hiday Motors needed to build a brand new 28,000 sf facility that
              would both meet our needs and comply with GMs standards - which
              seemed daunting, to say the least. Industify alleviated all of our
              concerns and communicated with us every step of the way. We have
              received dozens of compliments from our customers, and our
              employees love the new store!
            </p>
            <div className="testimonils__name">
              <h4>Steve Lehman</h4>
              <p>CEO of Hiday Motors.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
