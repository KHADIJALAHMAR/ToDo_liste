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
    
    constructor(title,descreption){
        this.id =  uuidv4();
        this.title =  title;
        this.descreption =descreption;
        this.tasks= [];
    }

    addTask(task) {
        this.tasks.push(task);
        // console.log('Task ' + task);
        return this.tasks.push(task);
    }
}

if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify([]));
}
show_Project();
// event button Add Project
Add_Project.addEventListener('click',(e)=>

{
    e.preventDefault();
    let descreption = document.getElementById('descreption');
    let title = document.getElementById('title');
    let projects = JSON.parse(localStorage.getItem('projects'));
    let project = new Project(title.value,descreption.value);
    console.log(project);
    projects.push(project);
    show_Project();
    localStorage.setItem('projects' ,JSON.stringify(projects));
}


);


function show_Project() {
    let allProjects = JSON.parse(localStorage.getItem("projects"));
    allProjects.forEach((element) => {
        setInnerHTML(element.id, element.descreption, element.title);
    });
}

function setInnerHTML( descreption, title) {
    const divProjects = document.getElementById("projects");
    divProjects.innerHTML  += ` 
        <tr> 
        <td>${descreption}</td>
        <td>${title}</td>
        </tr>
    `
}

// function showProjectItems() {
//     const selectInput = document.getElementById('projectSelect');
//     selectInput.innerHTML = "";
//     localStorage.setItem('project' ,JSON.stringify(projects)).forEach(p => {
//         selectInput.innerHTML += `
//             <option value="${p.id}">${p.title}</option>
//         `;
//     })
// }


// const createLIst = document.createElement('ul');
// const get_project = localStorage.getItem(JSON.parse(project));


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
    const idProject = document.getElementById("idProject")

    let task = new Task(status.value, name.value, auther.value);
    // console.log('XD' + task.name);
    const tasks = localStorage.setItem('task', JSON.stringify(task));
    // const all_projects = new Project();
    // all_projects.addTask(task);
    // console.log(all_projects.tasks);
})







