function nthFibonacci(n){
    if (n <= 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci (n-2)
}

function auxFib (n, aux = {0:0, 1:1}){
    if (aux.hasOwnProperty(n)) return aux[n];
    return aux[n] = auxFib(n-1, aux) + auxFib(n-2, aux);
}