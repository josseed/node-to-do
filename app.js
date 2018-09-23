 //const argv = require('yargs').argv;
 const { argv } = require('./config/yargs');

 const { create, getList, deleting, update } = require('./to-do/to-do');
 console.log(argv);

 let comando = argv._[0];



 switch (comando) {
     case 'task':
         console.log('add one task');
         let tarea = create(argv.description);
         console.log(tarea);
         break;
     case 'show':
         console.log('show all tasks');
         let list = getList();
         for (let task of list) {
             console.log(task.description);
             console.log('status:', task.done);

         }
         break;

     case 'update':
         console.log('update one task');
         let logUpdate = update(argv.description, argv.status);
         console.log(logUpdate);
         break;

     case 'delete':
         console.log('deleting one task');
         let logdelete = deleting(argv.description);
         console.log(logdelete);
         break;

 }