const generateHTML = require('./src/cardHtml');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

const fs = require('fs'); 
const inquirer = require('inquirer');

const profilecards = []; 


const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the Manager?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter the Manager name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "enter the Manager ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("enter the Manager ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter email.",
            validate: email => {
                valid = /^\@\w+([\.**(\.\w{2,3}-]?\w+)w+([\.-]?\w+))+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('enter an email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "enter office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('enter an office number')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(ManagerInput => {
        const  { name, id, email, officeNumber } = ManagerInput; 
        const Manager = new Manager (name, id, email, officeNumber);

        profilecards.push(Manager); 
        console.log(Manager); 
    })
};

const addEmployee = () => {

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "choose employee role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter an employee name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "enter the employee ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("enter the employee ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "enter the employee email.",
            validate: email => {
                valid = /^\\w+([\.(\.\w{2,-]?\w+w+([\.-]?\w+)*@)*3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "enter the employee github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("enter the employee github username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "enter the intern school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("enter the intern school")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name,school, AddEmployee, email, role, github, id   } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, email, id, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, email, id, school);

            console.log(employee);
        }

        profilecards.push(employee); 

        if (AddEmployee) {
            return addEmployee(profilecards); 
        } else {
            return profilecards;
        }
    })

};



const createFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;

        } else {
            console.log("Your team profile has been created")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(profilecards => {
    return cardHtml(profilecards);
  })
  .then(pageHTML => {
    return createFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });