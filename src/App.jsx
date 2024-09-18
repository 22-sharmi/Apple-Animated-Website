import Features from "./components/Features.jsx"
import Footer from "./components/Footer.jsx"
import HeroSection from "./components/heroSection"
import HighLightSection from "./components/highLightSection"
import HowItWorks from "./components/HowItWorks.jsx"
import Model from "./components/Model.jsx"
import NavigationBar from "./components/navigationBar"

import * as Sentry from '@sentry/react'

const App = () => {
  return (
    <main className='bg-black'>
      <NavigationBar/>
      <HeroSection/>
      <HighLightSection/>
      <Model/>
      <Features/>
      <HowItWorks/>
      <Footer/>
    </main>
  )
}

export default Sentry.withProfiler(App)
