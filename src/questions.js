module.exports = {
    ManagerQuestions: [
        {
            name: "name",
            type: "input",
            message: "What is your name?",

        },
        {
            name: "id",
            type: "input",
            message: "input your id",
        },
        {
            name: "email",
            type: "input",
            message: "what is your email?",
        },
        {
            name: "officeNumber",
            type: "input",
            message: "what is your office number?",
        },
    ],

    EngineerQuestions: [
        {
            name: "name",
            type: "input",
            message: "Engineer name?",

        },
        {
            name: "id",
            type: "input",
            message: "input your id",
        },
        {
            name: "email",
            type: "input",
            message: "what is your email?",
        },

        {
            name: "github",
            type: "input",
            message: " Engineer github: ",
        },
    ],

    InternQuestions: [
        {
            name: "name",
            type: "input",
            message: "Intern name: ",
        },
        {
            name: "id",
            type: "input",
            message: "Intern id: ",
        },
        {
            name: "email",
            type: "input",
            message: "Intern email: ",
        },
        {
            name: "school",
            type: "input",
            message: "Enter intern school: ",
        },
    ],
    EmployeeQuestions: [
        {
            name: "newEmp",
            type: "confirm",
            message: "Would you like to add another employee?: ",
        },
        {
            name: "type",
            type: "list",
            when: answer => answer.newEmp === true,
            choices: ["Engineer", "Intern"],
            message: "Select: ",
        },







    ]

}
