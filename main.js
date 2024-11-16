// Define audio variable at the top level
var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

// DOMContentLoaded ensures the audio element is available
document.addEventListener('DOMContentLoaded', function() {
  const soundSwitch = document.getElementById("switchforsound");
  soundSwitch.checked = true; // Ensure switch is checked by default
});

// window.onload runs after all resources (including audio) are loaded
window.onload = function () {
  const soundSwitch = document.getElementById("switchforsound");
  soundSwitch.checked = true;
  
  // Try to play audio after a slight delay to ensure it's properly loaded
  setTimeout(() => {
    if (soundSwitch.checked) {
      audio.play().catch((error) => {
        console.log("Autoplay blocked:", error);
        // Try to play again after user interaction
        document.addEventListener('click', function playOnFirstClick() {
          audio.play();
          document.removeEventListener('click', playOnFirstClick);
        }, { once: true });
      });
    }
  }, 100);
};

function settingtoggle() {
  document.getElementById("setting-container").classList.toggle("settingactivate"),
  document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"),
  document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow")
}

function playpause() {
  const isSoundOn = document.getElementById("switchforsound").checked;
  if (isSoundOn) {
    audio.play().catch((error) => {
      console.log("Play failed:", error);
    });
  } else {
    audio.pause();
  }
}

// Add page visibility handling
document.addEventListener('visibilitychange', function() {
  const soundSwitch = document.getElementById("switchforsound");
  if (!document.hidden && soundSwitch.checked) {
    audio.play().catch((error) => {
      console.log("Play failed on visibility change:", error);
    });
  }
});

// Attempt to resume playback when window gets focus
window.addEventListener('focus', function() {
  const soundSwitch = document.getElementById("switchforsound");
  if (soundSwitch.checked) {
    audio.play().catch((error) => {
      console.log("Play failed on focus:", error);
    });
  }
});




//////////////////////////////////////////////////////////////////////////////////////////////////

function visualmode() {
  document.body.classList.toggle("light-mode"),
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
      e.classList.toggle("invertapplied")
    })
}

window.addEventListener("load", function () {
  loader.style.display = "none",
    document.querySelector(".hey").classList.add("popup")
});

let emptyArea = document.getElementById("emptyarea"),
  mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
  document.body.classList.toggle("stopscrolling"),
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"),
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")
}

function hidemenubyli() {
  document.body.classList.toggle("stopscrolling"),
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"),
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3")
}

const sections = document.querySelectorAll("section"),
  navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
  mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
  let e = "";
  sections.forEach(t => {
    let o = t.offsetTop;
    t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id"))
  }),
    mobilenavLi.forEach(t => {
      t.classList.remove("activeThismobiletab"),
        t.classList.contains(e) && t.classList.add("activeThismobiletab")
    }),
    navLi.forEach(t => {
      t.classList.remove("activeThistab"),
        t.classList.contains(e) && t.classList.add("activeThistab")
    })
}),
  console.log("%c Designed and Developed by Mohammad Sarfraz ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
  document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function scrolltoTopfunction() {
  document.body.scrollTop = 0,
    document.documentElement.scrollTop = 0
}

window.onscroll = function () {
  scrollFunction()
},
  document.addEventListener("contextmenu", function (e) {
    "IMG" === e.target.nodeName && e.preventDefault()
  }, !1);

let Pupils = document.getElementsByClassName("footer-pupil"),
  pupilsArr = Array.from(Pupils),
  pupilStartPoint = -10,
  pupilRangeX = 20,
  pupilRangeY = 15,
  mouseXStartPoint = 0,
  mouseXEndPoint = window.innerWidth,
  currentXPosition = 0,
  fracXValue = 0,
  mouseYEndPoint = window.innerHeight,
  currentYPosition = 0,
  fracYValue = 0,
  mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
  fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange,
    fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint;
  let t = pupilStartPoint + fracXValue * pupilRangeX,
    o = pupilStartPoint + fracYValue * pupilRangeY;
  pupilsArr.forEach(e => {
    e.style.transform = `translate(${t}px, ${o}px)`
  })
},
  windowResize = e => {
    mouseXEndPoint = window.innerWidth,
      mouseYEndPoint = window.innerHeight,
      mouseXRange = mouseXEndPoint - mouseXStartPoint
  };

window.addEventListener("mousemove", mouseMove),
  window.addEventListener("resize", windowResize);
