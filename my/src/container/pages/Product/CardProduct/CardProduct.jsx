import React, { Component } from 'react';
import Counter from './Counter';
class CardProduct extends Component {
  
    render() {
        return (
          
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://cf.shopee.co.id/file/a7a44fdc28c64dc8ff7b7b047eb99abc" alt="product-img" />
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 34.0000</p>
                    <Counter />
                </div>
        );
    }
}

export default CardProduct;