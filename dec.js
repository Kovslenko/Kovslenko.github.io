const name = ["clock" "painting" "radio"]
const dec = genDec(2)
console.log(dec.next().value)
console.log(dec.next().value)
funnction* genDec(n)
{
    const d = []
    for(let i = 0; i < n; i++) d.push(0)
    yield d
    let i = n - 1
    while(true)
{
    d[i] =d[i] + 1
    yield d
}
}

     

