const mongoose = require('mongoose');

const uri = 'mongodb://localhost:2717/grupo2';

const options = {useNewUrlParser: true, useUnifiedTopology: true};

/*mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB') },
    err => { console.log(err)}
);*/
mongoose.connect('mongodb://localhost/grupo2').then(() => {
console.log("Conectado a DB");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});

module.exports = mongoose