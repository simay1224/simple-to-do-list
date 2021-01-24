var button = document.getElementById("enter");
var user_input = document.getElementById("userinput");
var ul = document.getElementsByTagName("ul")[0];

var deleteBtns = document.getElementsByClassName("delete");

function createListElement() {

    var li = document.createElement("li");
    //add text
    li.appendChild(document.createTextNode(user_input.value));
    li.appendChild(createDeleteButton());
    li.addEventListener("click", crossItem);
    ul.appendChild(li);

    //append ul with li
    user_input.value = "";
}

function createDeleteButton() {
    var btn = document.createElement("button");
    btn.innerHTML = "Delete";
    //btn.onClick = removeParent;
    btn.addEventListener("click", removeParent);
    return btn;
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
function crossItem(event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle('done');
    }
}

function deleteItem(event) {
    //event.target.removeEventListener("click", removeParent, false);
    event.target.parentNode.remove();
}
button.addEventListener("click", addListAfterClick)

user_input.addEventListener("keypress", addListAfterKey)


for (let i = 0; i < ul.childElementCount; i++) {
    let l = ul.children[i];
    l.addEventListener("click", crossItem)
}


function removeParent(evt) {
    evt.target.parentNode.remove();
}

for (let i = 0; i < deleteBtns.length; i++) {
    console.log(i);
    deleteBtns[i].addEventListener("click", removeParent);
}
