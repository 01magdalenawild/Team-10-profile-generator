const Employee=require("./Employee")
class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github=github
    }
    getgithub(){
        return this.github
    }
    getrole(){

        return "engineer"
    }
}
module.exports=Engineer