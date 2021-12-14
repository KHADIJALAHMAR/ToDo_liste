// DOM
//  pRoject
const Add_Project =document.getElementById('btnProject');

// DOM task
const Add_task = document.getElementById('btnTask');

function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }
//   console.log(uuidv4);


  
// create classe Project
 class Project{
    
    constructor(id,title,descreption){
        this.id =  id;
        this.title =  title;
        this.descreption =descreption;
        this.tasks= [];
    }

    
    addTask(task) {
        // this.tasks.push(task);
        console.log('Task ' + task);
        return this.tasks.push(task);
    }
}

const projects = [];
// event button Add Project
const descreption = document.getElementById('descreption');
const title = document.getElementById('title');

Add_Project.addEventListener('click',(e)=>

{
    e.preventDefault();
    let project = new Project( uuidv4() ,title.value,descreption.value);
    console.log(project);
    projects.push(project);
    localStorage.setItem('project' ,JSON.stringify(projects));
}


);

const createLIst = document.createElement('li');
// const get_project = localStorage.getItem(JSON.parse(project));
projects.forEach(function(project) {
     li.innerHTML = ` <ul>
         <li>${ref.value}</li>
         <li>${title.value}</li>
     </ul>`
});

// create class task 
class Task{
    constructor(status,name,auther){
        this.status = status;
        this.name = name ;
        this.auther = auther;
    }
}


// event button Add Task

Add_task.addEventListener('click',(e)=>
{
    e.preventDefault();
    const name = document.getElementById('name');
    const status = document.getElementById('status');
    const auther= document.getElementById('auther');

    let task = new Task(status.value, name.value, auther.value);
    // console.log('XD' + task.name);
    const tasks = localStorage.setItem('task', JSON.stringify(task));
    const all_projects = new Project();
    all_projects.addTask(task);
    console.log(all_projects.tasks);
})







