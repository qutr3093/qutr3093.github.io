const json = {

            "companyName": "Tech Stars",
            "website": "www.techstars.site",
            "employees": [
                {
                    "name": "Sam",
                    "department":  "Tech",
                    "designation":  "Manager",
                    "salary":  40000,
                    "raiseEligible": true
                    
                },
                
                {
                    "name": "Mary",
                    "department": "Finance",
                    "designation": "Trainee",
                    "salary": 18500,
                    "raiseEligible": true
                },
                {
                    "name": "Bill",
                    "department": "HR",
                    "designation":"Executive",
                    "salary": 21200,
                    "raiseEligible": false
                },
        
                //Anna, Tech, Executive, 25600, false
                {
                    "name": "Anna",
                    "department": "Tech",
                    "designation":"Executive",
                    "salary": 25600,
                    "raiseEligible": false
                }
            ]
        };

function totalSalary(){
    let sum = 0;
    for (let i = 0; i < json.employees.salary.length;i++ ){
        var salary = totalSalary[i] + totalSalary[i];
    }
    //sum += element.salary;
}

