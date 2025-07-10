import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenreateButton from '../components/GenreateButton'


const Home = () => {
  return (
    <div>
      <Header />
      <Steps/>
      <Description />
      <Testimonials />
      <GenreateButton />
    
    </div>
  )
}

export default Home
