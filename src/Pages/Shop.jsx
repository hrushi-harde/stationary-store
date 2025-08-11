import React, { useState, useEffect } from 'react';
import { data } from '../Data/ProductData';
import ProductCard from '../components/ProductCard';
import { useParams } from 'react-router-dom'; // 👈 import this
import './Shop.css';
import ContactCard from '../Components/ContactCard';

const Shop = () => {
  const { category: categoryParam } = useParams(); // 👈 Get category from URL
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    if (categoryParam) {
      setCategory(categoryParam.toLowerCase());
    }
  }, [categoryParam]);

  const handleSearch = (e) => setSearchTerm(e.target.value.toLowerCase());
  const handleCategory = (e) => setCategory(e.target.value);
  const handlePrice = (e) => setPriceRange(e.target.value);

  const filteredData = data.filter(product => {
    const matchesSearch = product.pname.toLowerCase().includes(searchTerm);
    const matchesCategory =
      category === 'all' || product.category.toLowerCase() === category;
    const matchesPrice =
      priceRange === 'all' ||
      (priceRange === 'low' && product.price <= 100) ||
      (priceRange === 'medium' && product.price > 100 && product.price <= 500) ||
      (priceRange === 'high' && product.price > 500);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="shop-container">
      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
        />

        <select value={category} onChange={handleCategory}>
          <option value="all">All Categories</option>
          <option value="notebooks">Notebooks</option>
          <option value="diaries">Diaries</option>
          <option value="pens">Pens</option>
          <option value="art">Art</option>
          <option value="storybooks">Storybooks</option>
        </select>

        <select onChange={handlePrice}>
          <option value="all">All Prices</option>
          <option value="low">Under ₹100</option>
          <option value="medium">₹100 - ₹500</option>
          <option value="high">Above ₹500</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <ContactCard />
    </div>
  );
};

export default Shop;
