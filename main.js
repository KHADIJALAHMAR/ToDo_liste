// DOM
//  pRoject
const Add_Project =document.getElementById('btnProject');
const ref = document.getElementById('ref');
const title = document.getElementById('title');


// DOM task
const Add_task = document.getElementById('btnTask');
const name = document.getElementById('name');
const status = document.getElementById('status');
const auther= document.getElementById('auther');







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

const projects = [];
// event button Add Project

Add_Project.addEventListener('click',()=>
{
    const project = new Project(ref.value, title.value);
    projects.push(project);
    localStorage.setItem('project' ,JSON.stringify(projects));
}


)

// create class task 
class Task{
    constructor(status,name,auther){
    this.status = status;
    this.name = name ;
    this.auther = auther;
    }

}


// event button Add Task
// addTask.addEventListener('click',()=>
// {
//     const task = new Task(status.value)
// })
