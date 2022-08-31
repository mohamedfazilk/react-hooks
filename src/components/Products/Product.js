import React from 'react';
import './Product.css';
import React, { useState } from 'react';

export default function Product() {
return(
 <div className="wrapper">
 <div>
 Shopping Cart: 0 total items.
 </div>
 <div>Total: 0</div>
 <div className="product"><span role="img" aria-label="ice-cream">🌱</span>
 <button>Add</button> <button>Remove</button>
 </div>
 </div>

 )
}