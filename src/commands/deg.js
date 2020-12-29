var { games,getYaw } = require("./array");
module.exports = {
	name: 'deg',
	description: 'Converts Senstivity to deg/mm',
    args: true,
    usage: '<sensitivity value> <game or yaw value> <cpi/dpi> \n(Supported games: ' + games + ')',
	execute(message, args) {
        var yaw = getYaw(args[1]);
        var output = (( args[2] * yaw * args[0])/ 25.4).toFixed(5);
        message.reply(output + ' deg/mm');
        },
    };