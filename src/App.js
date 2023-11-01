import './App.css';
import './components/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar, Header, Feature, Prouduct, Clients, CTA, Footer } from './containers';
import { useEffect } from 'react';
function App() {

  useEffect(() => {

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(element => {
        if (element.isIntersecting) {
          element.target.classList.add('show')
        } else element.target.classList.remove('show')
      });
    })

    const leftElements = document.querySelectorAll(".hidden-left")
    leftElements.forEach((ele) => observer.observe(ele))


    const rightElement = document.querySelectorAll(".hidden-right")
    rightElement.forEach((ele) => observer.observe(ele))


    const hiddenButton = document.querySelectorAll(".hidden-button")
    hiddenButton.forEach((ele) => observer.observe(ele))


    const hiddenTop = document.querySelectorAll(".hidden-top")
    hiddenTop.forEach((ele) => observer.observe(ele))


  }, [])
  return (
    <div className="bg__Dark overflow-hidden">
      <NavBar />
      <Header />
      <Feature />
      <Prouduct />
      <Clients />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
