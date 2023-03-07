//switching active class between each  filter tag
$(document).ready(function () {
  //store the tags in one variable
  const filterTags = document.querySelectorAll(".filter-tag");

  //loop through each tag and add event listener
  filterTags.forEach((item) => {
    item.addEventListener("click", () => {
      //remove active class from previous tag
      filterTags.forEach((tag) => {
        tag.classList.remove("active");
      });

      //add active class to current tag
      item.classList.add("active");
    });
  });
});
