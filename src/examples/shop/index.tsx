import React from "react";

// see https://tailwindui.com/#product-ecommerce

import ProductOverview from "./product/overview";
import ProductList from "./product/list";
import CategoryPreview from "./category/preview";
import ShoppingCart from "./shopping-cart";
import CategoryFilters from "./category/filters";
import ProductQuickView from "./product/quick-view";
import ProductFeatures from "./product/features";
import Navigation from "./navigation";
import Promos from "./promos";

export default () => {
  return (
    <>
      <ProductQuickView openDefault={false} />
      <ProductOverview />
      <ProductList />
      <CategoryPreview />
      <CategoryFilters />
      <ShoppingCart />
      <ProductFeatures />
      <Navigation />
      <Promos />
    </>
  );
};
