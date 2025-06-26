import Nav from './components/nav';
import Home from './components/home';
import Features from './components/features';
import Works from './components/works';
import Page4 from './components/page4';
import Pricing from './components/pricing';
import Banner from './components/banner';
import Footer from './components/footer';
import './App.css';


function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Features />
      <Works />
      <Page4 />
      <Banner />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
