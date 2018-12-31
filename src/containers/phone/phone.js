import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhones, fetchPhoneById } from '../../actions/index';
import { getPhones, getPhoneById } from '../../selectors';
// import { Link } from 'react-router';

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

    render() {
        const { phone } = this.props;
        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {phone && this.renderContent()}
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
    fetchPhoneById
}

export default connect(mapStateToProps, mapDispatchtoProps)(Phone)