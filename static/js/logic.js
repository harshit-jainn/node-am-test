function getD(location) {
    fetch('http://localhost:3000/weather?address=' + location).then((data) => {
        data.json().then(d => {
            console.log(d);
        });
    }).catch(err => {
        console.log(err);
    })
}