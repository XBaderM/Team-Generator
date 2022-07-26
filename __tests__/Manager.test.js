const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('instantiate object manager', () => {
    const manager = new Manager('', '', '', '');

    expect(manager).toEqual(expect.any(Manager));
});

test('return office number', () => {
    const manager = new Manager('911', 'rar', 'rar@googlemail.com', '100');

    expect(manager.getOfficeNumber()).toEqual('100');
});

test('return role as manager', () => {
    const manager = new Manager('911', 'rar', 'rar@googlemail.com', '100');

    expect(manager.getRole()).toEqual('Manager');
});