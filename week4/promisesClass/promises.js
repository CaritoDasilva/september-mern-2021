//ES5

const isBreadAvailable = true;

const buyingBread = new Promise((resolve, reject) => {
    if(isBreadAvailable) {
        resolve('He traído el pan para la oncecita');
    } else {
        const reason = new Error('Lo siento no había pan hagamos panqueques');
        reject(reason);
    }
});

const goToBuyTheBread = () => {
    const data = buyingBread.then(res => console.log(res))
    .catch(err => console.log(err))
    
    console.log("🚀 ~ file: promises.js ~ line 16 ~ goToBuyTheBread ~ data", data)
    console.log('Pasé por acá')
};

// goToBuyTheBread();

// ES6

const goToBuyTheBreadWithAsyncAwait = async () => {
    try {
        const data = await buyingBread;
        // console.log("🚀 ~ file: promises.js ~ line 28 ~ goToBuyTheBreadWithAsyncAwait ~ data", data)
        console.log(`Hola que felicidad ${data}`)
        console.log('Pasé por acá')

    } catch(err) {
        console.log("🚀 ~ file: promises.js ~ line 33 ~ goToBuyTheBreadWithAsyncAwait ~ err", err)
        
    }

}

goToBuyTheBreadWithAsyncAwait();

//Promise.all(iterable) => Paralelizar promesas. Regresa la data en un array.
//Promise.race(iterable) => Devuelve la primera promesa en resolverse


