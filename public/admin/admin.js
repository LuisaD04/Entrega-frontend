let tbody = document.getElementById("tbody")



// fetch function
fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => {
        json.map(data => {
            console.log(data)
            tbody.append(td_fun(data));
        })
    })

// create td
function td_fun({ id, name, email, phone, state}){
    let td = document.createElement('tr');
    td.innerHTML = `
                        <td>${id}</td>
                        <td>${name}</td>
                        <td>${email}</td>
                        <td>${phone}</td>
                        <td>${state}</td>
                        <td><button class="btn btn-warning"><i class="bi bi-pencil"></i></button></td>
                        <td><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td>
    `;
    return td;
}