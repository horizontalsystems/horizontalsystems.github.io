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

document.addEventListener('DOMContentLoaded', function () {
  team()
});
