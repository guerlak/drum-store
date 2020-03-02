export const addItem = product => ({
    type: '@cart/ADD_ITEM',
    product
});
export const removeItem = id => ({
    type: '@cart/REMOVE_ITEM',
    id
});

export const updateAmount = (id, amount) => ({
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
});
