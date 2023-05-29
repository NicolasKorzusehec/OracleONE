function returncombinatorio(num) {
    let total=1;
        for(let i=num;i>1;i--)
        {total=total*i;};
    return total;
    };
console.log(returncombinatorio(4));
console.log(returncombinatorio(8));
console.log(returncombinatorio(3));