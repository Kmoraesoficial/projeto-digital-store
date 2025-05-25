import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data/products.json';
import './styles.css';

const ProductListingPage = () => {
  return (
    <div className="products">
      <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/produto/${product.id}`}>
              {product.name} - R$ {product.price.toFixed(2)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductListingPage;
