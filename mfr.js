const cars = //array of cars
[
    { 
        model: 'Aventador SVJ',
        brand: 'Lamborghini',
        year: 2011,
    },
    {
        model: 'Enzo',
        brand: 'Ferrari',
        year: 2010,
    },
    {
        model: 'Taycan Turbo S',
        brand: 'Porsche',
        year: 2019
    },
    {
        model: 'M2',
        brand: 'BMW',
        year: 2017
    },
    {
        model: 'CLS 63 AMG',
        brand: 'Mercedes-Benz',
        year: 2020
    }
];

// map is a conversion function that applies to every item in the array and returns a new array
const models = cars.map(car => {
    return car.model; //returns an array of the model of every car
}); 

console.log(models); //console will output the model of every car in the array


//filter is a conversion function that applies to every item in the array and returns an array of the items that pass the test
//here I want the console to return only cars with year > 2019
const saring = cars.filter(car => {
    return car.year >= 2019; //returns an array of all cars that are made after 2019
}).map(person => {
    return person.model; //returns an array of the model of every car that is made after 2019
}) //map and filter can be combined this way if you only want the model name

console.log(saring); //console will output the cars the tested array

//reduce is a conversion function that applies to every item in the array and returns a single value 
//here I want the console to return the total number of models
const totalModels = cars.reduce((total, car) => {
    return total + 1; //returns the total number of models
}, 0); //0 is the initial value of the total variable

console.log(totalModels)