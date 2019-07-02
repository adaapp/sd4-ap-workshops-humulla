class Teacher{
    constructor(yearsOfService, name, initials, subjects){
        this._yearsOfService = yearsOfService
        this._name = name
        this._initials = initials
        this._subjects = subjects
    }

    getName(){
        return this._name
    }

    getInitials(){
        return this._initials
    }

    getSubjects(){
        return this.subjects
    }

    getYearsOfService(){
        return this.yearsOfService
    }

    setYearsOfServices(){
        return this.yearsOfService
    }

}
module.exports = Teacher