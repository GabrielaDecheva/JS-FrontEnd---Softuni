class Cat {
    examCount = 0; // initialize property  
    #internalValue = 'Secret'; // private property 
    static value = 'Some static value'; // static property
    static #staticPrivate = 'adfawdf' // static private property
    
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
    }

    makeSound() {
        console.log(`${this.name} - Meow...`);
    }

    makeExam() {
        console.log(`Cat ${this.name} has been examed.`);
        this.examCount++;
    }

    // Static method
    static hasVaccines(cat) {
        return cat.examCount > 0;
    } 

    // Getter property
    get internalValue() {
        return this.#internalValue;
    }
    
    // setter property
    set internalValue(value) {
        // TODO: check value

        this.#internalValue = value;
    }
}

class FancyCat extends Cat {
    constructor(name, breed, price) {
        super(name, breed);

        this.price = price;
    }
}

const firstCat = new Cat('Navcho', 'Persian');
const secondCat = new Cat('Sisa', 'Angora');

console.log(firstCat);
console.log(secondCat);

firstCat.makeSound();
secondCat.makeSound();

firstCat.makeExam();
console.log(firstCat.examCount);
console.log(Cat.hasVaccines(firstCat));

console.log(firstCat.internalValue);
firstCat.internalValue = 'New Secret';
console.log(firstCat.internalValue);


