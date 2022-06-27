const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

test('instantiate employee', () => {
    const employee = new Employee('', '', '');

    expect(employee).toEqual(expect.any(Employee));
});

test( 'return employee name', () => {
    const employee = new Employee('786', 'bader', 'bader@googlemail.com');

    expect(employee.getName()).toEqual('bader');
});

test('returns employee id', () => {
    const employee = new Employee('786', 'bader', 'bader@googlemail.com');

    expect(employee.getId()).toEqual('786');
});

test('return employee email', () => {
    const employee = new Employee('786', 'bader', 'bader@googlemail.com');

    expect(employee.getEmail()).toEqual('bader@googlemail.com');
});

test('returns role as employee', () => {
    const employee = new Employee('786', 'bader', 'bader@googlemail.com');

    expect(employee.getRole()).toEqual('Employee');
});
