import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import phones from '../reducers/phonesReducer';
import phonesPage from '../reducers/phonesPageReducer';
import phonePage from '../reducers/phonePageReducer';
import basket from '../reducers/basketReducer';

export default combineReducers({
    routing: routerReducer,
    phones,
    phonesPage,
    phonePage,
    basket
});
