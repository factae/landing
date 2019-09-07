import React from 'react'

import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Engagements from '../components/Engagements'
import About from '../components/About'
import Features from '../components/Features'
import Try from '../components/Try'
import Biography from '../components/Biography'
import Footer from '../components/Footer'

const title = `factAE | L'outil comptable au prix d'une baguette`
const desc = `factAE est un outil d'aide à la facturation pour micro-entrepreneurs à 1€/mois.`
const tags = `factae,outil,facture,comptable,comptabilité,devis,facturation,micro-entrepreneur,micro-entreprise,1€,clément,douin`

function LandingPage() {
  return (
    <>
      <SEO title={title} desc={desc} tags={tags} />
      <Hero />
      <Engagements />
      <About />
      <Features />
      <Try />
      <Biography />
      <Footer />
    </>
  )
}

export default LandingPage
