// App.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';
import logo from './icons/bg.svg';
import cartIcon from './icons/cartIcon.svg';
import closeIcon from './icons/closeIcon.svg';

function DemoComponent() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [userId] = useState('004');
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

  const backgroundColor = ['#a19bd9', '#f7d064', '#f6bc97', '#c3d250', '#ecb1be', '#a5d6e7'];

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:3000/products');
    // res.data.forEach((item)=>{item.backgroundColor=})
    setProducts(res.data);
  };

  const fetchCart = async () => {
    const res = await axios.get(`http://localhost:3000/cart?userId=${userId}`);
    setCart(res.data.items);
    setTotal(res.data.total);
  };

  const addToCart = async (product) => {
    await axios.post(`http://localhost:3000/cart/add?userId=${userId}`, {
      productId: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    fetchCart();
  };

  const removeFromCart = async (productId) => {
    await axios.delete(`http://localhost:3000/cart/remove?userId=${userId}&productId=${productId}`);
    fetchCart();
  };

  const updateQuantity = async (productId, quantity) => {
    await axios.patch(`http://localhost:3000/cart/update?userId=${userId}&productId=${productId}&quantity=${quantity}`);
    fetchCart();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 relative">
      {/* <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Product List</h1>
        
      </div> */}

      <div className='w-full flex justify-center '>
        <div className='w-[98%] h-[100vh] titleCardBg '>
          <img src='https://cdn.prod.website-files.com/66dab405fff44f5d08af4edb/66dadc75a87cf9914f4539d7_Mask%20Group%20119.avif' className='w-[95%] absolute' />
          <div className='logo-title flex justify-center h-full items-center'>
            <img src={logo} className='z-10 relative h-3/4' />
          </div>
        </div>
      </div>
      <div className='products-header flex justify-between item-center my-4 p-8'>
        <div className='name text-6xl font-bold font-[Lunchbox]'>
          PRODUCTS
        </div>
        <div className='cart-button'>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={() => setShowCart(true)}
          >
            <img src={cartIcon} className="w-12 h-8" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 p-8">
        {products?.map((product, index) => (
          <div key={product._id} className="bg-white rounded-xl p-4 shadow-lg" style={{ backgroundColor: backgroundColor[index % backgroundColor.length] }}>
            <div className='productImg flex justify-center h-[14rem]'>
              {product?.imageUrl ? <img src={product.imageUrl} className='h-[14rem]' /> : <></>}
            </div>
            <div className='flex justify-center flex-col items-center mt-8'>
              <h2 className="text-xl font-semibold uppercase text-[#22546e]">{product.name}</h2>
              <h4 className="text-[13px] font-semibold uppercase text-white">{product?.description}</h4>
              <div className='flex items-center gap-4 mt-2'>
                <p className="text-[30px] text-gray-600">₹{product.price}</p>
                <button
                  className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:opacity-0.5"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCart && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setShowCart(false)}
          ></div>
          <div className="fixed top-0 right-0 w-full sm:w-96 h-full bg-white shadow-lg p-6 overflow-y-auto z-50">
            <button
              className="text-gray-500 mb-4 rounded-full bg-gray-200 hover:bg-gray-400"
              onClick={() => setShowCart(false)}
            >
              <img src={closeIcon} className="w-[40px]" />
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">Cart</h2>

            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {cart.map((item) => (
                  <div key={item.productId} className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">₹{item.price} × {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        className="border p-1 w-16"
                        value={item.quantity}
                        min={1}
                        onChange={(e) => updateQuantity(item.productId, Number(e.target.value))}
                      />
                      <button
                        className="text-red-500 hover:underline"
                        onClick={() => removeFromCart(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <p className="mt-4 font-bold text-right">Total: ₹{total}</p>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default DemoComponent;
