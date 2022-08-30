const employee = {
    name: "Sam",
    streetAddress: "Moon",
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]= value;
    return employee
}

function deleteFromEmployeeByKey(employee, name){
    const newEmployee2 = {...employee};
    delete newEmployee2.name
    return newEmployee2
}


function destructivelyDeleteFromEmployeeByKey(employee, name){
    delete employee.name;
    return employee
}