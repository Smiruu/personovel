import Footer from './Components/Footer';
import Header from './Components/Header';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PopularScreen from './Screens/PopularScreen';
import LatestScreen from './Screens/LatestScreen';

function App() {
  return (
    <Router>
      <Header />
      <div className='color'>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/popular' element={<PopularScreen />} />
            <Route path='/latest' element={<LatestScreen />} />     
          </Routes>
        </Container>

      </main>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
