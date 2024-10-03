import './App.css';
import NextProduct from './components/NextProduct';
import ProductCard from './components/ProductCard';
import UserName from './components/UserName';

function App() {
  return (
    <div className="App">
      <UserName></UserName>
      <div className='productList'>

        <ProductCard />
        <NextProduct />
        <NextProduct />
      </div>
    </div>
  );
}

export default App;
