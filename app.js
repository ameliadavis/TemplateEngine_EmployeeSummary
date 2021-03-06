const Employee = require("./lib/Employee");
// const Manager = require("./lib/Manager");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
// const inquirer = require("inquirer");
// const path = require("path");
// const fs = require("fs");
// ​
// const OUTPUT_DIR = path.resolve(__dirname, "output")
// const outputPath = path.join(OUTPUT_DIR, "team.html");
// ​
// const render = require("./lib/htmlRenderer");
// ​
​
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)


//  inquirer
//     .prompt([
//     {   
//         type: "input",
//         message: "What is the Employee's Name?",
//         name: "Name"
//      },
//      {   
//         type: "input",
//         message: "What is thier Employee ID?",
//         name: "Id"
//      },
//      {   
//         type: "input",
//         message: "What is their email?",
//         name: "Email"
//      },
//      {   
//         type: "input",
//         message: "What is their title?",
//         name: "role"
//      }, // input if of questions based on how they answer
//     ])

//         .then (function(response){
//          switch(response.role){
//             case 0 : roll =  "Engineer"
//             inquirer
//             .prompt([ 
//                 {
//                     type: "input",
//                     message: "What is their GitHub Username?",
//                     name: "gitHubUsername" 
//                 },
//             ])
//             // app.get("/", (req, res) => {
//             //     res.sendFile(path.join(__dirname, "index.html"))
//             // });

//             case 1 : roll = "Manager"
//             inquirer
//             .prompt([ 
//                 {
//                     type: "input",
//                     message: "What is their office number?",
//                     name: "officeNumber" 
//                 }
//             ]) 
//             // app.get("/", (req, res) => {
//             //     res.sendFile(path.join(__dirname, "index.html"))
//             // });

//             case 2: roll = "Intern"
//             inquirer
//             .prompt([ 
//                 {
//                     type: "input",
//                     message: "What School Do you attend?",
//                     name: "school" 
//                 }
//             ]) 
//               // app.get("/", (req, res) => {
//             //     res.sendFile(path.join(__dirname, "index.html"))
//             // });

//            }
//          });
        



​

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// render();
​
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
​
// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.
​
// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
