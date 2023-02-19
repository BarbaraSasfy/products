import { useStaticQuery, graphql } from 'gatsby'

export const useProductData = () => {
  const productDataQuery = useStaticQuery(graphql`
    query {
      allProductsJson {
        nodes {
          products {
            title
            sku
            price
            images
            description
          }
        }
      }
    }
  `)

  return productDataQuery.allProductsJson.nodes[0].products;
};