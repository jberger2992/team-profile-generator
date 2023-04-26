const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateTeam = require("./util/generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];


const newOrDone = ()=>{
    inquirer.prompt([
        {
            type:"list",
            message:"Add another team member or finish?",
            name:"answer",
            choices:["New Engineer","New Intern","Finished"]
        },
    ]).then(ans=>{
        console.log(ans);
        if(ans.answer === "New Engineer"){
            newEngineer();
        }
        if(ans.answer === "New Intern"){
            newIntern();
        }
        if(ans.answer === "Finished"){
            const htmlString = generateTeam(teamMembers);
            fs.writeFile('output/index.html', htmlString, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
    );
}
    })
}

const newManager = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team Manager's name?",
            name:"name"
        },
        {
            type:"input",
            message:"What is the Manager's ID?",
            name:"id"
        },
        {
            type:"input",
            message:"What is the Manager's email address?",
            name:"email"
        },
        {
            type:"input",
            message:"What is this Manager's office number?",
            name:"officeNum"
        }
    ]).then(ans=>{
        const newManager = new Manager(ans.name,ans.id,ans.email,ans.officeNum);
        console.log(newManager);
        teamMembers.push(newManager);
        newOrDone()
    })
}

const newEngineer = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team Engineer's name?",
            name:"name"
        },
        {
            type:"input",
            message:"What is the Engineer's ID?",
            name:"id"
        },
        {
            type:"input",
            message:"What is the Engineer's email address?",
            name:"email"
        },
        {
            type:"input",
            message:"What is this Engineer's GitHub?",
            name:"github"
        }
    ]).then(ans=>{
        const newEngineer = new Engineer(ans.name,ans.id,ans.email,ans.github);
        console.log(newEngineer);
        teamMembers.push(newEngineer);
        newOrDone()
    })
}

const newIntern = ()=>{
    inquirer.prompt([
        {
            type:"input",
            message:"What is the team Intern's name?",
            name:"name"
        },
        {
            type:"input",
            message:"What is the Intern's ID?",
            name:"id"
        },
        {
            type:"input",
            message:"What is the Intern's email address?",
            name:"email"
        },
        {
            type:"input",
            message:"What is this Intern's school?",
            name:"school"
        }
    ]).then(ans=>{
        const newIntern = new Intern(ans.name,ans.id,ans.email,ans.school);
        console.log(newIntern);
        teamMembers.push(newIntern);
        newOrDone()
    })
}

newManager();