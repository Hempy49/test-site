import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhoneById, addPhoneToBasket } from '../../actions/index';
import { getPhoneById } from '../../selectors';
import BasketCart from '../../components/basketCart';
import {Link} from 'react-router';

class Phone extends Component {
    componentDidMount() {
        this.props.fetchPhoneById(this.props.params.id)
    }

    renderContent() {
        const { phone } = this.props;
        return (
            <div className='row'>
                <div className='col-md-6'>
                    <img
                        className='img-thumbnail'
                        src={phone.image}
                        alt={phone.name}
                    />
                    <h2>{phone.name}</h2>
                    <p>Phone description to go here.</p>
                </div>
            </div>
        )
    }

    renderSidebar () {
        const {phone, addPhoneToBasket} = this.props;
        return (
            <div>
                <p className='lead'>Quick shop</p>
                <BasketCart />
                <div className='form-group'>
                <h1>{phone.name}</h1>
                <h2>£{phone.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>
                Back to store
                </Link>
                <button
                type='button'
                className='btn btn-success btn-block'
                onClick={() => addPhoneToBasket(phone.id)} 
                >
                Add to cart
                </button>
            </div>
        )
    }

    render() {
        const { phone } = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {phone && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {phone && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    phone: getPhoneById(state, state.phonePage.id)
})

const mapDispatchtoProps = {
    fetchPhoneById,
    addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchtoProps)(Phone)   