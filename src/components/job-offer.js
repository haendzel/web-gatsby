import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const SingleJobOffer = ({ joboffer }) => {
  return (
    <Link
      to={`#form`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >
      <GatsbyImage
        image={getImage(joboffer.Image?.localFile)}
        alt={joboffer.Image?.alternativeText}
      />
      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{joboffer.Position}</h3>
        <p className="mt-2 text-neutral-500 line-clamp-2">
          {joboffer.Workplace}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment SingleJobOffer on STRAPI_JOB_OFFER {
    id
    Position
    Workplace
    Image {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`

export default SingleJobOffer