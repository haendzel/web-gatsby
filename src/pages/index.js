import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import ArticlesGrid from "../components/articles-grid"
import Seo from "../components/seo"
import Headings from "../components/headings"
import JobOffers from "../components/job-offers-slider"

const IndexPage = () => {
  const { allStrapiArticle, strapiGlobal, allStrapiJobOffer } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
          ...ArticleCard
        }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
      allStrapiJobOffer {
        nodes {
          ...SingleJobOffer
        }
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <Headings
        title={strapiGlobal.siteName}
        description={strapiGlobal.siteDescription}
      />
      <main>
        <JobOffers joboffers={allStrapiJobOffer.nodes} />
      </main>
    </Layout>
  )
}

export default IndexPage