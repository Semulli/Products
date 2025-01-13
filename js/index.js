async function getProduct() {
  try {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    renderFn(data.products); 
  } catch (error) {
    console.log("An error occurred:", error.message);
  }
}

function renderFn(data) {
  document.querySelector("#productInfo").innerHTML = data
    .map((element) => {
      return `<div class="col-4">
            <div class="card text-dark m-5" style="width: 300px">
              <img
                src="${element.thumbnail}"
                class="card-img-top"
                alt="Product Image"
                style="height: 300px"
              />
              <div class="card-body">
                <h2 class="card-title product-title">${element.title}</h2>
                <p class="card-text product-text">${element.description}</p>
                <p class="product-price">$${element.price}</p>
                <a class="btn btn-danger" href="../pages/details.html?id=${element.id}">
                  See details..
                </a>
              </div>
            </div>
          </div>`;
    })
    .join(""); 
}


window.addEventListener("load", getProduct);

