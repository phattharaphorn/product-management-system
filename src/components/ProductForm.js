import React, { useState, useEffect } from 'react';

const ProductForm = ({ addProduct, editProduct, currentProduct }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentProduct) {
      setName(currentProduct.name);
      setPrice(currentProduct.price);
    }
  }, [currentProduct]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !price) return;

    const product = { name, price };
    if (currentProduct) {
      editProduct(currentProduct.id, product);
    } else {
      addProduct(product);
    }
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{currentProduct ? 'Edit Product' : 'Add Product'}</h2>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">{currentProduct ? 'Update' : 'Add'} Product</button>
    </form>
  );
};

export default ProductForm;
