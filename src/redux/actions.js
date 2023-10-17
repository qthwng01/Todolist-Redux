export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  }
}

export const searchTodo = (text) => {
  return {
    type: 'filters/searchTodo',
    payload: text,
  }
}

export const statusFilter = (status) => {
  return {
    type: 'filters/statusFilter',
    payload: status,
  }
}

export const priorityFilter = (priorities) => {
  return {
    type: 'filters/priorityFilter',
    payload: priorities,
  }
}
