let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let sidemenu = document.getElementById("sidemenu")

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab")

}

function openMenu(){

    sidemenu.style.right="0";

}

function closeMenu(){

    sidemenu.style.right="-200px";

}

const scriptURL ="https://script.google.com/macros/s/AKfycbwoV0Yf0qnyfKGu7pAICColv09E91NchnyOAmTSN-q_wZtIew2w3sT_1hK9KodudRvE/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = '';
        },2000)
        form.reset();
})
    .catch(error => console.error('Error!', error.message))
})

