function team() {
  let members = document.querySelectorAll(".team-member");
  let avatar = document.querySelector(".section-avatar");
  if (avatar == null) {
    return
  }

  const onClick = function (element) {
    avatar.style.backgroundImage = "url(\"" + element.getAttribute("src") + "\")";
  };

  members.forEach(element => {
    element.addEventListener('click', function () {
      onClick(element);

      members.forEach(el => {
        el.classList.remove("selected")
      });

      element.classList.add("selected");
      let memberName = document.querySelector("#member-name");
      if (memberName) {
        memberName.textContent = element.getAttribute("alt")
      }
    })
  });

}

function openGallery() {
  $.fancybox.open([
    {src: '/assets/images/gallery/4.jpg'},
    {src: '/assets/images/gallery/1.jpg'},
    {src: '/assets/images/gallery/2.jpg'},
    {src: '/assets/images/gallery/3.jpg'},
    {src: '/assets/images/gallery/5.jpg'},
    {src: '/assets/images/gallery/6.jpg'},
    {src: '/assets/images/gallery/7.jpg'},
    {src: '/assets/images/gallery/8.jpg'},
    {src: '/assets/images/gallery/9.jpg'},
    {src: '/assets/images/gallery/10.jpg'},
    {src: '/assets/images/gallery/11.jpg'},
    {src: '/assets/images/gallery/12.jpg'},
    {src: '/assets/images/gallery/13.jpg'},
    {src: '/assets/images/gallery/14.jpg'},
    {src: '/assets/images/gallery/15.jpg'},
    {src: '/assets/images/gallery/16.jpg'},
    {src: '/assets/images/gallery/17.jpg'},
    {src: '/assets/images/gallery/18.jpg'},
    {src: '/assets/images/gallery/19.jpg'},
    {src: '/assets/images/gallery/20.jpg'}
  ]);
}

$(function () {
  team();

  $("#open-gallery").on('click', openGallery);
});
