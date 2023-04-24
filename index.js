const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const team = require("./util/generateHtml");
const inquirer = require("inquirer");

const newMember = ()=>{
    let empInfo = ""
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
        empInfo = ans;
        console.log(empInfo);
        if(ans.role === "Manager"){
            inquirer.prompt([
                {
                    type:"input",
                    message:"What is this manager's office number?",
                    name:"officeNum"
                }
            ]).then(num=>{
                const newManager = new Manager(empInfo.name,empInfo.id,empInfo.email,num.officeNum);
                console.log(newManager);
                newOrDone()
            })
        }
        if(ans.role === "Engineer"){
            inquirer.prompt([
                {
                    type:"input",
                    message:"What is this engineer's office GitHub?",
                    name:"github"
                }
            ]).then(git=>{
                const newEngineer = new Engineer(empInfo.name,empInfo.id,empInfo.email,git.github);
                console.log(newEngineer);
                newOrDone()
            })
        }
        if(ans.role === "Intern"){
            inquirer.prompt([
                {
                    type:"input",
                    message:"What is this intern's school?",
                    name:"school"
                }
            ]).then(sch=>{
                const newIntern = new Intern(empInfo.name,empInfo.id,empInfo.email,sch.school);
                console.log(newIntern);
                newOrDone()
            })
        }
    })
}

const newOrDone = ()=>{
    inquirer.prompt([
        {
            type:"list",
            message:"Add another team member or finish?",
            name:"answer",
            choices:["New Member","Finished"]
        },
    ]).then(ans=>{
        console.log(ans);
        if(ans.answer === "New Member"){
            newMember();
        }
        if(ans.answer === "Finished"){
            team();
        }
    })
}

newMember();