function filterItems() {
  let category = document.getElementById("category").value;
  let price = document.getElementById("price").value;
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
      let itemCategory = item.getAttribute("data-category");
      let itemPrice = item.getAttribute("data-price");

      if (
          (category === "" || category === itemCategory) &&
          (price === "" || price === itemPrice)
      ) {
          item.style.display = "block";
      } else {
          item.style.display = "none";
      }
  });
}