const fs = require('fs');

fs.readFile('readme.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }

    fs.readFile('readme.txt', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        }

        fs.readFile('readme.txt', 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }

            fs.readFile('readme.txt', 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log('4번', data);
            });
            console.log('3번', data);
        });
        console.log('2번', data);
    });
    console.log('1번', data);
});
