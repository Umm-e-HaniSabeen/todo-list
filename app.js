var list = document.getElementById("list");

function Routine(){
    var Daily = document.getElementById("Daily")
    // creat li tag with text node
    var li = document.createElement("li")
    var liText = document.createTextNode(Daily.value)
    li.appendChild(liText)

    //creat delete button
var del = document.createElement("button")
var delText = document.createTextNode("DELETE")
del.setAttribute("onclick","deleteItem(this)")
del.appendChild(delText)

//creat edit button
var editBtn = document.createElement("button")
var editText = document.createTextNode("EDIT")
editBtn.setAttribute("onclick","editItem(this)")

editBtn.appendChild(editText)







li.appendChild(del)
li.appendChild(editBtn)
list.appendChild(li)

Daily.value = ""
console.log(li)
}

function deleteItem(e){
e.parentNode.remove()
}

function editItem(e){
   var val = e.parentNode.firstChild.nodeValue
    var editValue = prompt("Enter edit value" , val)
    e.parentNode.firstChild.nodeValue = editValue
}

function deleteAll(){
    list.innerHTML = ""
}
