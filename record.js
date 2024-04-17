// fill in javascript code here

document.addEventListener("DOMContentLoaded",function(){
    let form = document.querySelector("form")
    let tbody = document.querySelector("tbody")

    form.addEventListener("submit",function(event){
        event.preventDefault();
        let name = document.getElementById("name").value
        let employeeID = document.getElementById("employeeID").value
        let department = document.getElementById("department").value
        let experience = document.getElementById("exp").value
        let email = document.getElementById("email").value
        let mobile = document.getElementById("mbl").value

        let role;
        if (experience > 5){
            role = "Senior";
        }
        else if(experience>=2 && experience){
            role = "Junior";
        }
        else{
            role = "Fresher";
        }

        let row = document.createElement("tr");
        row.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobile}</td>
        <td>${role}</td>
        <td><button class="delete">Delete</button></td>
        `
        let deleteButton = row.querySelector(".delete");
        deleteButton.addEventListener("click",function(){
            row.remove()
        })
        
        tbody.append(row)
        form.reset();
    })
})