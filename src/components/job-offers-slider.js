import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SingleJobOffer from "./job-offer"

const JobOffers = ({ joboffers }) => {
  return (
    <div className="container mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {joboffers.map((item) => (
        <SingleJobOffer joboffer={item} />
      ))}
    </div>
  )
}

export default JobOffers