<<<<<<< HEAD
#!/usr/bin/node
const Args = process.argv.slice(2);
if (Args.length === 0) {
  console.log('No argument');
} else if (Args.length === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
=======
// 2-arguments.js
const argsCount = process.argv.length - 2;

if (argsCount === 0) {
  console.log("No argument");
} else if (argsCount === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}

if (argsCount >= 2) {
  console.log(`Second argument: ${process.argv[2]}`);
}

if (argsCount >= 3) {
  console.log(`Third argument: ${process.argv[3]}`);
}

>>>>>>> refs/remotes/origin/master
