// const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const allEmployees = [];

const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")//Creates a folder called output
const outputPath = path.join(OUTPUT_DIR, "team.html"); // creates a file called Team.html inside of output

const render = require("./lib/htmlRenderer");

function newEmployeeSurvey (){
    inquirer
        .prompt([
        {   
            type: "list",
            message: "What is their title?",
            choices: ["Engineer", "Intern", "Manager", "All Done!"], 
            name: "role"
            },
        {   
            type: "input",
            message: "What is the Employee's Name?",
            name: "Name"
        },
        {   
            type: "input",
            message: "What is thier Employee ID?",
            name: "Id"
        },
        {   
            type: "input",
            message: "What is their email?",
            name: "Email"
        }
        ])

            .then (function(response){
                console.log(response);
            switch(response.role){
                case "Engineer":
                inquirer
                .prompt([ 
                    {
                        type: "input",
                        message: "What is their GitHub Username?",
                        name: "gitHubUsername" 
                    },
                ])
                .then (function(engineerResponse){
                    let newEngineer = new Engineer(response.Name, response.Id, response.Email, engineerResponse.gitHubUsername);
                    console.log(newEngineer);
                    allEmployees.push(newEngineer);
                    console.log(allEmployees);
                    newEmployeeSurvey();
                })
                break;

                case "Manager" : 
                inquirer
                .prompt([ 
                    {
                        type: "input",
                        message: "What is their office number?",
                        name: "officeNumber" 
                    }
                ]) 
                .then (function(managerResponse){
                    let newManager = new Manager (response.Name, response.Id, response.Email, managerResponse.officeNumber);
                    console.log(newManager);
                    allEmployees.push(newManager);
                    console.log(allEmployees);
                    newEmployeeSurvey();
                })
                break;

                case "Intern": 
                inquirer
                .prompt([ 
                    {
                        type: "input",
                        message: "What School Do you attend?",
                        name: "school" 
                    }
                ]) 
                .then (function(internResponse){
                    let newIntern = new Intern (response.Name, response.Id, response.Email, internResponse.school);
                    console.log(newIntern);
                    allEmployees.push(newIntern);
                    console.log(allEmployees);
                    newEmployeeSurvey();
                })
                break;
            

            case "All Done!":
                    
                    render(allEmployees);  
                    return "done!";
                };
            });
        };    
        

newEmployeeSurvey();
// fs the output directory, write the Team file to the the directory (create function asking if this directory exists) then render the team members to that path

