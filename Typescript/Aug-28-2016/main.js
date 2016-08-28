var todos = JSON.parse(localStorage.getItem("list")) || [];
genList();
document.getElementById("enterBtn")
    .addEventListener("click", function () {
    var inputValue = document.getElementById("textField").value;
    // document.getElementById("list").innerHTML += "<li>" + inputValue + "</li>";
    todos.push(inputValue);
    genList();
    localStorage.setItem("list", JSON.stringify(todos));
});
// todos.forEach(function(item, index){
//     document.getElementById("delete"+ index).addEventListener("click", deleteItem)
// })
// document.getElementById("delete1").addEventListener("click", deleteItem)
function deleteItem(index) {
    // var temp = todos;
    todos.splice(index, 1);
    genList();
}
function editItem(index) {
    // var temp = todos;
    var a = todos[index];
    todos.splice(index, 1);
    document.getElementById("textField").value = a;
    genList();
}
function genList() {
    var template = "";
    todos.forEach(function (item, index) {
        template += "<li>" + item + "<button id='delete" + index + "'>delete</button><button id='edit" + index + "'>edit</button></li>";
    });
    document.getElementById("list").innerHTML = template;
    todos.forEach(function (item, index) {
        document.getElementById("delete" + index).addEventListener("click", function () {
            deleteItem(index);
        });
        document.getElementById("edit" + index).addEventListener("click", function () {
            editItem(index);
        });
    });
}
