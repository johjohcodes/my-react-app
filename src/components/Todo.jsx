function Todo({task, description, togglePopUp}) {
    function handleClick(){
        console.log("todo item clicked");
    }
    // console.log(props.task);
    
    return(
        <div className="todo-item">
            <h2>
            {task} {description}</h2>
            <button onClick={() => togglePopUp()
                
                
            }>delete</button>
            
            </div>
    )
}

export default Todo;

