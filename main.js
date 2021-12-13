// DOM
// Button add pRoject
const Add_Project =document.getElementById('btnProject');


























// create classe Project
 class Project{
    constructor(ref,title){
        this.ref =  ref;
        this.title =  title;
        this.tasks= [];
    }

    addTask(task) {
        this.tasks.push(task);
        return this.tasks.push(task);
    }
}

// event button Add Project

Add_Project.addEventListener('click',()=>
{
    const project = new Project(ref.value, title.value);
    
}


)













// create class task 
class Task{
    constructor(status,name){
    this.status = status;
    this.name = name ;
    }

}