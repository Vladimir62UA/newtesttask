import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {orders} from './Data_app'
import './App.css'

import Modal from './Modal';
import Modal_delete from './Modal_delete'
import myImage from './list-ul.svg'
import myImageTrash from './trash3.svg'

export function Orders_1(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null); // Добавлено
  
  const openModal = (orderId) => {
      const orderProducts = orders.find(order => order.id === orderId)?.products.filter(product => product.order === orderId) || [];
      setSelectedOrderId(orderId);
      setSelectedProducts(orderProducts);
      setSelectedProduct(null); // Сбрасываем выделенный товар при смене заказа
      setIsModalOpen(true);
  };
  
  const closeModal = () => {
      setIsModalOpen(false);
      setSelectedProduct(null); // Очищаем выбранный товар при закрытии модалки
  };

  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [selectedDeleteOrderId, setSelectedDeleteOrderId] = useState(null);
 
  const openModalDeleteOrder = (orderId) => {
    console.log("function openModalCloseOrder  orderId = ", orderId)
    const orderProducts = orders.find(order => order.id === orderId)?.products.filter(product => product.order === orderId) || [];
      setSelectedDeleteOrderId(orderId);
      setSelectedProducts(orderProducts);
      setSelectedProduct(null); // Сбрасываем выделенный товар при смене заказа
      setIsModalDeleteOpen(true);
  }
  const closeModalDeleteOrder = () => {
    setIsModalDeleteOpen(false);
    setSelectedProduct(null); // Очищаем выбранный товар при закрытии модалки
};


  var newMonth = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Нояб", "Дек"]
  var order_date = new Array()
    var sum_order_USD = 0
    var sum_order_UAN = 0
    var sum_orderUSD = new Array()
    var sum_orderUAN = new Array()
    var sum_ord_leng = new Array()
    var ord_leng = 0
    var d = new Date()
    console.log(d)
    console.log(d.getDay())
    var d8 = d.getDay()

    var d7 
    var d6 = d.getDate()
    if (d6 < 10) {d6 = '0' + d6}

    var d5 = d.getMonth()
    var d4 = d.getHours()
    if (d4 < 10) {d4 = '0' + d4}
    var d3 = d.getMinutes()
    if (d3 < 10) {d3 = '0' + d3}

    // var d8 = 1 //Принудительная установка дня недели для отладки. После отладки убрать (закомментировать) 
    if (d8 === 0) {d7 = "воскресенье"}
    else if (d8 === 1) {d7 = "понедельник"}
    else if (d8 === 2) {d7 = "вторник"}
    else if (d8 === 3) {d7 = "среда"}
    else if (d8 === 4) {d7 = "четверг"}
    else if (d8 === 5) {d7 = "пятница"}
    else if (d8 === 6) {d7 = "суббота"}
    // var d5 = 11 //Принудительная установка месяца для отладки. После отладки убрать (закомментировать)
    if (d5 === 0) {d5 = "Янв."}
    if (d5 === 1) {d5 = "Февр."}
    if (d5 === 2) {d5 = "Мар."}
    if (d5 === 3) {d5 = "Апр."}
    if (d5 === 4) {d5 = "Май."}
    if (d5 === 5) {d5 = "Июн."}
    if (d5 === 6) {d5 = "Июл."}
    if (d5 === 7) {d5 = "Авг."}
    if (d5 === 8) {d5 = "Сен."}
    if (d5 === 9) {d5 = "Окт."}
    if (d5 === 10) {d5 = "Нояб."}
    if (d5 === 11) {d5 = "Дек."}

    console.log(d8 + " - " + d7)

    orders.map((order, id) => {
      console.log("ShoppingCart.js  orders.length =  ", orders[id].products.length)
      console.log("ShoppingCart.js  index ", id)
      console.log("ShoppingCart.js  item ", order)
      console.log("ShoppingCart.js  item.date", order.date.slice(0,10))
      let tmp_date = order.date.slice(0,10)
      console.log("tmp_date ", tmp_date)

      let tmp_newDay = order.date.slice(8,10)
      if (order.date.slice(5,7) < 10){
        var tmp_newMonth = order.date.slice(6,7)
      }
      else {
        tmp_newMonth = order.date.slice(5,7)
      }
      tmp_newMonth = order.date.slice(5,7)
      console.log("tmp_newMonth",  tmp_newMonth)
      let tmp_newYear = order.date.slice(0,4)
      tmp_newMonth = newMonth[Number(tmp_newMonth) - 1]
      let tmp_newDate = tmp_newDay + " / " + tmp_newMonth + " / " +  tmp_newYear
      console.log("tmp_newDay",  tmp_newDay)
      console.log("tmp_newMonth",  tmp_newMonth)
      console.log("tmp_newYear",  tmp_newYear)
      console.log("tmp_newDate",  tmp_newDate)

      order_date.push(tmp_newDate)

      sum_order_USD = 0    
      sum_order_UAN = 0
      ord_leng = 0
      // order.products.map((product, id) => {
      //   if (product.order === order.id){
      //     console.log("order.id", order.id)
      //     console.log("product.order", product.order)
      //     console.log("product.price[0].value", product.price[0].value)
      //     sum_order_USD = sum_order_USD +  product.price[0].value
      //     sum_order_UAN = sum_order_UAN +  product.price[1].value
          
      //     ord_leng = ord_leng + 1
      //   }
      // })
       // Перебираем продукты для текущего заказа
      // Используем map для перебора продуктов в заказе
      order.products.map((product) => {
        if (product.order === order.id) {
          console.log("order.id", order.id);
          console.log("product.order", product.order);
          console.log("product.price[0].value", product.price[0].value);

          // Суммируем цены в USD и UAN
          sum_order_USD += product.price[0].value;
          sum_order_UAN += product.price[1].value;

          // Подсчитываем количество товаров
          ord_leng++;
        }
      });
      sum_ord_leng[order.id - 1] = ord_leng
      console.log("sum_ord_leng[order.id - 1]", sum_ord_leng)

      ord_leng = orders.length
      sum_ord_leng.push(ord_leng)
      if (sum_order_USD > 0){
        sum_orderUSD.push(sum_order_USD + ' USD')
        console.log("sum_ord_leng = ", sum_ord_leng)
      }
      else {
        sum_orderUSD.push('Нет товаров')
      }
      if (sum_order_UAN > 0){
        sum_orderUAN.push(sum_order_UAN + ' UAN')
      }
      else {
        sum_orderUAN.push('')
      }
      console.log("ShoppingCart.js  index ", id)
      console.log("sum_order_USD = ", sum_order_USD)
      console.log("sum_order_UAN = ", sum_order_UAN)
    })
    console.log(" sum_orderUSD",   sum_orderUSD)
    console.log(" sum_orderUAN",   sum_orderUAN)
    console.log("order_date",  order_date)


    // function OpenModal(my_this,x_x){
    //   order_id = x_x
    //   console.log("order_id = ", order_id)
    // }
  return (
     <div className="container p-0">
      
      {/* <h1>Page Orders 1</h1> */}
      {/* <div>{d7}</div>
      <div>{d6} {d5} {d9}  {d4}:{d3}:{d1}</div> */}
      
      <h2 className='text-white fw-bolder'>Приходы / {ord_leng}</h2>
      <ul className='bord_10 col-12 p-0'>
        {orders.map((order) => (
          <li key={order.id} className="card mb-3 p-1 flex-row bord_8 col-12">
            <h5 className='d-flex align-items-center col-5 mb-0 bord_9'>Название прихода: {order.title}</h5>
            
            <div className='d-flex flex-row align-items-center col-7 bord_8'>
              {/* <div className='col-2 d-flex flex-row bord_10'> */}
                <div className='d-flex justify-content-center align-items-center col-1 bord_8'>
                  <img src={myImage} alt='List' className='Justify_btn btn border border-success btn-outline-success p-2 border-opacity-50 rounded-circle' onClick={() => openModal(order.id)}/>
                </div>
                
                <div className='d-flex flex-column justify-content-center m-0 col-2 bord_8'>
                  {/* <div className='bord_9'> */}
                    <h5 className='ps-1 pt-2'>{sum_ord_leng[order.id - 1]}</h5>
                    <h6 className='ps-1 pb-2 text-dark'>Продукта</h6>
                  {/* </div> */}
                </div >
              {/* </div> */}
              {/* <p>Дата создания прихода:</p> */}
              <div className='d-flex flex-column align-items-center justify-content-center m-0 col-4 bord_9'>
                <p>{order.date.slice(8,10)} / {order.date.slice(5,7)} </p>
                <h5>{order_date[order.id - 1]} </h5>
              </div>
              {/* <h5>Сумма прихода:</h5> */}
              <div className='d-flex flex-column align-items-center m-0 col-4 bord_8'>
                <div className='bord_9'>
                  <p>{sum_orderUSD[order.id - 1]}</p>
                  <h5>{sum_orderUAN[order.id - 1]}</h5>
                </div>
                
              </div>
              <div className='d-flex align-items-center justify-content-center col-1 bord_9'>
                <img src={myImageTrash} alt='Delete' className='btn border border-danger border-opacity-50 btn-outline-danger p-2 rounded-circle' onClick={() => openModalDeleteOrder(order.id)}/>
              </div>
            </div>

            <Modal 
                isOpen={isModalOpen} 
                closeModal={closeModal} 
                products={selectedProducts} 
                orderId={selectedOrderId} 
                selectedProduct={selectedProduct}  // Передаем выбранный товар
                setSelectedProduct={setSelectedProduct} // Передаем функцию для изменения товара
            />
            <Modal_delete 
                isOpen={isModalDeleteOpen} 
                closeModal={closeModalDeleteOrder} 
                products={selectedProducts} 
                orderId={selectedDeleteOrderId} 
                selectedProduct={selectedProduct}  // Передаем выбранный товар
                setSelectedProduct={setSelectedProduct} // Передаем функцию для изменения товара
            />

          </li>
        ))}

      </ul>
   </div>
  )



  
 }
export default Orders_1;
