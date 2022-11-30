
let form = document.getElementById("form1")
////////////

let Users = [];
if (localStorage.getItem('myUser') != null) {
    Users = JSON.parse(localStorage.getItem('myUser'))
    showInfo();
}



form.addEventListener('submit', function (e) {
    e.preventDefault();

    addUser(e.target.elements.name.value, e.target.elements.age.value, e.target.elements.status.value);
    localStorage.setItem('myUser', JSON.stringify(Users))

    showInfo();
    clear(e);

})
///// adduser ////
function addUser(name, age, status) {
if(name && age){
    Users.push({
        user_name: name,
        user_age: age,
        user_status: status

    })
}
    



}
///// show users ///
function showInfo() {

    let last = ``;

    for (let i = 0; i < Users.length; i++) {
        last += `<tr>
   <td>${i}</td>
   <td>${Users[i].user_name}</td>
   <td>${Users[i].user_age}</td>
   
   <td><input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked +${i}" onchange='editUser(${i})' >${Users[i].user_status} </td>
   
    
   <td><button  onclick='deleteUser(${i})' > delete </button></td>
   
   </tr>`
    }
    document.getElementById("table").innerHTML = last
}
//// clear input value////
function clear(e) {
    e.target.elements.name.value = "";
    e.target.elements.age.value = "";
    e.target.elements.status.value = "";

}
///// delete user /////
function deleteUser(e) {
    Users.splice(e, 1)
    localStorage.setItem('myUser', JSON.stringify(Users))
    showInfo()
}

// //// edit user status ////

function editUser(e) {

    Users[e].user_status

    if (Users[e].user_status == "") {
        Users[e].user_status = "on"

        localStorage.setItem('myUser', JSON.stringify(Users))

        showInfo(e)

    } else if (Users[e].user_status == "on") {
        Users[e].user_status = ""

        localStorage.setItem('myUser', JSON.stringify(Users))

        showInfo()
    }

}






























