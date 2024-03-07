/* 
* Parámetros por defecto
function profile(user = 'username') {
    console.log(`tu nombre de usuario es ${user}`)
}
*/

class HashTable {
    constructor(size = 7) {
        this.data = new Array(size); // -> [ undefined, undefined, undefined, , , , ]
        // console.log(this.data);
    }

    hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.data.length;
            // console.log(`El caracter ${key[i]} tiene el valor de  ${key.charCodeAt(i)}`);
            // console.log(`hash: ${hash}`);
        }
        return hash;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.data[index]) {
            this.data[index] = [];
        }
        this.data[index].push([key, value]);
        return this;
    }

    get(key) {
        let index = this._hash(key);
        let positionSelected = this.data[index];
        if (positionSelected) {
            for (let i = 0; i < positionSelected.length; i++) {
                if (positionSelected[i][0] === key) {
                    return positionSelected[i][1];
                }
            }
        }
        return undefined;
    }
}

const ht = new HashTable(7);
ht.set('harina', 100);
ht.set('huevo', 75);
ht.set('queso', 36);

/*
const size = 7;

function hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash + key.charCodeAt(i) * 23) % size;

        console.log(`El caracter ${key[i]} tiene el valor de  ${key.charCodeAt(i)}`);
        console.log(`hash: ${hash}`)
    }
}

* 2392/7 = 341.7142857143
* 341*7 = 2387
* 2392 - 2387 = 5
*/