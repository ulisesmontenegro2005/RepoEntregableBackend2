const fs = require('fs');

fs.writeFileSync('./productos.txt', '', (err) => {
    err ? console.log('cant be possible create the file' + err) : console.log('created correctly');
});

class Contenedor {
    constructor (title, price, thumbnail) {
        this.title = title
        this.price = price
        this.thumbnail = thumbnail
    }

    static array = [];

    save(Obj) {
        let id = Contenedor.array.length;

        Obj = {
            title: this.title,
            price: this.price,
            thumbnail: this.thumbnail,
            id: id
        }

        Contenedor.array.push(Obj);
        
        fs.writeFileSync('./productos.txt', JSON.stringify(Contenedor.array), err => {
            err ? console.log(err) : console.log('si');
        })
    }

    getById(Num) {
        fs.promises.readFile('./productos.txt', 'utf-8')
        .then( txt => {
            JSON.parse(txt).find( (el) => {
                if (el.id === Num) {
                    console.log('getById >>>>>>>>', el);
                } 
            })
        })
        .catch( err => {
            console.log(err);
        })

    }

    getAll() {
        fs.promises.readFile('./productos.txt', 'utf-8')
        .then( arr => {
            console.log(JSON.parse(arr));
        })
        .catch( err => {
            console.log(err);
        })
    }

    deleteById(Num) {
        fs.promises.readFile('./productos.txt', 'utf-8')
        .then( txt => {
            const arr = JSON.parse(txt).filter( (prods) => {
                return prods.id !== Num
            })

            fs.writeFileSync('./productos.txt', JSON.stringify(arr), (err) => {
                err ? console.log('cant be possible create the file' + err) : console.log('created correctly');
            });
        })
        .catch( err => {
            console.log(err);
        })
    }

    deleteAll() {
        fs.writeFileSync('./productos.txt', '', (err) => {
            err ? console.log('cant be possible create the file' + err) : console.log('created correctly');
        });
    }
}

let ulises = new Contenedor('buzo', 1500, 'imagen');
ulises.save();

let marcos = new Contenedor('buzo', 1500, 'imagen');
marcos.save();
marcos.getById(1);

let juan = new Contenedor('buzo', 1500, 'imagen');
juan.save();

let tomy = new Contenedor('buzo', 1500, 'imagen');
tomy.save();
tomy.deleteById(3);

// ulises.deleteAll()





