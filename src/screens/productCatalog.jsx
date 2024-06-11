import React from 'react';
import tshirt from '../Wholesale-Special-Design-Mens-Denim-Jeans-Wide-Leg-Leisure-Cargo-Pants.jpg'
import Blouse from '../images (1).jpg'
import sweater from '../sweater.jpg'
import jeans from '../Wholesale-Special-Design-Mens-Denim-Jeans-Wide-Leg-Leisure-Cargo-Pants.jpg'
import skirts from '../aa7aed5da600aa0ac63808253f491109.jpg'
import shorts from '../WSO-13707_02_IM_01_Jemma_Bermuda_Pleat_Short_Mid_Indigo.jpg'
import causual from '../weaczzy-summer-casual-dresses-ceb537e9e3494b34ba509f49610cb024.jpg'
import images from '../images.jpg'
import { Link, Outlet } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <h1>Product Catalog</h1>
    </header>
  );
};

const Navbar = () => {
  

  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/payment">Payment</Link></li>
        <li><Link to="design" id="start-design-link" >Start Your Design</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
      <Outlet/>
    </nav>
  );
};

const ProductCategory = ({ title, products }) => {
  return (
    <section className="product-category">
      <h2>{title}</h2>
      <ul className="product-list">
        {products.map((product, index) => (
          <li key={index} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; Fashion Fusion</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: info@fashionfusion.com</p>
          <p>Address: 123 Main St, Anytown, USA</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
        <div className="footer-right">
          <ul className="social-links">
            <li><img src="icons8-facebook-48.png" alt="Facebook" /></li>
            <li><img src="icons8-twitter-48.png" alt="Twitter" /></li>
            <li><img src="icons8-linkedin-48.png" alt="LinkedIn" /></li>
          </ul>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/payment">Payment</Link></li>
            <li><Link to="/design">Design Tool</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
      <Outlet />
    </footer>
  );
};

const productsData = [
  {
    title: 'Tops',
    products: [
      { image: tshirt, name: 'T-Shirt', price: '$19.99' },
      { image: Blouse, name: 'Blouse', price: '$29.99' },
      { image: sweater, name: 'Sweater', price: '$39.99' },
    ],
  },
  {
    title: 'Bottoms',
    products: [
      { image: jeans, name: 'Jeans', price: '$49.99' },
      { image: skirts, name: 'Skirt', price: '$29.99' },
      { image: shorts, name: 'Shorts', price: '$19.99' },
    ],
  },
  {
    title: 'Dresses',
    products: [
      { image: causual, name: 'Casual Dress', price: '$39.99' },
      { image: images, name: 'Formal Dress', price: '$99.99' },
    ],
  },
];

const ProductCatalog = () => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar />
      <main className="">
        {productsData.map((category, index) => (
          <ProductCategory key={index} title={category.title} products={category.products} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default ProductCatalog;
