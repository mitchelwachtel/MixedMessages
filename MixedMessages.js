
const ran1 = Math.floor(Math.random()*5);
const ran2 = Math.floor(Math.random()*5);
const ran3 = Math.floor(Math.random()*6);

let ObjectOfArrays = {
  array1: ['The world is ', 'The day is ', 'The party is ', 'The house is ', 'The game is '],
  array2: ['flat ', 'booty ', 'smelly ', 'sad ', 'out of control '],
  array3: ['so deal with it!', 'because the music is too loud.', 'therefore it is time to go to sleep.', '- can you believe it?', 'and that is why we cannot have nice things.', 'and that is the way the cookie crumbles']

}
console.log(ObjectOfArrays.array1[ran1] + ObjectOfArrays.array2[ran2] + ObjectOfArrays.array3[ran3]);

