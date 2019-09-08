import React from 'react'

import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Engagements from '../components/Engagements'
import Features from '../components/Features'
import Try from '../components/Try'
import Biography from '../components/Biography'
import Footer from '../components/Footer'

const title = `factAE - L'outil comptable au prix d'une baguette`
const desc = `factAE est un outil comptable dédié aux micro-entrepreneurs à 1€/mois.`
const tags = `factae,outil,facture,comptable,comptabilité,devis,facturation,micro-entrepreneur,micro-entreprise,1€,clément,douin,soywod`

function LandingPage() {
  return (
    <>
      <SEO title={title} desc={desc} tags={tags} />
      <Hero />
      <Engagements />
      <Features />
      <Try />
      <Biography />
      <Footer />
    </>
  )
}

export default LandingPage
