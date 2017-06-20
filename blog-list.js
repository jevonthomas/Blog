var listLink = document.getElementById("link-blog-list");
var listView = document.getElementById("blog-list-view");

listLink.addEventListener("click", function(event) {
  event.preventDefault();
  addView.classList.add("hidden");

  listView.classList.add("visible");
  listView.classList.remove("hidden");
});