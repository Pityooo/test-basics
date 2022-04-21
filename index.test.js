const search = require('./index');

const dbMock = ["Olivia2", "Liam2", "Emma2", "Noah2", "Oliver2", "Ava2", "Elijah2", "Sophia2", "Lucas2", "Charlotte2", "Levi2", "Isabella2", "Mason2", "Mia2", "Asher2", "Luna2", "James2", "Harper2", "Ethan2", "Gianna2", "Mateo2", "Evelyn2", "Leo2", "Aria2", "Jack2", "Mila2", "Logan2", "Layla2", "Grayson2", "Avery2", "Jackson2", "Camila2", "Henry2", "Lily2", "Wyatt2", "Sofia2", "Carter2"];

// it (name, callBack)
it('This is my first test',() => {
    expect('Hello').toEqual('Hello');
    search(dbMock, 'Mia2')
});

it('Real search with empty result',() => {
    expect(search(dbMock, 'ZZZ')).toEqual([]);
});

it('Real search with "Li" keyword expecter non empty array as result',() => {
    expect(search(dbMock, 'Li')).toEqual(["Liam2", "Lily2"]);
});