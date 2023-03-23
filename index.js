const inquirer = require("inquirer")
const { ManagerQuestions, EmployeeQuestions, EngineerQuestions, InternQuestions } = require("./src/questions")
const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const team = []
const generator=require("./src/generator")
const path=require("path")
const fs=require("fs")
const questions = async () => {
    inquirer.prompt(ManagerQuestions).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        team.push(manager)
        addEmp()
    })
}
const addEmp = () => {
    inquirer.prompt(EmployeeQuestions).then(answers => {
        if (answers.newEmp) {
            if (answers.type === "Engineer") {
                inquirer.prompt(EngineerQuestions)
                    .then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        team.push(engineer)
                        addEmp()
                    })
            }
            else if (answers.type === "Intern") {
                inquirer.prompt(InternQuestions)
                    .then(answers => {
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                        team.push(intern) 
                         addEmp()
                    })
            }
        } else {
            fs.writeFileSync(path.join(__dirname,"/dist/","index.html"),generator(team)) 
        }
    })
}
questions()
