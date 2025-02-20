import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { orders } from './Data_app';
import myImageTrash from './trash3.svg';

// Получаем уникальные продукты
const uniqueProducts = [];
const productIds = new Set();

orders.forEach(order => {
  order.products.forEach(product => {
    if (!productIds.has(product.id)) {
      productIds.add(product.id);
      uniqueProducts.push(product);
    }
  });
});

// Получаем все уникальные типы продуктов
const productTypes = ["Все", ...new Set(uniqueProducts.map(product => product.type))];

function Products() {
  const [selectedType, setSelectedType] = useState("Все");

  // Фильтрация продуктов по выбранному типу
  const filteredProducts = selectedType === "Все" 
    ? uniqueProducts 
    : uniqueProducts.filter(product => product.type === selectedType);

  return (
    <div className="container p-0">
      <div className='d-flex flex-row align-items-center bord_8'>
        <h2 className='d-flex align-items-center text-white mb-0 col-3 fw-bolder bord_9'>
          Продукты / {filteredProducts.length}
        </h2>
        <div className='d-flex align-items-center bord_9'>
          <h5 className='d-flex align-items-center text-white mt-0 mb-0 ms-5 bord_8'>Тип</h5>
        </div>
        
        <div className='col-4'>
          <select className="form-select ms-2" onChange={(e) => setSelectedType(e.target.value)}>
            {productTypes.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      <ul className='bord_10 col-12 mt-3 gx-5 p-0'>
        {filteredProducts.map((product) => (
          <li key={product.id} className="card flex-row bord_8 col-12 mb-3 p-1 ">
            <h5 className='d-flex align-items-center col-5 mb-0 bord_9'>Название продукта: {product.title}</h5>
            <h5 className='d-flex align-items-center col-1 mb-0 bord_8'>{product.type}</h5>
            <div className='d-flex flex-column col-2 bord_9'>
              <h5 className='d-flex align-items-center mb-0'>с &nbsp; {product.guarantee.start.slice(8,10)} / {product.guarantee.start.slice(5,7)} / {product.guarantee.start.slice(0,4)}</h5>
              <h5 className='mb-0'>по {product.guarantee.end.slice(8,10)} / {product.guarantee.end.slice(5,7)} / {product.guarantee.end.slice(0,4)}</h5>
            </div>
            <div className='row m-0 col-2 bord_8'>
              <a href="/#" className='text-dark'>{product.price[0].value} {product.price[0].symbol}</a>
              <h5 className='mb-0'>{product.price[1].value} {product.price[1].symbol}</h5>
            </div>
            <div className='d-flex row m-0 col-2'>
              <h6 className='d-flex align-items-center mb-0 p-1 col-9 bord_8'>Приход: {product.order}</h6>
              <div className='d-flex align-items-center col-3'>
                {/* <img src={myImageTrash} alt='Delete' className='btn border border-success p-2 mb-2 border-opacity-50 rounded-circle' onClick={() => openModalDeleteProduct(order.id)}/> */}
                <img src={myImageTrash} alt='Delete' className='btn border border-danger btn-outline-danger px-2 py-2 border-opacity-50 rounded-circle'/>
              </div>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;