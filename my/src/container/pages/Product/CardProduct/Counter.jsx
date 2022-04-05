import React, { Component } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../../../redux/reducer/globalActionType';
import { GlobalConsumer } from '../../../../context/Context';


class Counter extends Component {
    // state = {
    //     order: 4,
    //     name: 'Coba'
    // }

    // handleCounterChange = (newValue) => {
    //      this.props.onCounterChange(newValue);
    // }

    // handlePlus = () => {
    //     //console.log('plus',this);
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order);
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order);
    //         })
    //     }

    // }

    render() {
        console.log(this);
        return (
            <div className="counter">
                <button className="minus" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                {/* <button className="minus" onClick={this.props.handleMinus}>-</button> */}
                <input type="text" value={this.props.state.totalOrder} />
                {/* <input type="text" value={this.props.order} /> */}
                <button className="plus" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
                {/* <button className="plus" onClick={this.props.handlePlus}>+</button> */}
            </div>
        )
    }
}

// const mapStateToProps  = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         handlePlus: () => dispatch({type:ActionType.PLUS_ORDER}),
//         handleMinus:() => dispatch({type:ActionType.MINUS_ORDER})
//     }
// }

export default GlobalConsumer(Counter);
//export default connect(mapStateToProps, mapDispatchToProps)(Counter);