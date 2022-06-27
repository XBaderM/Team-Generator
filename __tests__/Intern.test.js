const { TestScheduler } = require('jest');
const Intern = require('../lib/Intern.js');

test('instantiate object intern', () => {
    const intern = new Intern('', '', '', '');

    expect(intern).toEqual(expect.any(Intern));
});

test('getSchool returns school', () => {
    const intern = new Intern('999', 'fig', 'fig@googlemail.com', 'moseley');

    expect(intern.getSchool()).toEqual('moseley');
});

test('getRole returns role as intern', () => {
    const intern = new Intern('999', 'fig', 'fig@googlemail.com', 'moseley');

    expect(intern.getRole()).toEqual('Intern');
});