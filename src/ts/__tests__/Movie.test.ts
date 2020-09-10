import Movie from "../domain/Movie";

describe('check work class Movie', () => {
    test('return a movie with options', () => {
        const expected = {
            country: "USA",
            name: "Avangers",
            slogan: "Avenger Assemble",
            style: "fantastic, fantasy, adventure",
            time: 137,
            year: 2012,
        };
        const movie = new Movie('Avangers', 2012, 'USA', 'Avenger Assemble', 'fantastic, fantasy, adventure', 137);
        const received = movie;
        expect(received).toEqual(expected);
    })
})