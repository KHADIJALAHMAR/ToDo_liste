// DOM
























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
















// create class task 
class Task{
    constructor(status,name){
    this.status = status;
    this.name = name ;
    }

}