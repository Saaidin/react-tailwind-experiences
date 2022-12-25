import React from 'react'
import Blog from "../pages/Blog";
import ImageSlider from "../components/ImageSlider";

import Layout from "../pages/Layout";

const BlogPage = () => {
  return (
    <Layout>
     <ImageSlider/>
     <Blog/>
    </Layout>
  )
}

export default BlogPage