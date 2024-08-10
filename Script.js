var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu")
var clrform = document.getElementsByClassName("clrform");
const faBars = document.getElementById("faBars")
const intro = document.getElementById("intro")


function openTab(tabName) {
     for (var tabLink of tabLinks) {
          tabLink.classList.remove("active-link");
     }
     for (var tabContent of tabContents) {
          tabContent.classList.remove("active-tab");
     }
     event.currentTarget.classList.add("active-link");
     document.getElementById(tabName).classList.add("active-tab");
}

function closemenu() {
     sidemenu.style.right = "-200px";
     faBars.style.display = null;
}

function openmenu() {
     sidemenu.style.right = "0px";
}

const text = "Hi I'm Bhupalan looking for an entry-level job";
let index = 0;

const displayIntro = () => {
     if (index < text.length) {
          intro.innerHTML += text.charAt(index);
          index++;
          setTimeout(displayIntro, 50);
     }
}
setTimeout(displayIntro, 900);

// ------------------------contact-------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbysPmtOi6Wp4C6J_P2TVJDQVFU6CiXRQVESN7VEWnKvsqePoIQpSQpJjNdAXHynKuv2Pg/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
     e.preventDefault()
     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
               msg.innerHTML = "Message sent Successfullly!";
               setTimeout(function () {
                    msg.innerHTML = "";
               }, 2000);
               form.reset();
          })
          .catch(error => console.error('Error!', error.message))
})

