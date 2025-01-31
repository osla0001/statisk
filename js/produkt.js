let productId = 1163;
let productContainer = document.querySelector("#product_display");

// fetch henter data fra databasen (api'et)
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  // konventerer til en gyldig json fil - så filen kan arbejdes med
  .then((response) => response.json())
  //   arbejder med dataerne,
  .then((data) => {
    // ` bruges, i stedet for gåseøjne, til at beskrive hvad der skal indsættes
    productContainer.innerHTML = `
    <div class="product_image">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp" alt="T-Shirt" />
        </div>
        <div class="product_info">
          <div class="product_info_top">
            <h2>${data.productdisplayname}</h2>
            <h3>Produkt information</h3>
            <div class="product_row">
              <div class="product_brand">
                <h4>Mærke</h4>
                <p>${data.brandname}</p>
              </div>
              <div class="product_color">
                <h4>Farve</h4>
                <p>${data.colour1}</p>
              </div>
              <div class="product_number">
                <h4>Inventar Nr.</h4>
                <p>${data.id}</p>
              </div>
            </div>
          </div>
          <div class="product_info_bottom">
            <div class="pricesize_container">
              <div class="price_container">
                <p class="price_text">Pris:</p>
                <p class="price_display">DKK ${data.price},-</p>
              </div>
              <div class="size_container">
                <div><p>Størrelse:</p></div>
                <select name="size" id="size">
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                </select>
              </div>
            </div>
            <div class="add_to_basket">
              <a href=""><p>Tilføj til kurv</p></a>
            </div>
          </div>
        </div>
    `;
  });
