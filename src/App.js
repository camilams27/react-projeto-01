import './App.css'
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import CarouselComponent from './components/carousel/Carousel';


function App() {
  return (
    <div className="App">
      <Header />
      <CarouselComponent />
      <Footer />
    </div>
  );
}

export default App;
