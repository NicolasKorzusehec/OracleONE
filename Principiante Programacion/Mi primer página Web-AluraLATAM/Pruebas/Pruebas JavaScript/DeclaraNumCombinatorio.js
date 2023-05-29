function declaracombinatorio(num) {
    let total=1;
        for(let i=num;i>1;i--)
        {total=total*i;};
        console.log(num+'! is equal to '+total+'.');
    };
declaracombinatorio(8);
declaracombinatorio(2);
declaracombinatorio(5)