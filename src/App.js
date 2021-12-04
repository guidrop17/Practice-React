import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/index';
import Main from './components/Main/index';
import Tab from './components/Table/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Tab/>
      <Footer/>
    </div>
  );
}

export default App;
