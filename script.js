var button = document.getElementById("enter");
var user_input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];


function createListElement() {

    var li = document.createElement("li");
    //add text
    li.appendChild(document.createTextNode(user_input.value));
    ul.appendChild(li);
    //append ul with li
    user_input.value = "";
}

function addListAfterClick() {
    //add li element
    if (user_input.value.length > 0) {
        createListElement();

    }

}


function addListAfterKey(event) {
    //add li element
    if (user_input.value.length > 0 && event.which === 13) {
        createListElement();

    }
}

button.addEventListener("click", addListAfterClick)

user_input.addEventListener("keypress", addListAfterKey)


function crossItem(event) {
    event.target.classList.toggle('done');
}

for (let i = 0; i < ul.childElementCount; i++) {
    let l = ul.children[i];
    l.addEventListener("click", crossItem)
}
