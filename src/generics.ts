const addID = <T extends object>(obj: T) => {
    const id: string = Math.random().toString(10);
    return {
        ...obj,
        id,
    };
};

interface adminUserInterface {
    name: string;
}

const adminUser: adminUserInterface = {
    name: 'Daniel',
};

const results = addID<adminUserInterface>(adminUser);
console.log(results);
