const { TestScheduler } = require('jest');
const Engineer = require('../lib/Engineer.js');

test('instansiate engineer', () => {
    const engineer = new Engineer('', '', '', '');

    expect(engineer).toEqual(expect.any(Engineer));
});

test('return github', () => {
    const engineer = new Engineer('777', 'shaz', 'shaz@googlemail.com', 'shaz55');

    expect(engineer.getGithub()).toEqual('shaz55');
});

test('getRole returns role as engineer', () => {
    const engineer = new Engineer('777', 'shaz', 'shaz@googlemail.com', 'shaz55');

    expect(engineer.getRole()).toEqual('Engineer');
});