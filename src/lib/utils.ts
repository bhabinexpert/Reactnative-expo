export const formatPrice = (value: number): string =>{
    if(value >= 1000000){
        const cr = (value/ 10000000).toFixed(1).replace(/\.0$/, "");
        return `Rs.${cr}CR`
    }
    if(value >= 100000){
        const l = (value/ 100000).toFixed(1).replace(/\.0$/, "");
        return `Rs.${l}L`
    }

    return `RS.${value.toLocaleString()}`;
}