export function useCartCount(goods) {
  const count = goods.reduce((count, item) => (count += item.count), 0);

  return count;
}
