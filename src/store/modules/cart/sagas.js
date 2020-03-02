import { call, select, put, all, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { formatPrice } from '../../../util/format';
import { addItemSucess, updateAmountSucess } from './actions';
import { toast } from 'react-toastify';

function* addItem({ id }) {
    const productExists = yield select(state =>
        state.cart.find(p => p.id === id)
    );

    const response = yield call(api.get, `/stock/${id}`);
    const stockAmount = response.data.amount;
    const currentAmount = productExists ? productExists.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
        toast.error('Quantidade acima de estoque.');
        return;
    }

    if (productExists) {
        yield put(updateAmountSucess(id, amount));
    } else {
        const response = yield call(api.get, `/products/${id}`);
        const data = {
            ...response.data,
            amount: 1,
            priceFormated: formatPrice(response.data.price)
        };

        yield put(addItemSucess(data));
    }
}

function* updateAmount({ id, amount }) {
    if (amount <= 0) {
        return;
    }

    const response = yield call(api.get, `/stock/${id}`);
    const stockAmount = response.data.amount;

    if (amount > stockAmount) {
        toast.error('Quantidade acima de estoque.');
        return;
    }
    yield put(updateAmountSucess(id, amount));
}

export default all([
    takeLatest('@cart/ADD_ITEM_REQUEST', addItem),
    takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
]);
