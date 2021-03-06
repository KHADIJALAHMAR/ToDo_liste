// DOM
//  pRoject
const Add_Project =document.getElementById('btnProject');

// DOM task
const Add_task = document.getElementById('btnTask');
//  get id From Url
const urlParams = new URLSearchParams(window.location.search);
    let Pid;
    if (urlParams.get("id") !== null) {
      Pid = urlParams.get("id");
    }


// generate id 
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

// event delet project


function show_Project() {
    let allProjects = JSON.parse(localStorage.getItem("projects"));
    allProjects.forEach((element) => {
        setInnerHTML(element.id,element.descreption, element.title);
    });
}

function setInnerHTML(id, descreption, title) {
    const divProjects = document.getElementById("projects");
    divProjects.innerHTML  += ` 
        <tr> 
        <td><a href="http://127.0.0.1:5503/index.html?id=${id}"> ${title}</a></td>
        <td>${descreption}</td>
        </tr>
    `
}

document.getElementById('deleteBtn').addEventListener('click', (e) => {

    e.preventDefault();
    deleteProject(Pid);
});
function deleteProject (id){

    let get_projects = JSON.parse(localStorage.getItem('projects'));
    let new_projects = get_projects.filter((project)=> project.id !== id);
    localStorage.setItem("projects", JSON.stringify(new_projects));
    console.log('hello');
    window.location.assign("http://127.0.0.1:5503/index.html")
}




// create class task 
class Task{
    constructor(status,name,auther){
        this.status = status;
        this.name = name ;
        this.auther = auther;
    }
}



Add_task.addEventListener('click',(e)=>
{
    e.preventDefault();
    const name = document.getElementById('name');
    const status = document.getElementById('status');
    const auther= document.getElementById('auther');


    let task = new Task(status.value, name.value, auther.value);
    let get_projects=JSON.parse(localStorage.getItem('projects'));
    let project = get_projects.filter((project)=> project.id === Pid);
    project[0].tasks.push(task);
    // console.log(project);
    console.log(get_projects);
    localStorage.setItem('projects',JSON.stringify(get_projects) );

})









