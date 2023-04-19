function createmanager(manager){
    return `
    <div class="card">
    <div class="card-header bs-success">
        <div class="card-title">
            ${manager.getname()}
        </div>
        <ul class="list-group list-group-flush">
    <li class="list-group-item">id: ${manager.getid()}</li>
    <li class="list-group-item">email:${manager.getemail()}</li>
    <li class="list-group-item">officenumber: ${manager.getofficenumber()}</li>
  </ul>
    </div>
   </div> 
    `
}
function createengineer(engineer){
    return `
    <div class="card">
    <div class="card-header bs-danger">
        <div class="card-title">
            ${engineer.getname()}
        </div>
        <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
    </div>
   </div> 
    `
}
function createintern(intern){
    return `
    <div class="card">
    <div class="card-header bs-primary">
        <div class="card-title">
            ${intern.getname()}
        </div>
        <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
   </div> 
    `
}

    function createintern(manager){
        return `
        <div class="card">
        <div class="card-header bs-primary">
            <div class="card-title">
                ${intern.getname()}
            </div>
            <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                
                </div>
        </div>
       </div> 
        `
}

function insertcards(team){
    var cardarray=[];
cardarray.push(team.filter(emp =>emp.getrole()==="manager").map(manager =>createmanager(manager)))
cardarray.push(team.filter(emp =>emp.getrole()==="engineer").map(engineer =>createengineer(engineer)))
cardarray.push(team.filter(emp =>emp.getrole()==="intern").map(intern =>createintern(intern)))

    return cardarray.join("")
}
module.exports=function(team){
    
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.4/css/bulma.min.css" integrity="sha512-HqxHUkJM0SYcbvxUw5P60SzdOTy/QVwA1JJrvaXJv4q7lmbDZCmZaqz01UPOaQveoxfYRv1tHozWGPMcuTBuvQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>
<body>
<header>
<h1>my team</h1>
</header>
    <main class="container">

${insertcards(team)}

    </main>
</body>
</html>
    
    
    `
}