let characters = "\/-\\|" // all the animation characters
let timer = 100; // starting counter
for(let i = 0; i < characters.length; i++){
  setTimeout(() => { 
  process.stdout.write('\r' + characters[i] + " ");
}, timer += 200)
}