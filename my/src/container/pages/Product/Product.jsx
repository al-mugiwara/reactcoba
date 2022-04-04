import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import {connect} from 'react-redux';
class Product extends Component {
    // state = {
    //     order:4,
    //     name:'Coba'
    // }

    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order:newValue
    //     })
    // }

    render() {
        return (
            <Fragment>
            <p>Halaman Product</p>
            <hr />
            <div className="header">
                <div className="logo">
                    <img src="https://docplayer.info/docs-images/114/211610078/images/1-0.jpg" width="300px" />
                </div>
                <div className="troley">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc7q1_pV_-mDqrhh5ffBqDgsNbeeZuB2N_xQ&usqp=CAU" alt="" />
                    <div className="count">{this.props.order}</div>
                </div>
            </div>
               <CardProduct  /> 
               {/* childcomponent counterchange terserah isinya*/}
            </Fragment>

        );
    }
}

const mapStateToProps  = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Product);