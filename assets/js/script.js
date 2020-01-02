function team() {
  let members = document.querySelectorAll(".team-member");
  let avatar = document.querySelector(".user-avatar img");
  if (avatar == null) {
    return
  }

  const onClick = function (element) {
    avatar.setAttribute("src", element.getAttribute("src"));
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

function setCookie(name, value, expiry /* in days */) {
  let d = new Date();
  d.setTime(d.getTime() + (expiry * 24 * 60 * 60 * 1000));
  let expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/'
}

function getCookie(name) {
  name = name + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let cookies = decodedCookie.split(';');

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];

    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1)
    }

    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length)
    }
  }

  return null
}


function openGallery() {
  $.fancybox.open([
    {src: '/assets/images/gallery/4.JPG'},
    {src: '/assets/images/gallery/1.JPG'},
    {src: '/assets/images/gallery/2.JPG'},
    {src: '/assets/images/gallery/3.JPG'},
    {src: '/assets/images/gallery/5.JPG'},
    {src: '/assets/images/gallery/6.JPG'},
    {src: '/assets/images/gallery/7.JPG'},
    {src: '/assets/images/gallery/8.JPG'},
    {src: '/assets/images/gallery/9.JPG'},
    {src: '/assets/images/gallery/10.JPG'},
    {src: '/assets/images/gallery/11.JPG'},
    {src: '/assets/images/gallery/12.JPG'},
    {src: '/assets/images/gallery/13.JPG'},
    {src: '/assets/images/gallery/14.JPG'},
    {src: '/assets/images/gallery/15.JPG'},
    {src: '/assets/images/gallery/16.JPG'},
    {src: '/assets/images/gallery/17.JPG'},
    {src: '/assets/images/gallery/18.JPG'},
    {src: '/assets/images/gallery/19.JPG'},
    {src: '/assets/images/gallery/20.JPG'}
  ]);
}

function showBtcSimple() {
  $.fancybox.open([
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-002.png'}
    },
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-003.png'}
    },
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-004.png'}
    },
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-005.png'}
    },
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-006.png'}
    },
    {
      src: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png',
      opts: {thumb: '/assets/images/btc-in-simple-term/Bitcoin-Explained-Simple-Terms-007.png'}
    }
  ], {
    thumbs: {
      autoStart: true
    }
  });
}

function closeGdpr(accept) {
  if (accept === true) {
    setCookie("gdpr-accepted", true, 365)
  }

  $(".gdpr-popup").css({"display": "none"})
}

function checkGdpr() {
  if (getCookie("gdpr-accepted")) {
    $(".gdpr-popup").css({"display": "none"})
  }
}

$(function () {
  checkGdpr();
  team();

  $("#open-gallery").on('click', openGallery);
  $("#btc-simple").on('click', showBtcSimple);

  $("#accept-cookie").on('click', function () {
    closeGdpr(true)
  });

  $("#close-cookie").on('click', function () {
    closeGdpr(false)
  })

});
