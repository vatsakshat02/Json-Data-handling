let Data = [];
const maxsal = document.getElementById('Max_sal')
const result = document.getElementById('result')
const exp = document.getElementById('experience')
const sal = document.getElementById('Totsal')
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
        let bonus = 0;
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
                
                <li>Name: ${user.name}</li>
                <li>Department: ${user.department}</li>
                <li>Experience: ${user.experience}</li>
                <li>bonus: ${bonus}</li>
                </ul>
                `
            }
        })
        result.innerHTML = output;

    })
})

sal.addEventListener('click',()=>{
        fetch('data.json')
        .then((res)=>res.json())
        .then((data)=>{
        let expenditure = 0;
        let output = '';
        Data = data;
        Data.sort(function(a,b){
            return b.salary-a.salary;
        })
        
        Data.forEach(function(user){
            if(user.experience>3){
                expenditure += user.salary;
                output = `
                <ul>
                <li>Total Expenditure: ${expenditure}</li>
                </ul>
                `
            }
        })
        result.innerHTML = output;
})

})