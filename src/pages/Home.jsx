import React from 'react'
import Banner from "../components/banner/Banner"
import Work from "../components/work/Work"
import Project from "../components/project/Project"
import Feature from "../components/feature/Feature"
import Log from "../components/log/Log"
import Blog from "../components/blog/Blog"
const Home = () => {
  return (
    <>
        <Banner/>
        <Work/>
        <Project/>
        <Feature/>
        <Log/>
        <Blog/>

    </>
  )
}

export default Home