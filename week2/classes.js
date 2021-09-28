
class SuperHero {


    constructor(name, skills, strong, weakness) {
        this.name = name;
        this.skills = skills;
        this.lifes = 100;
        this.strong = !strong ? 10 : strong;
        this.weakness = weakness;
    }

    fight() {
        this.strong -= 10;
    }

    teach() {
        this.lifes += 10;
        this.strong += 10;
        console.log(`Ahora soy más sabio y tengo fuerza ${this.strong} y ${this.lifes} vidas `)
    }

    salvarVidas(skill) {
        this.skills = [...this.skills, skill];
        console.log(`Oh he ganado una nueva habilidad, ahora mis habilidades son ${this.skills}`);
    }    

    greet() {
        console.log(`Hola soy ${this.name}`);
    }

}

class Aqcua extends SuperHero {
    constructor(aqcuaSkills) {
        super('pececin', ['respirar bajo el agua', 'tener aletas', 'comunicarse con los animales'], 500, 'aire')
        this.skills = [...this.skills, aqcuaSkills];
    }

    greetAcqua() {
        super.greet();
        this.teach();
        console.log(this.skills);
        
    }
}

// const super1 = new SuperHero('Batman', ['dinero', 'tecnología', 'auto', 'avión'], 200, 'compasivo')
// super1.greet();
// super1.teach();
// super1.salvarVidas('felicidad');
// super1.salvarVidas('humildad');
// const acquaHero = new Aqcua('nadar al mar Caribe');
// acquaHero.greetAcqua();

//MAP, FILTER, REDUCE
            // ======
//MÉTODOS PARA ITERAR ARRAYS

const users = [
        {
            id: "60d0fe4f5311236168a109ca",
            "title": "ms",
            "firstName": "Sara",
            "lastName": "Andersen",
            "picture": "https://randomuser.me/api/portraits/women/58.jpg",
            account: 25000

        },
        {
            "id": "60d0fe4f5311236168a109cb",
            "title": "miss",
            "firstName": "Edita",
            "lastName": "Vestering",
            "picture": "https://randomuser.me/api/portraits/med/women/89.jpg",
            account: 100000
        },
        {
            "id": "60d0fe4f5311236168a109cc",
            "title": "ms",
            "firstName": "Adina",
            "lastName": "Barbosa",
            "picture": "https://randomuser.me/api/portraits/med/women/28.jpg",
            account: 40000
        },
        {
            "id": "60d0fe4f5311236168a109cd",
            "title": "mr",
            "firstName": "Roberto",
            "lastName": "Vega",
            "picture": "https://randomuser.me/api/portraits/med/men/25.jpg",
            account: 25000
        },
        {
            "id": "60d0fe4f5311236168a109ce",
            "title": "mr",
            "firstName": "Rudi",
            "lastName": "Droste",
            "picture": "https://randomuser.me/api/portraits/med/men/83.jpg",
            account: 0
        }
]

//El método map itera en cada uno de los elementos de un array y retorna otro array; 

// const getFirstNameUsers = users.map((user, i) => user.firstName);

// const getFirstNameUsers = () => users.map((user, i) => {
//     console.log(user.lastName);
//     console.log(i)
//     return user;
// })

// const hobbies = ['leer', 'cantar', 'reir', 'andar en bici'];

// const iterateHobbies = () => hobbies.map((hobbie) => `${hobbie} en mi casa` )

// console.log(getFirstNameUsers());
// console.log(iterateHobbies())


//Filter
const ages = [1,56,23,2,13,19];

const getAdults = ages.filter((age) => age < 18);

console.log(getAdults); 

const getThePersonWithNoMoney = () => users.filter((user) => user.account === 0);
const getOnlyUsersAccount = (country) => users.map((user, index) => ({nombre: `${user.firstName} ${user.lastName}`, index: index, saldo: user.account}));

// console.log(getThePersonWithNoMoney());

console.log(getOnlyUsersAccount('Australia'));
