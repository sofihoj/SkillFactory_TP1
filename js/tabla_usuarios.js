const url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
.then((respuesta) => respuesta.json())
.then((data) => mostrarData(data))

const mostrarData = (data) => {
    let user = data;
    let table = ``
    user.forEach(({ id, name, email, phone, address, company }) => {
       table += `
           <tr class="usuario">
               <td class="id">${id}</td>
               <td class="info-name">${name}</td>
               <td class="info-email">${email}</td>
               <td class="info-tel">${phone}</td>
               <td class="info-city">${address.city}</td>
               <td class="info-company">${company.name}</td>
           </tr>
        `
        document.getElementById("tablaUsuarios").innerHTML = table        
    });
};
// const userDataTable = (data) => {
//     let user = data;
//     let body = ``;
//     user.forEach(({ id, name, email, address, phone, website }) => {
//       body += `
//         <tr class="user-row">
//           <td class="col">${id}</td>
//           <td class="col">${name}</td>
//           <td class="col">${email}</td>
//           <td class="col">${address.city}</td>
//           <td class="col">${phone}</td>
//           <td class="col">${website}</td>
//         </tr>`;
//     });
//     document.getElementById("usersTable").innerHTML = body;
//   };