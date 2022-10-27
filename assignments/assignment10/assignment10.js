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
                "raise?" : true,
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
    console.log (resources.employees[2].name)
    
    // Q2
    var resources = {
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
    
    console.log(resources.companyName)
    console.log(resources.website)
    
    // Q3
    
    let newEmployee = 
        {
            "name" : "Anna",
            "department" : "Tech",
            "designation" : "Executive",
            "salary" : 25600,
            "raise?" : false,
        }
    
    resources["employees"].push (newEmployee)
    
    console.log(resources.employees.length)
    console.log(resources.employees[3].name)
    
    // Q4 
    
    let total = 0
    for (let i = 0; i < resources.employees.length; i++) { //this iterates through employee salaries, how can you use this to find the total salary for #4?
        // console.log(resources["employees"][i].salary); 
        // console.log()
        total += resources.employees[i].salary
      }
    
    console.log(total)

    // Q5
    let newSalary = 0;
    function raiseSalary(){
        for (let j = 0; j < resources.employees.raise.length; j++){
        if (resources.employees.raise?[j] === "true" ){
            resources.employees.raise *= 0.1
        }
        else{

        }

    }

