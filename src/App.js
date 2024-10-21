import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import MyAppBar from './components/AppBar';  
import Products from './components/products/products.jsx';

function App() {
  return (
    <div className="app">
      <MyAppBar />
      <Products />
    </div>
  );
}

export default App;


