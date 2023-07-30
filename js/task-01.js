const categories = document.querySelector("ul#categories");
console.log("Number of categories:", categories.children.length);

[...categories.children].forEach(function (item) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
