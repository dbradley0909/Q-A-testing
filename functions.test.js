const {
    returnTwo,
    greeting,
    add
} = require('./functions.js');

test('should be 2', () => {
    expect(returnTwo()).toBe(2)
});

test('should be return the name james', () => {
    expect(greeting(james)).toBe('hello, james')
});

test('should be return the name Jill', () => {
    expect(greeting('Jill')).toBe('hello, Jill')
});

test('should be 3', () => {
    expect(add(1, 2)).toBe(3)
});

test('should be 14', () => {
    expect(add(5, 9)).toBe(14)
});

describe('the functions', () => {
    test('should be 6', () => {
        expect(subtract(10, 4)).toBe(6)
    })
test('should be equal to 10' , () => {
        expect(multiply(5, 2)).toBe(10)
    })
    test('should be 9', () => {
        expect(division(3, 3)).toBe(9)
    })
    
})

