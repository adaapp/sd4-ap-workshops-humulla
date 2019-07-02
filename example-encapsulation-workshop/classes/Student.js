class Student{
    constructor(name, yearGroup, form){
        this._name = name
        this._yearGroup = yearGroup
        this._form = form
    }

    getName(){
        return this._name
    }

    getYearGroup(){
        return this._yearGroup
    }

    getForm(){
        return this._form
    }

}
module.exports = Student