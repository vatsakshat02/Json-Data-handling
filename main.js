let Data = [];
const maxsal = document.getElementById('Max_sal')
const result = document.getElementById('result')
const exp = document.getElementById('experience')
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

exp.addEventListener('click',()=>{
    fetch('data.json')
    .then((res)=>res.json())
    .then((data)=>{
        let bonus = '';
        let output = '';
        Data = data;
        Data.sort(function(a,b){
            return b.salary-a.salary;
        })
        
        Data.forEach(function(user){
            bonus = user.salary * user.experience * 0.10;
            if(user.experience>3){
                output += `
                <ul>
                <li>id: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Experience: ${user.experience}</li>
                <li>bonus: ${bonus}</li>
                </ul>
                `
            }
        })
        result.innerHTML = output;

    })
})

