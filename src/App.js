import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';
import Content from './components/Content'; 

function App() {
  return (
    <div className="App">
      <NavbarComp></NavbarComp>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
