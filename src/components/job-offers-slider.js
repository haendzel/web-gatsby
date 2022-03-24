import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const JobOffersSlider = ( { offer }) => {

  return (
    <div className="container max-w-3xl py-8">
        {strapiJobOffer.map((item) => (
        <Link
          to={`#form`} 
      >

          <GatsbyImage
              key={item.id}
              image={getImage(item.Image?.localFile)}
              alt={item.Image?.alternativeText}
            />

        <div className="px-4 py-4">
          <h3 className="font-bold text-neutral-700">{item.Position}</h3>
          <p className="mt-2 text-neutral-500 line-clamp-2">
            {item.Workplace}
          </p>
        </div>


          
      </Link>
        ))}
    </div>
  )
}

export const query = graphql`
  fragment ArticleCard on STRAPI_ARTICLE {
    id
    slug
    title
    description
    cover {
      alternativeText
      localFile {
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.77)
        }
      }
    }
  }
`


export default JobOffersSlider