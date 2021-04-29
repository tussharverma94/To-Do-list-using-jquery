$(function () {
    let newtodobox = $('#newtodo')
    let addtodobtn = $('#addtodo')
    let todolist = $('#todolist')

    addtodobtn.click(function () {
        let newtodo = newtodobox.val()
        
        $.post(
            "/todos/", // it require the path within the website
            {task : newtodo}, // its is the object that is needed to send
            function (data){ //function to provide the log
                todolist.empty();
                for(todo of data){
                    todolist.append("<li>" + todo.task + "</li>")
                    // todolist.append("WOW")
                }
            }
        )
        
    })
})
