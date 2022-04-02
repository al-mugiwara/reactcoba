import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';
class Product extends Component {
    state = {
        order:4,
        name:'Coba'
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order:newValue
        })
    }

    render() {
        return (
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="https://docplayer.info/docs-images/114/211610078/images/1-0.jpg" width="300px" />
                </div>
                <div className="troley">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7q1_pV_-mDqrhh5ffBqDgsNbeeZuB2N_xQ&usqp=CAU" alt="" />
                    <div className="count">{this.state.order}</div>
                </div>
            </div>
               <CardProduct  onCounterChange={(value) => this.handleCounterChange(value)}/> 
               {/* childcomponent counterchange terserah isinya*/}
            </Fragment>

        );
    }
}

export default Product;