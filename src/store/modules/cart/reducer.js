import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_ITEM':
            return produce(state, draft => {
                const prodIndex = draft.findIndex(
                    p => p.id === action.product.id
                );
                if (prodIndex >= 0) {
                    console.log('enter');
                    draft[prodIndex].amount += 1;
                } else {
                    draft.push({ ...action.product, amount: 1 });
                }
            });
        case '@cart/REMOVE_ITEM':
            return produce(state, draft => {
                const prodIndex = draft.findIndex(p => p.id === action.id);
                if (prodIndex >= 0) {
                    draft.splice(prodIndex, 1);
                }
            });
        case '@cart/UPDATE_AMOUNT': {
            if (action.amount <= 0) {
                return state;
            }

            return produce(state, draft => {
                console.log(action.amount);

                const prodIndex = draft.findIndex(p => p.id === action.id);
                if (prodIndex >= 0 && draft[prodIndex].amount > 0) {
                    draft[prodIndex].amount = action.amount;
                }
            });
        }
        default:
            return state;
    }
}

// return state.map((item, index) => {
//     // Find the item with the matching id
//     if(item.id === action.payload.userId) {
//       // Return a new object
//       return {
//         ...item,  // copy the existing item
//         email: action.payload.newEmail  // replace the email addr
//       }
//     }

//     // Leave every other item unchanged
//     return item;
//   });
