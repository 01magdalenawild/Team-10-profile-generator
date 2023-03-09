const Employee=require("../lib/Employee.js") 
describe("emplyeetest",()=>{
    test ("can set employee values",() =>{
        const employee=new Employee ("Maggie","123","Maggie@email.com")
        expect(employee.name).toBe("Maggie")
        expect(employee.id).toBe("123")
        expect(employee.email).toBe("Maggie@email.com")
    })
    test ("can get employee values",() =>{
        const employee=new Employee ("Maggie","123","Maggie@email.com")
        expect(employee.getname()).toBe("Maggie")
        expect(employee.getid()).toBe("123")
        expect(employee.getemail()).toBe("Maggie@email.com")
    })
})