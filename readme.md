The todo app created with node.js, express.js, MySQL, vue.js.

Most usefull commands for mysql console:

mysql -u root -p

show databases;

CREATE SCHEMA node_todo DEFAULT CHARACTER SET utf8;

SHOW COLUMNS FROM Todos FROM node_todo;

select * from node_todo.Todos;

mysqldump -u root -p node_todo > node_todo_dump.sql;