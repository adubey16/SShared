export const GET_TRADELISTING = 'GET_TRADELISTING';

export function getItems() {
  return dispatch =>
    fetch('../app/json/tradelisting.json')
      .then(res => res.json())
      .then(res => res)
      .then(res =>{
        dispatch(setItems(res.items));
      });
}
export function setItems(items) {
 return {
    type: GET_TRADELISTING,
    items,
   };
}