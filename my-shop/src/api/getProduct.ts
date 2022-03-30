export function  getProduct() {
  return fetch('https://fakestoreapi.com/products')
    .then(data => data.json())
}