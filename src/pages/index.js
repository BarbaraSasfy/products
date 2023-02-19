import * as React from "react"
import Header from "../components/Header"
import Product from "../components/ProductDetails"
import ReviewTable from "../components/Reviewtable"
import ShoppingCart from "../components/ShoppingCart"
import { StateProvider } from "../store"

const IndexPage = () => {

  return (
    <div>
      <StateProvider>
        <Header pageTitle="My wonderful product" />        <ShoppingCart />
        <Product />
        <ReviewTable />

      </StateProvider>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
