interface Person {
    name: string;
    age: number;
}

function introduce(person: Person): string {
    const greeting = `Hello, ${person.name}`;
    const ageInfo = `You are ${person.age} years old`;

    return `${greeting}. ${ageInfo}.`;
}

const person: Person = {
    name: "Jack",
    age: 38
};

const message = introduce(person);

console.log(message);