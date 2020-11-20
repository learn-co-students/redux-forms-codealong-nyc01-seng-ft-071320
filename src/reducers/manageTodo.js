export default function manageTodo(state = {
  todos: [],
}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('state changed')
      return {
        todos: [...state.todos, action.payload.todo]
      }
  
    default:
      return state;
  }
}
