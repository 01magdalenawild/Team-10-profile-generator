const inquirer = require("inquirer")
const { managerQuestions } =require("./src/questions")
const questions =  async () => {
   await inquirer.prompt(managerQuestions).then(console.log("sucess"))
}