import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, addPhoneToBasket } from '../../actions';
import { getPhones } from '../../selectors';
import { Link } from 'react-router';

class Phones extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  renderPhone(phone, index) {
    const {addPhoneToBasket} = this.props;
    return (
      <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
        <div className='thumbnail'>
          <img
            className='img-thumbnail'
            src={phone.image}
            alt={phone.name}
          />
          <div className='caption'>
            <h4 className='pull-right'>{phone.price}</h4>
            <h4>
              <Link to={`/phones/${phone.id}`}>
                {phone.name}
              </Link>
            </h4>
            <p className='itemButton'>
              <button className='btn btn-primary'
              onClick={() => addPhoneToBasket(phone.id)}
              >
              Buy now
              </button>
              <Link to={`/phones/${phone.id}`} className='btn btn-default'>
                More info
            </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

  render() {
    const { phones } = this.props;
    return (
      <div className='books row'>
        {phones.map((phone, index) => this.renderPhone(phone, index))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  phones: getPhones(state)
})

const mapDispatchToProps = {
  fetchPhones,
  addPhoneToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Phones);
