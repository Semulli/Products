
async function getDetail() {
  try {
    const id = new URLSearchParams(window.location.search).get("id"); 
    let res = await fetch(`https://dummyjson.com/products/${id}`);
    let product = await res.json(); 
    renderFn(product); 
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

function renderFn(product) {
  document.querySelector("#showDetail").innerHTML = `
    <h1 class="text-center mt-5 text-danger" id="productTitle">${product.title}</h1>
    <div class="d-flex gap-4 mt-5">
      <img src="${product.thumbnail}" alt="${product.title}" style="width:500px;" />
      <p class="mt-5" style="font-size:40px;">${product.description}</p>
    </div>
    <button class="m-5 btn btn-warning" id="backButton">Back</button>
  `;

  document.getElementById("backButton").addEventListener("click", () => {
    window.history.back(); 
  });
}

window.addEventListener("load", getDetail);
