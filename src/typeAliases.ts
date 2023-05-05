/**
 * Type aliases helps us create custom type in our own
 * keywords so code becomes more readable
 */

type ID = string;
type BOOKS = string[];

interface Student {
    id: ID;
    name: string;
    textbooks: BOOKS;
}

/**
 * We created our own type using ID: string and BOOKS: string[]
 * And we used them in our code to make it more readable
 */

// Combining Type ALiases and Unions
type ExerciseBooks = BOOKS | null;

const socialStudies: ExerciseBooks = ['Page 1', 'Page 2'];
