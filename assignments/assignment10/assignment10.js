// Q1
var resources = {
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raise" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raise" : false,
        }
    ]
}
console.log (resources.employees)

// Q2
var company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : [
        {
            "name" : "Sam",
            "department" : "Tech",
            "designation" : "Manager",
            "salary" : 40000,
            "raise" : true,
        },
        {
            "name" : "Mary",
            "department" : "Finance",
            "designation" : "Trainee",
            "salary" : 18500,
            "raise" : true,
        },
        {
            "name" : "Bill",
            "department" : "HR",
            "designation" : "Executive",
            "salary" : 21200,
            "raise" : false,
        },
    ]
}
console.log(company)

// Q3
let newEmployee = 
    {
        "name" : "Anna",
        "department" : "Tech",
        "designation" : "Executive",
        "salary" : 25600,
        "raise" : false,
    }

company["employees"].push(newEmployee)

console.log(company.employees.length)
console.log(company.employees)
console.log(company.employees[3])

// Q4
let total = 0
for (let i = 0; i < company.employees.length; i++) {
    total += company.employees[i].salary
}
console.log(total)

// Q5
for (let j = 0; j < company.employees.length; j++) {
    if (company.employees[j].raise === true) {
        let increaseSalary = company.employees[j].salary * 1.1
        company.employees[j].salary = increaseSalary
        company.employees[j].raise = false
    }  
}
console.log(company.employees)

// Q6
for (let k = 0; k < company.employees.length; k++) {
    if (company.employees[k].name === "Anna") {
        company.employees[k].wfh = true
    } else if (company.employees[k].name === "Sam") {
        company.employees[k].wfh = true
    } else {
        company.employees[k].wfh = false
    }
}
console.log(company.employees)