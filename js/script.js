// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


// for console.log(1 => 100)

// if number % 3 == 0 && number % 5 == 0     => console.log("FizzBuzz");

// if number % 3 == 0                        => console.log("Fizz");

// if number % 5 == 0                        => console.log("Buzz");

// else                                      => console.log(number);


for (var i = 0; i < 100; i++) {
  var number = i + 1;
  if (number % 3 == 0 && number % 5 == 0) {
    console.log("FizzBuzz");
  } else if (number % 3 == 0) {
    console.log("Fizz");
  } else if (number % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(number);
  }
}
