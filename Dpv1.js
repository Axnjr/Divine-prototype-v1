class ComplexJS{
    constructor(...variables){
        this.variables =  variables || null
        this.strings = []
        this.integers = []
    }
    Vars(...variables){
        this.variables = this.variables.concat(variables)
        for(let i in variables){
            let n = Object.values(variables[i])
            if(typeof(n[0]) === "string"){
                this.strings.push(variables[i])
            }
            if(typeof(n[0]) === "number"){
                this.integers.push(variables[i])
            }
        }
    }
    IntegerVars(){ return this.integers }
    StringVars(){ return this.strings }

}
class Integeres extends Divine{
    constructor(integers){
        super();
        console.log(integers)
    }
}
class Strings extends Divine{
    constructor(strings){
        super();
        console.log(strings)
    }
}
