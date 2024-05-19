import './App.css'
import Services from './components/Services.jsx'
import Page4 from './components/Page4.jsx'
import Team from './components/Team.jsx'
import Served from './components/Served.jsx'
import CaseStudies from './components/CaseStudies.jsx'
import Testimonials from './components/Testimonials.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Welcome from './components/Welcome.jsx'

function App() {

  return (
    <>
      <Header />
      <Welcome />
      <Services />
      <Page4 />
      <Team />
      <Served />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
