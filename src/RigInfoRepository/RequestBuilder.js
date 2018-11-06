const requestArray = [],
      rigCountStart = 2,
      rigCountTotal = 61;

module.exports = {
    BuildRequestArray : () => {
        if(rigCountTotal == null){ return requestArray}
        
        for (let i = rigCountStart; i < rigCountTotal; i++){
            requestArray.push(`http://192.168.1.${ i }:3333`);
        };
    return requestArray;
    } 
};