export const shorten = (text) => {
  const splitedText = text.split(' ');
  const newText = splitedText[0] + ' ' + splitedText[1];
  return newText;
}

export const isInCard = (state,id) => {
  const result = state.selectedItems.find((item) => item.id === id)
  return !!result;
}

export const quantityCount = (state,id) => {
  const index = state.selectedItems.findIndex(item => item.id === id)
  if(index === -1) {
    return -1;
  } else {
    return state.selectedItems[index].quantity;
  }

}