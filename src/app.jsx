import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductListingPage from './pages/ProductListingPage';
import ProductViewPage from './pages/ProductViewPage';
import ProductRegisterPage from './pages/ProductRegisterPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <nav>
          <Link to="/">Início</Link> |{' '}
          <Link to="/produtos">Produtos</Link> |{' '}
          <Link to="/cadastrar">Cadastrar Produto</Link> |{' '}
          <Link to="/carrinho">Carrinho</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductListingPage />} />
          <Route path="/produto/:id" element={<ProductViewPage />} />
          <Route path="/cadastrar" element={<ProductRegisterPage />} />
          <Route path="/carrinho" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
