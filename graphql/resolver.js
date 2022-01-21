const Todo = require('../models/todo')

module.exports = {
  async getTodos() {
    try {
      return await Todo.findAll()
    } catch (error) {
      throw new Error('Fetched todos in not available')
    }
  },
  async createTodo({todo}) {
    try {
      return await Todo.create({
        title: todo.title,
        done: false
      })
    } catch (error) {
      throw new Error('Title is required!')
    }
  },
  async completeTodo({id}) {
    try {
      const todo = await Todo.findByPk(id)
      todo.done = true
      await todo.save()
      return todo
    } catch (error) {
      throw new Error('Id is required!')
    }
  },
  async deleteTodo({id}) {
    try {
      const todos = await Todo.findAll({
        where: {id}
      })
      await todos[0].destroy()
      return true
    } catch (error) {
      throw new Error('Id is required!')
      return false
    }
  }
}