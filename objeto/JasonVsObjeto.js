const obj = {a: 1, b:2, c: 3, soma (){ return a +b +c}}
console.log(JSON.stringify(obg))

// Exemplo que o JSON nao aceita 

console.log(JSON.parse ("{a: 1, b: 2, c: 3}"))
console.log(JSON.parse("{'a':1,'b': 2, 'c': 3"))

// Exemplos aceitos por JSON

console.log(JSON.parse('{"a": 1 , "b": 2, "c": 3}'))
console.log(JSON.parse('{"a": 1, "b": "string", "c": true, "d": {}, "e": []'))