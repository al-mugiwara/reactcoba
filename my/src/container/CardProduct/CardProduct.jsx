import React, { Component } from 'react';
class CardProduct extends Component {
    state = {
        order:4,
        name:'Coba'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        //console.log('plus',this);
        this.setState({
            order:this.state.order +1
        },() => {
            this.handleCounterChange(this.state.order);
        })       
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order:this.state.order - 1
            },() => {
                this.handleCounterChange(this.state.order);
            })
        }
        
    }
    render() {
        return (
          
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://cf.shopee.co.id/file/a7a44fdc28c64dc8ff7b7b047eb99abc" alt="product-img" />
                    </div>
                    <p className="product-title">Daging Ayam Berbumbu Rasa Original plus Tepung Crispy [1 Carton - 10 Pack]</p>
                    <p className="product-price">Rp. 34.0000</p>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus}>-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        );
    }
}

export default CardProduct;