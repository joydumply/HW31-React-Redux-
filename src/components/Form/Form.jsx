function Form(props){
    
    return (
        <form onSubmit={props.addTodo}>
            <input type="text" value={props.todoName} onChange={props.changeTodoName} />
            <button type="submit">Add Task</button>
        </form>
    )
}
export default Form;