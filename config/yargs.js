const opts = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'description of the task to do'
    },
    status: {
        demand: true,
        alias: 's',
        desc: 'mark if is done or to not'
    }
}

const optsTask = {
    description: {
        demand: true,
        alias: 'd',
        desc: 'description of the task to do'
    }
}

const argv = require('yargs')
    .command('show', 'show all tasks')
    .command('task', 'add one task', opts)
    .command('update', 'update one task', opts)
    .command('delete', 'deleting one task', optsTask)
    .help()
    .argv;



module.exports = {
    argv
}