exports.yargs = {
    command: 'preferences <command>',
    describe: 'Preferences',

    builder: (yargs) => {
        yargs.command(require('./subcommands/get').yargs)
        yargs.command(require('./subcommands/set').yargs)
    }
}
