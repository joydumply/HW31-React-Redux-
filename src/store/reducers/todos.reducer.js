import {TODO_ADD, TODO_DELETE, TODO_TOGGLE} from '../actions/todos.actions';

const initialState = {
    todos:[
        {
            id: 'id' + (new Date()).getTime(),
            text: 'Buy Milk1',
            status : false
        }
    ]
}

export default function todosReducer(state = initialState, {type,payload}){
    switch (type){
        case TODO_ADD:
            return {...state, todos:[...state.todos, payload]};
        case TODO_DELETE:
            return  {...state, todos: payload};
        case TODO_TOGGLE:
            return {...state, todos: payload};
        default:
            return state;
    }
}