exports.yargs = {
    command: 'preferences <command>',
    describe: 'Preferences',
    aliases: ['prefs'],

    builder: (yargs) => {
        yargs.command(require('./subcommands/get').yargs)
        yargs.command(require('./subcommands/set').yargs)
    }
}
