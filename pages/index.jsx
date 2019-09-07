import React from 'react'

import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Engagements from '../components/Engagements'
import About from '../components/About'
import Features from '../components/Features'

const title = `factAE | L'outil de facturation au prix d'une baguette`
const desc = "factAE est un outil d'aide à la facturation pour micro-entrepreneurs à 1€/mois."
const tags =
  'factae,outil,facture,devis,facturation,micro-entrepreneur,micro-entreprise,1€,clément,douin'

function LandingPage() {
  return (
    <>
      <SEO title={title} desc={desc} tags={tags} />
      <Hero />
      <Engagements />
      <About />
      <Features />
    </>
  )
}

export default LandingPage
