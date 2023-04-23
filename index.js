const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = require("./util/generateHtml");
const inquirer = require("inquirer");

const init = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team member's name?",
            name:"name"
        },
        {
            type:"input",
            message:"What is the team member's ID?",
            name:"id"
        },
        {
            type:"input",
            message:"What is the team member's email address?",
            name:"email"
        },
        {
            type:"list",
            message:"What is the team member's role?",
            name:"role",
            choices:["Manager","Engineer","Intern"]
        },
    ]).then(ans=>{
        console.log(ans);
    //     if(ans.role === "Manager"){

    //     }
    //     if(ans.role === "Engineer"){

    //     }
    //     if(ans.role === "Intern"){

    //     }
    })
}

init();