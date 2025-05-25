import React, { useState } from 'react';
import './styles.css';

const ProductRegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', price: '', description: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Produto cadastrado:', formData);
    alert('Produto cadastrado com sucesso!');
    setFormData({ name: '', price: '', description: '' });
  };

  return (
    <div className="register-form">
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Nome" value={formData.name} onChange={handleChange} required />
        <input name="price" type="number" placeholder="Preço" value={formData.price} onChange={handleChange} required />
        <textarea name="description" placeholder="Descrição" value={formData.description} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default ProductRegisterPage;
