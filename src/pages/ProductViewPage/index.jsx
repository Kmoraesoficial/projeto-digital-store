import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json';
import { useCart } from '../../context/CartContext';
import './styles.css';

const ProductViewPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Produto não encontrado.</p>;

  return (
    <div className="product-view">
      <h2>{product.name}</h2>
      <p><strong>Preço:</strong> R$ {product.price.toFixed(2)}</p>
      <p>{product.description}</p>
      <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
    </div>
  );
};

export default ProductViewPage;
