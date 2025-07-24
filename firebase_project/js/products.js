// ham hien thi thong tin mon hang
function renderProductCard(productId, productTitle, productPrice) {
    const productCard = document.createElement("li");
    productCard.id = productId;
    productCard.innerHTML = `
    <strong style="color:blue;">${productId}</strong>
    - ${productTitle} -
    <strong style="color:red;">${productPrice}</strong>
  `;
    return productCard;
}


// ham goi api -> danh sach mon hang
async function getProducts() {
    await fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((data) => {
            // lay container
            const container = document.getElementById("products");
            console.log(container);
            // lap qua cac mon hang
            data.products.forEach((item) => {
                container.appendChild(
                    renderProductCard(item.id, item.title, item.price)
                );
            });
        });
}

getProducts();

// bat su kien search
document.getElementById("search_inp").addEventListener("keyup", function (e) {
  const key = this.value;
  const products = document.querySelectorAll("li");
  products.forEach((item) => {
    if (!item.dataset.title.includes(key)) {
      // ten khong co ki tu duoc tim kiem => k hien thi
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
});