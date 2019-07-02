const chai = require('chai')
const expect = chai.expect;

const Teacher = require('../classes/Teacher');

describe('teacher', () => {
    it('should allow an object to be instantiated from the class', () => {
        let myTeachers = new Teacher()
        expect(myTeachers).to.be.an.instanceOf(Teacher);
    })
})