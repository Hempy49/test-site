import React from 'react';
import { connect } from 'react-redux';
import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors';
import R from 'ramda';

const Basket = ({ phones, totalPrice }) => {
    const isBasketEmpty = R.isEmpty(phones);
    const renderContent = () => (
        <div>
            {isBasketEmpty && <div>Your shopping cart is empty</div>}
            <div className='table-responsive'>
                <table className='table-bordered table-striped table-hover'>
                    {R.not(isBasketEmpty) &&
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    }
                    <tbody>
                        {phones.map((phone, index) => (
                            <tr
                                key={index}
                                className='item-checkout'
                            >
                                <td className='first-column-checkout'>
                                    <img
                                        className='thumbnail'
                                        src={phone.image}
                                        alt={phone.name}
                                    />
                                </td>
                                <td>{phone.name}</td>
                                <td>{phone.price}</td>
                                <td>{phone.count}</td>
                                <td>
                                    <span className='glyphicon glyphicon-trash'></span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )

    const renderSidebar = () => (
        <h2>
            {
                R.not(isBasketEmpty) &&
                <div className='row'>
                    <div className='pull-right total-user-checkout'>
                        <b>Total: </b>
                        £ {totalPrice}
                    </div>
                </div>
            }
        </h2>
    )

    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {renderContent()}
                    </div>
                    <div className='col-md-3 btn-user-checkout'>
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state)
})

export default connect(mapStateToProps)(Basket);