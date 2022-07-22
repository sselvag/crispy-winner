const Intern = require("../lib/intern")

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile Generator</title>
</head>
<body>
    <header class="p-5 text-center bg-danger text-white">
        <h1>My Team</h1>
    </header>
    
    <div class="d-flex justify-content-around" id="teamcards">
        {/* MANAGER */}
        <div class="card">
            <div class="bg-primary text-white">
                <h5 class="card-title">${manager.name}</h5>
                <h6 class="card-subtitle">Manager</h6>
            </div>
            <div class="card-body">
                <p>ID:${manager.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${manager.email}</a></p>
                <p>Office Number:${manager.officeNumber}</p>
            </div>
        </div>
        {/* ENGINEER */}
        <div class="card">
            <div class="bg-primary text-white">
                <h5 class="card-title">${engineer.name}</h5>
                <h6 class="card-subtitle">Engineer</h6>
            </div>
            <div class="card-body">
                <p>ID:${engineer.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${engineer.email}</a></p>
                <p>Github:<a href="https://github.com/${engineer.gitHub}">${engineer.gitHub}</a></p>
            </div>
        </div>
        {/* INTERN */}
        <div class="card">
            <div class="bg-primary text-white">
                <h5 class="card-title">${intern.name}</h5>
                <h6 class="card-subtitle">Intern</h6>
            </div>
            <div class="card-body">
                <p>ID:${intern.id}</p>
                <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p>School:${intern.school}</p>
            </div>
        </div>
    </div> 
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
</body>
</html>