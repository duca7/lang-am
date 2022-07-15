export const formatVND = (price:number, suffix: 'đ' |'VNĐ' = 'đ') => {
  return (price * 1000)
    .toLocaleString('vi', { style: 'currency', currency: 'VND' })
    .split('₫')[0]
    .trim()
    .concat(suffix);
};
