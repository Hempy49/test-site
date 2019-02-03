import R from 'ramda';

export const getPhoneById = (state, id) => R.prop(id, state.phones);

export const getPhones = state => {
    const phones = R.map(id => getPhoneById(state, id), state.phonesPage.ids);
    return phones;
}

export const getTotalBasketCount = state => R.length(state.basket);

export const getTotalBasketPrice = state => {
    const totalPrice = R.compose(
        R.sum,
        R.pluck('price'),
        R.map(id => getPhoneById(state, id))
    )(state.basket);
    return totalPrice;
}

export const getBasketPhonesWithCount = state => {
    const uniqueIds = R.uniq(state.basket);
    const phoneCount = id => R.compose(
        R.length,
        R.filter(basketId => R.equals(id, basketId))
    )(state.basket)
    const phoneWithCount = phone => R.assoc('count', phoneCount(phone.id), phone)
    const phones = R.compose(
        R.map(phoneWithCount), 
        R.map(id => getPhoneById(state,id))
    )(uniqueIds);
    return phones;
} 