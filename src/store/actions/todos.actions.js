export const TODO_ADD = '[TODO] Add';
export const TODO_DELETE = '[TODO] Delete';
export const TODO_TOGGLE = '[TODO] Toggle';


export function todo_add(payload){
    return {
        type : TODO_ADD,
        payload
    }
}

export function todo_delete(payload){
    return{
        type : TODO_DELETE,
        payload
    }
}

export function todo_toggle(payload){
    return{
        type: TODO_TOGGLE,
        payload
    }
}