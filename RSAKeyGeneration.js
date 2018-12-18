function RSAKeyGeneration() {
  let keyParams = [];
  let P, Q, phi, n, d, e;
  let min = 1;
  let max = 25;

  do {
    P = Math.floor(Math.random() * (max - min)) + min;
  } while (!isPrime(P));
  do {
    Q = Math.floor(Math.random() * (max - min)) + min;
  } while (Q != P && !isPrime(Q));
  n = P * Q;
  phi = (P - 1) * (Q - 1);
  console.log("P: " + P);
  console.log("Q: " + Q);
  console.log("Phi: " + phi);
  console.log("n: " + n);


  let candidates = [];
  let primeFactors = [];
  for (let i = 1; i <= 5; i++) {
    candidates.push(phi * i + 1)
  }
  console.log(candidates)
  for (let candidate of candidates) {
    for (let i = 2; i < candidate; i++) {
      if (isPrime(i) && candidate % i == 0) {
        primeFactors.push(i);

      }
    }
    if (primeFactors.length >= 2) {
      console.log(primeFactors)
      break;
    }
    primeFactors = [];

  }
  e = primeFactors[0];
  d = primeFactors[1];

  console.log("e: " + e);
  console.log("d :" + d);
  keyParams.push(n, e, d);
  console.log("KeyParams :" + keyParams);
  return keyParams;
}