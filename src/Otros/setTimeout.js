function first() {
  console.log(1);
  setTimeout(() => console.log(2), 2000);
  console.log(3);
}

function second() {
  console.log(1);
  setTimeout(() => console.log(2), 0);
  console.log(3);
}

first();
second();
