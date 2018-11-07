const rigNameFormatter = require(`./RigNameFormatter`);

module.exports = {
    formatRigInfo :  (rigNumber,data) => {
            const formattedString = data.slice(data.indexOf(`{`), data.indexOf(`}`) + 1),
                  jsonData = JSON.parse(formattedString),
                  resultArray = jsonData.result,
                  hashRateAndShareInfo = resultArray[2].split(`;`),
                  invalidShareAndPoolSwitches = resultArray[8].split(`;`),
                  hashratePerCard = resultArray[3].split(`;`).map(cardHashrate => parseInt(cardHashrate)),
                  tempPerCard = resultArray[6].split(`;`).filter((gpu, index) => index % 2 == 0)
                                   .map(temp => parseInt(temp)),
                  fanPerCard = resultArray[6].split(`;`).filter((gpu, index) => index % 2 != 0)
                                  .map(fan => parseInt(fan)),
                  avgHashratePerCard = Math.floor(hashratePerCard.reduce((prev, curr) => prev + curr) / hashratePerCard.length),
                  avgFanPerCard = Math.floor(fanPerCard.reduce((prev, curr) => prev + curr) / fanPerCard.length),
                  avgTempPerCard = Math.floor(tempPerCard.reduce((prev, curr) => prev + curr) / tempPerCard.length),
                  avgSharesPerHour = Math.ceil(hashRateAndShareInfo[1] / (resultArray[1] / 60 )),

             rigInfo = {
                rigNumber: rigNameFormatter.getCorrectRigNameFromNumber(rigNumber) ,
                minerVersion: resultArray[0],
                totalTimeInMinutes: resultArray[1],
                hashrateTotal: hashRateAndShareInfo[0],
                acceptedShares: hashRateAndShareInfo[1],
                rejectedShares: hashRateAndShareInfo[2],
                invalidShares: invalidShareAndPoolSwitches[0],
                poolSwitches: invalidShareAndPoolSwitches[1],
                avgHashratePerCard,
                avgFanPerCard,
                avgTempPerCard,
                avgSharesPerHour,
                hashratePerCard,
                tempPerCard,
                fanPerCard
            }
           return rigInfo;
    }
};