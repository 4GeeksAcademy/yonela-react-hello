import '../styles/index.css';
import Galeria from '../components/galeria'
import Navbar from '../components/navbar';
import Header from '../components/header';
import Footer from '../components/footer';


function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar/>
      <Header />

      <Galeria />
      <Footer />
    </div>
  );
}

export default App;
