# TypeScript
1. The typescript file extension is : `.ts`
2. To compile a typescript file we use the command `tsc 'file-name.ts'`
3. When the file was compiled we got the matches javascript file `file-name.js`
4. To tell to the editor compile any file ts that you have, we can do that with the 
    config file ts, run `tsc --init`

### Using Types for a better code
1. In js we can overload the variable type, but is not the case in ts.
2. We can assign types implicitly by initialising a variable, and we can do it also 
    explicitly(`let num: number;`).
    - Array:
        - `let hobbies: any[] = ["hobbies1", 10, true],` 
    - tuples: 
        - `let address: [string, number] = ["Street Karma", 52]`
    - Enums:
        - `enum Color {
            Green,
            Red,
            Yellow
        }`
        - `let my_color: Color = Color.Green;`
3. Functions:
    - to specify the type of a return function, or the argument type:
        - `function setAndGetName(name: string): string {this.name = name;return this.name;}`
        - function type:
            - `let mul: (var1: number, var2: number) => number;`
4. Objects:
    - type:
        - `let data: {name: string, age: number};`
5. Customer type:
    - To create a customer type:
        - `type Complex = {data: string[], output: (bool: boolean) => string []}`
6. Multiple type `|` :
    - `let numberStringBoolean: number | string | boolean;`
7. check type of a variable:
    - `if (typeof var == "number") { console.log("Var is a number");}`
