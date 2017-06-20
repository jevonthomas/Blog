var addLink = document.getElementById("link-add-blog-entry");
var addView = document.getElementById("add-blog-entry-view");

addLink.addEventListener("click", function() {
  listView.classList.add("hidden");

  addView.classList.add("visible");
  addView.classList.remove("hidden");

});