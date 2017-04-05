const chalk = require('chalk');
const greet = require('./greet.js');
const figlet = require('figlet');

// const styledMessage = chalk.bgGreen.red(greet('Xola'));
// const styledMessage = figlet.text(greet('Xola'));
const styledMessage = figlet.text(greet('Xola'), {
    font: 'Standard',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
});
// if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(data);
// });


console.log(styledMessage);
