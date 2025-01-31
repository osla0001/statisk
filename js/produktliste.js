let listContainer = document.querySelector("#accessories");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<div class="product_card">
       <a href="produkt.html">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="T-Shirt" />
      <h2 class="title">${product.productdisplayname}</h2>
      <p class="category">${product.articletype} | ${product.brandname}</p>
      <p class="price">DKK ${product.price},-</p>
      <a href="produkt.html" class="read_more">Read more</a>
    </a>
  </div>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
