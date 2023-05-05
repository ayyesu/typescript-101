/**
 * We use union when a value is of different types
 */

let pageNumber: string | number = '1';

interface School {
    name: string;
}

const school: School | null = null;
