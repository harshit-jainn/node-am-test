function getD(location) {
    fetch('/weather?address=' + location).then((data) => {
        data.json().then(d => {
            console.log(d);
        });
    }).catch(err => {
        console.log(err);
    })
}