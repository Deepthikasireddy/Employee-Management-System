
window.onload = function (){
	const form = document.getElementById("empForm");
	const table = document.getElementById("empTable");
	const apiUrl = "http://localhost:9090/api/employees";
	
	form.addEventListener("submit",async (e) => {
	    e.preventDefault();
	    const emp = {
	        name:document.getElementById("name").value,
	        email:document.getElementById("email").value,
	        department:document.getElementById("department").value,
	    };
	
	    await fetch(apiUrl, {
	        method: "POST",
	        headers: {"content-Type": "application/json"},
	        body: JSON.stringify(emp),
	    });
	
	    loadEmployees();
	    form.reset();
	});
	
	async function loadEmployees(){
	    const res = await fetch(apiUrl);
	    const data = await res.json();
	    table.innerHTML = "<tr><th>Name</th><th>Email</th><th>Dept</th><th>Action</th></tr>" ;
	    data.forEach((emp) => {
	        const row= table.insertRow();
	        row.innerHTML =     `
	        <td>${emp.name}</td>
	        <td>${emp.email}</td>
	        <td>${emp.department}</td>
	        <td><button onclick="deleteEmp(${emp.id})">Delete</button></td>
	        `;
	    });
	}
	
	window.deleteEmp = async function (id){
	    await fetch(`${apiUrl}/${id}`,{method: "DELETE"});
	    loadEmployees();
	}
	
	//Load on page start
	loadEmployees();
};
