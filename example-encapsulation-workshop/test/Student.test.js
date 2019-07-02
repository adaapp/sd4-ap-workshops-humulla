const chai = require('chai')
const expect = chai.expect;

const Student = require('../classes/Student.js');

describe('Student', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myStudents = new Student()
        expect(myStudents).to.be.an.instanceOf(Student);
    })
})