import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Category from './components/Category'
import FeaturesFruitsSec from './components/FeaturesFruitsSec'
import FeaturesBreakfastSec from './components/FeatureBreakfastSec'
import Banner from './components/Banner'
import BlogSection from './components/BlogSection'
import NewsLetter from './components/NewsLetter'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import CartCountBadge from './components/CartCountBadge'

const App = () => {
  return (
    <><main>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    <Hero/>
<Category/>
<FeaturesFruitsSec/>
<FeaturesBreakfastSec/>
<Banner/>
<BlogSection/>
<NewsLetter/>
<FeaturesSection/>
<Footer/>

    </main>
    </>
  )
}

export default App
