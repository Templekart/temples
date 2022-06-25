import React from 'react'
import Navbartk from './../../components/header/navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Hero from './../../components/home/hero';
import { Container } from 'react-bootstrap';
import Footer from './../../components/footer/footer';
import MultipleItems from '../../components/home/specialsevas/specialSevas';
import FAQ from './../../components/home/faq';
import Features from './../../components/home/features';




function Home() {
  return (
    <div>
      <Navbartk /> 
      <Hero />
      <Container>
        <MultipleItems />
        <Features />
        
      </Container>
      
      <Container className="tk_container"><FAQ/></Container>
      <Footer/>
    </div>
  )
}

export default Home;
