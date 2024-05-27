
function formatAmounts(amount:number):string{
    const formatt = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 2,
        }
    
    );
    return formatt.format(amount)
}

console.log(formatAmounts(364646.5464));

