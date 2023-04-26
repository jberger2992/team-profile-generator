const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateTeam = require("./util/generateHtml");
const inquirer = require("inquirer");
const fs = require("fs");

const teamMembers = [];

// const newMember = ()=>{
//     let empInfo = ""
//     inquirer.prompt([
//         {
//             type:"input",
//             message:"What is the team member's name?",
//             name:"name"
//         },
//         {
//             type:"input",
//             message:"What is the team member's ID?",
//             name:"id"
//         },
//         {
//             type:"input",
//             message:"What is the team member's email address?",
//             name:"email"
//         },
//         {
//             type:"list",
//             message:"What is the team member's role?",
//             name:"role",
//             choices:["Manager","Engineer","Intern"]
//         },
//     ]).then(ans=>{
//         console.log(ans);
//         empInfo = ans;
//         console.log(empInfo);
//         if(ans.role === "Manager"){
//             inquirer.prompt([
//                 {
//                     type:"input",
//                     message:"What is this manager's office number?",
//                     name:"officeNum"
//                 }
//             ]).then(num=>{
//                 const newManager = new Manager(empInfo.name,empInfo.id,empInfo.email,num.officeNum);
//                 console.log(newManager);
//                 teamMembers.push(newManager);
//                 newOrDone()
//             })
//         }
//         if(ans.role === "Engineer"){
//             inquirer.prompt([
//                 {
//                     type:"input",
//                     message:"What is this engineer's office GitHub?",
//                     name:"github"
//                 }
//             ]).then(git=>{
//                 const newEngineer = new Engineer(empInfo.name,empInfo.id,empInfo.email,git.github);
//                 console.log(newEngineer);
//                 teamMembers.push(newEngineer);
//                 newOrDone()
//             })
//         }
//         if(ans.role === "Intern"){
//             inquirer.prompt([
//                 {
//                     type:"input",
//                     message:"What is this intern's school?",
//                     name:"school"
//                 }
//             ]).then(sch=>{
//                 const newIntern = new Intern(empInfo.name,empInfo.id,empInfo.email,sch.school);
//                 console.log(newIntern);
//                 teamMembers.push(newIntern);
//                 newOrDone()
//             })
//         }
//     })
// }

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
            newMember();
        }
        if(ans.answer === "New Intern"){
            newMember();
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
            message:"What is this Engineer's office GitHub?",
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

newMember();