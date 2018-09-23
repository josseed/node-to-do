const fs = require('fs');
var lodash = require('lodash');

let listToDo = [];


const saveDB = () => {

    let data = JSON.stringify(listToDo);
    fs.writeFile("./db/data.json", data, 'utf8', function(err) {
        if (err) throw new Error('file dont save', err);

        console.log("The file was saved!");
    });

};

const loadDB = () => {
    try {
        listToDo = require('../db/data.json');
    } catch (error) {
        listToDo = [];
    }


    // console.log(listToDo);

}

const getList = () => {
    loadDB();
    return listToDo;
}

const create = (description) => {


    loadDB();
    let toDo = {
        description,
        done: false
    };

    listToDo.push(toDo);
    saveDB();
    return toDo;
}


const deleting = (description) => {

    loadDB();
    let index = listToDo.findIndex(task => task.description === description);

    if (index >= 0) {
        listToDo.splice(index, 1);
        saveDB();
        return true;
    } else {
        return false;
    }


}

const update = (description, status = true) => {

    loadDB();
    /*
    let temp = lodash.filter(listToDo, row => row.description === description);

    if (temp != null) {
        temp.status = status;
        listToDo.push(temp);
    }
    */
    /*
     for (let task of listToDo) {
         if (task.description === description) task.status == status;
     }
     */
    let index = listToDo.findIndex(task => task.description === description);

    if (index >= 0) {
        listToDo[index].done = status;
        saveDB();
        return true;
    } else {
        return false;
    }


}


module.exports = {
    create,
    update,
    deleting,
    getList
}