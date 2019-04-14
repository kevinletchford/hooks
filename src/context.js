import React from 'react'

const TodosContext = React.createContext({
    todos:[
        {id:1, text:"have ham", complete:false},
        {id:2, text:"have smashg", complete:false},
        {id:3, text:"have gggg", complete:true},
    ],

    currentTodo: {}
})

export default TodosContext;