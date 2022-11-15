import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {todo_add, todo_delete, todo_toggle} from '../store/actions/todos.actions';
import Form from './Form/Form';
import './Todo.css';

function Todo(){

    const todosInfo = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [todoName, setTodoName] = useState('');
    
    function addTodo(e){
        e.preventDefault();
        
        if(todoName != ''){
            const newObj ={
                id: 'id' + (new Date()).getTime(),
                text: todoName,
                status : false
            };
            dispatch(todo_add(newObj));
            setTodoName('');
        }
        
    }
    function changeTodoName(event){
        setTodoName(event.target.value);
    }

    function deleteTodo(e, id){
        e.stopPropagation() ;
        const copyTodos = todosInfo.todos.slice();
        let delIndex = -1;
        copyTodos.findIndex((elem, index) => {
            if(elem.id == id){
                delIndex = index;
            }
        });
        if(delIndex != -1){
            copyTodos.splice(delIndex,1);
        }
        dispatch(todo_delete(copyTodos));
    }

    function toggleTodoStatus(id){
        const copyTodos = todosInfo.todos.slice();
        copyTodos.findIndex((elem, index, array) => {
            if(elem.id === id){
                copyTodos[index].status = !copyTodos[index].status;
            }
        });
        
        dispatch(todo_toggle(copyTodos));
    }

    return (
        <div id="todo">
            <h1>
                What I need ToDo? 
            </h1>
            <ul>
                {
                    todosInfo.todos.map((todo) => <li className={todo.status ? 'done' : ''} onClick={() => toggleTodoStatus(todo.id)} key={todo.id}>{todo.text} <button type="button" onClick={(e) => deleteTodo(e, todo.id)}>Delete</button></li>)
                }
            </ul>
            <Form addTodo={addTodo} changeTodoName={changeTodoName} todoName={todoName} />
        </div>
    )
}
export default Todo;