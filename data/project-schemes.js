const db = require('../db-config')

function getProjects(){
    return db("projects")
        .select()
}

function getResources(){
    return db("resources")
        .select()
}

function getTasks(){
    return db("tasks")
        .select()
}


function getProjectById(id){
    return db("projects")
        .where("projects.id", id)
        .select("projects.projectName", "projects.description", "projects.completed")
}

function getTasksByProject(id){
    return db("tasks")
        .join("projects", "tasks.projectID", "projects.id")
        .where("tasks.projectID", id)
        .select("projects.projectName", "projects.description", "tasks.taskName","tasks.description", "tasks.notes", "tasks.completed")
}

function getResourcesByProject(id){
    return db("projectResources")
        .join("projects", "projects.id", "projectResources.projectID")
        .join("resources", "resources.id", "projectResources.resourceID")
        .where("projectResources.projectID", id)
        .select("projects.projectName", "resources.resourceName")
}

function findProject(id){
    return db("projects")
        .where({id})
        .select()
}

function findTask(id){
    return db("tasks")
        .where({id})
        .select()
}

function findResource(id){
    return db("resources")
        .where({id})
        .select()
}

function addProject(e){
    return db("projects")
            .insert(e)
            .then(ids => {
            return findProject(ids[0]).first()
            })
}

function addResource(e){
    return db("resources")
            .insert(e)
            .then(ids => {
            return findResource(ids[0]).first()
            })
}

function addTask(e){
    return db("tasks")
            .insert(e)
            .then(ids => {
            return findTask(ids[0]).first()
            })
}


module.exports = {
    getProjects, getResources, getTasks, getProjectById, getTasksByProject, getResourcesByProject, addProject, addTask, addResource
}