import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, draft => {
        draft.push(action.product);
      });
    case '@cart/REMOVE':
      return produce(state, draft => {
        const pIndex = draft.findIndex(p => p.id === action.id);

        if (pIndex >= 0) {
          draft.splice(pIndex, 1);
        }
      });
    case '@cart/UPDATE_AMOUNT_SUCCESS': {
      return produce(state, draft => {
        const pIndex = draft.findIndex(p => p.id === action.id);

        if (pIndex >= 0) {
          draft[pIndex].amount = Number(action.amount);
        }
      });
    }
    default:
      return state;
  }
}
