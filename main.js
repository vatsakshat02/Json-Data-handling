let Data = [];
const maxsal = document.getElementById('Max_sal')
const result = document.getElementById('result')
maxsal.addEventListener('click',()=>{
    fetch('data.json')
.then((res)=>res.json())
.then((data)=>{
    let output = "";
    Data = data;
    Data.sort(function(a,b){
        return b.salary - a.salary;
    })
    data.forEach(function(user) {
        output += `
        <ul>
        <li> ID: ${user.id}</li>
        <li> Name: ${user.name}</li>
        <li> Salary: ${user.salary}</li>
        </ul>
        `
    });
    result.innerHTML = output;
})

})

