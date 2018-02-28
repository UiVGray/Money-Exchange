module.exports = function makeExchange(currency) {
    if (currency > 10000) {
      return({error: "You are rich, my friend! We don\'t have so much coins for exchange"});
    }
    if (currency <= 0) {
       let obj = {}
        return(obj);
    }
    let H = 0;
    let Q = 0;
    let D = 0;
    let N = 0;
    let P = 0;

    if(currency >= 50) {
    H = currency - (currency % 50);
    currency = (currency % 50);
    }
    if(currency >= 25) {
    Q = currency - (currency % 25);
    currency = (currency % 25);
    }
    if(currency >= 10) {
    D = currency - (currency % 10);
    currency = (currency % 10);
    }
    if(currency >= 5) {
    N = currency - (currency % 5);
    currency = (currency % 5);
    }
    if(currency >= 1) {
    P = currency;
    }

    H = H / 50;
    Q = Q / 25;
    D = D / 10;
    N = N / 5;
    P = P;
    let dict = {"H": H , "Q": Q , "D": D , "N": N , "P": P};
    dict = Object.keys(dict).reduce(function(f, key) {
    if (dict[key] != 0) {
        f[key] = dict[key];
        }
    return(f);
    }, {} );
return(dict);
}