const categoryList = document.querySelector(".categories");

function fetchCategories() {
  // veri çekme isteği atma
  fetch('https://api.escuelajs.co/api/v1/categories')
    // gelen veriyi işleme
    .then((res) => res.json())
    // işlenen veriyi foreach ile herbir obje için ekrana basma
    .then((data) =>
      data.slice(0, 4).forEach((category) => {
      const { image, name } = category;
        // gelen herbir obje için div oluşturma
        const categoryDiv = document.createElement('div');
        // dive class ekleme
        categoryDiv.classList.add('category');
        // divin içeriğini değiştirme
        categoryDiv.innerHTML = `
        <img src="${image}" />
       <span>${name}</span> `;
        // oluşan divi htmldeki listeye atma
        categoryList.appendChild(categoryDiv);
      })
    )
    .catch();
}
fetchCategories();
