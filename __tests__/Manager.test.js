const { TestScheduler } = require('jest');
const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('', '', '', '');

    expect(manager).toEqual(expect.any(Manager));
});

test('getOfficeNumber returns office number', () => {
    const manager = new Manager('911', 'rar', 'rar@googlemail.com', '100');

    expect(manager.getOfficeNumber()).toEqual('100');
});

test('getRole returns role as manager', () => {
    const manager = new Manager('911', 'rar', 'rar@googlemail.com', '100');

    expect(manager.getRole()).toEqual('Manager');
});