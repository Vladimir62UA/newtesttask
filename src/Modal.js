import React, { useEffect } from 'react';

const Modal = ({ isOpen, closeModal, products, orderId, selectedProduct, setSelectedProduct }) => {
    useEffect(() => {
        if (products.length === 0) {
            setSelectedProduct(null);
        }
    }, [products]);

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className='d-flex flex-row-reverse position-relative'>
                    <button type="button" className="btn-close z-10 border border-black p-3 border-opacity-50 rounded-circle btn_close bg-white opacity-100 overflow-x-visible" aria-label="Close" onClick={closeModal}></button>
                </div>
                <h2 className='ps-4'>Заказ #{orderId || "Неизвестен"}</h2>
                <h6 className='mb-4 ps-4'>(Для детализации кликните по названию продукта)</h6>

                <div className="modal-body">
                    <ul className="product-list">
                        {products.length > 0 ? (
                            products.map((product) => (
                                <li 
                                    key={product.id} 
                                    onClick={() => setSelectedProduct(product)}
                                    className={selectedProduct?.id === product.id ? "selected" : ""}
                                >
                                    <strong>{product.title}</strong> - {product.price.find(p => p.isDefault)?.value} {product.price.find(p => p.isDefault)?.symbol}
                                </li>
                            ))
                        ) : (
                            <li className="no-products">Нет товаров в этом заказе</li>
                        )}
                    </ul>

                    {selectedProduct && (
                        <div className="product-details">
                            <h3>Детали товара</h3>
                            <p><strong>Название:</strong> {selectedProduct.title}</p>
                            <p><strong>Тип:</strong> {selectedProduct.type}</p>
                            <p><strong>Характеристики:</strong> {selectedProduct.specification}</p>
                            <p><strong>Серийный номер:</strong> {selectedProduct.serialNumber}</p>
                            <p><strong>Дата:</strong> {selectedProduct.date}</p>
                            <p><strong>Цена:</strong></p>
                            <ul>
                                {selectedProduct.price.map((p) => (
                                    <li key={p.symbol}>{p.value} {p.symbol}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;