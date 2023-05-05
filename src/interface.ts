interface UserInterface {
    name: string;
    // To set a non mandatory element is typescript
    age?: number;
    getMessage(): string;
}

const person: UserInterface = {
    name: 'James',
    age: 18,
    getMessage() {
        return 'Hello' + user;
    },
};

// No errors when age is not specified
const person2: UserInterface = {
    name: 'James',
    getMessage() {
        return 'Hello' + user;
    },
};
