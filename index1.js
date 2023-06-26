/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* I principali datatype in Javascript sono :
-Number: usati per numeri di qualsiasi tipo 
-Stringhe: servono per rappresentare dati testuali
-Booleani: servono per la veridicità dell'elemento, e possono essere solo uno di due valori, vero o falso 
-Null: indica semplicemente il nulla, è un valore che indica l'assenza
-Undefined: rappresenta un valore che non esiste e contiene il solo valore -undefined-
 */

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Un oggetto è una coppia chiave-valore, come se fosse un dizionario dove tramite il valore si ottiene la proprietà impostata */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 20
let num2 = 10
num3 = num1 + num2

console.log(num3)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = 'lorenzo'


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let num4 = 4 - x 
console.log(num4)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = 'john'
let name2 = 'John'

console.log(name1 == name2)

name1.toLowerCase = name2.toLowerCase

console.log(name1.toLowerCase == name2.toLowerCase)

/* Oppure */

name2 = name2.toLowerCase()
name1 = name1.toLowerCase()

console.log(name1 == name2)