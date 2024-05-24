async function init() {
    try {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const users = await response.json();
        console.log(users);
    } catch (err) {
        console.error(err);
    }
}

init();

// await를 반드시 Promise함수를 리턴한다.
