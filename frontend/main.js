const buttonFindProduct1 = document.getElementById('ButtonFindProduct1');
const buttonFindProduct2 = document.getElementById('ButtonFindProduct2');

buttonFindProduct1.addEventListener('click', () => {
  fetch('http://localhost:4000/api/products')
    .then((res) => res.json())
    .then((prods) => console.log(prods));
});

buttonFindProduct2.addEventListener('click', () => {
  fetch('http://localhost:4000/api/products/65f8eaf97f06c9a0e63bcb79')
    .then((res) => res.json())
    .then((prod) => console.log(prod));
});
