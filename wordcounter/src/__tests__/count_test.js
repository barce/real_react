import countWords from '../countWords';

it('counts the correct number of words', () => { 
  expect(countWords('One two three')).toBe(3);
});
