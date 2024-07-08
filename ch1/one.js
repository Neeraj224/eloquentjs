// as far as im concerned for right now, what does the let keyword do?
// what does the let keyword do?
let total = 0, count = 1;

while(count <= 10)
{
    total += count;
    count += 1;
}

console.log(total)

// lets define a very simple print() function
// because writing console.log() everytime is a pain in the ass:
function print(param)
{
    console.log(param);
}

function factorial(n) 
{
    if(n == 0)
        {
            return 1;
        }
    else
    {
        return factorial(n - 1) * n;
    }
}

print(factorial(8)); // -> 40320
print((10 * 8 >= 11)); // -> true
print((10 ** 8)); // -> 100000000
print(10 % 5); // -> 0
print(10 / 5); // -> 2

text = `
    hello, my name is chaz.
    i do chazzy things.
    i haz cazh.
    letz have fun!
`
print(text);

text = [
    "hello, my name is chaz.",
    "i do chazzy things.",
    "i haz cazh.",
    "letz have fun!"
]

print(text);

for(let i = 0; i < text.length; i++)
{
    text[i] = text[i] + "HITHIISAPADDEDMESSAGE";
}

print(text);

// backtick-quoted strings are template literals.
// we can embed values in them.
example = `half of 100 is ${100 / 2}.`;
print(example);
print(typeof(text));


print(true && false);
print(true || false);

let x = 10;
print(x > 5 ? 10 : 20);

// JS oddities:
// empty values: null and undefined - they are themselves values
// but are undefined
print(null);
print(undefined);

print(8 * null);
print(8 * undefined);
print("5" + 1); // how is this 51
print("5" - 1); // but this is 4?!
print(null == undefined); // will give a true
print(null == 0); //  will give a false

// to not let js do auto type conversion we can use the === and !==
// operators for condtional checks. these operators check for only
// precision equalities:
x = 'one';
y = "one";

if(x === y)
{
    print("precisely equal");
}
else 
{
    print("not precisely equal");
}

print(null || "user");
print("user1" || "user2");

