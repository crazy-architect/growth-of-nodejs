const child_process = require('child_process');
const p = child_process.exec(
    'node child.js a b', {},
    (err, stdout, stderr) => {
        if (err) {
            console.log('err:', err, err.code, err.signal);
        }
        console.log('stdout', stdout);
        console.log('stderr', stderr);
    }
);

console.log('child pid:', p.pid);