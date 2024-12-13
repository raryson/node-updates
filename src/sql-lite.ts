import { DatabaseSync } from 'node:sqlite';
const database = new DatabaseSync(':memory:');

database.exec(`
  CREATE TABLE participantes(
    key INTEGER PRIMARY KEY,
    nome TEXT,
    idade INTEGER
  ) STRICT
`);

const insert = database.prepare('INSERT INTO participantes (nome, idade) VALUES (?, ?)');

insert.run('Raryson Pereira Rost', 28);
insert.run('José Otavio P Mactetas', 103);
insert.run('Marcela Dias Rost', 26);

const query = database.prepare('SELECT * FROM participantes ORDER BY idade');

console.log(query.all());
