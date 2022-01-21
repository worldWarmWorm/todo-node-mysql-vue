The todo app created with node.js, express.js, MySQL, vue.js.

DB accesses:
login = root
pass = Roottt1!

Most usefull commands for mysql console:

mysql -u root -p

show databases;

CREATE SCHEMA node_todo DEFAULT CHARACTER SET utf8;

SHOW COLUMNS FROM Todos FROM node_todo;

select * from node_todo.Todos;

mysqldump -u root -p node_todo > node_todo_dump.sql;

mysqldump node_todo > node_todo_dump.sql;