import React from 'react';
import { useCart } from '../../context/CartContext';
import './styles.css';

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Seu Carrinho</h2>
      {cartItems.length === 0 ? (
        <p>Carrinho vazio.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - R$ {item.price.toFixed(2)}
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
          <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
          <button onClick={clearCart}>Limpar Carrinho</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
