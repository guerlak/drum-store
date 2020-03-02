export const addItemRequest = id => ({
    type: '@cart/ADD_ITEM_REQUEST',
    id
});

export const addItemSucess = product => ({
    type: '@cart/ADD_ITEM_SUCESS',
    product
});

export const removeItem = id => ({
    type: '@cart/REMOVE_ITEM',
    id
});

export const updateAmountRequest = (id, amount) => ({
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    id,
    amount
});
export const updateAmountSucess = (id, amount) => ({
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount
});
