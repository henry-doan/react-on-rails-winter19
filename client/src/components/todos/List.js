import React from 'react';
import Todo from './Todo';

const List = ({ todos, deleteTodo, update }) => (
  <>  
  { todos.map( todo => 
    <Todo
      key={todo.id}
      {...todo}
      deleteTodo={deleteTodo}
      update={update}
    />
  )}
  </>
)

export default List;