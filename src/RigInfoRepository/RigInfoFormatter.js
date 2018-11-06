const rigNameFormatter = require(`./RigNameFormatter`);

module.exports = {
    formatRigInfo :  (rigNumber,data) => {
            const formattedString = data.slice(data.indexOf(`{`), data.indexOf(`}`) + 1);
            const jsonData = JSON.parse(formattedString);
            const resultArray = jsonData.result;
            const hashRateAndShareInfo = resultArray[2].split(`;`);
            const invalidShareAndPoolSwitches = resultArray[8].split(`;`);
            const gpuTempPerCard = resultArray[6].split(`;`).filter((gpu, index) => index % 2 == 0);
            const gpuFanPerCard = resultArray[6].split(`;`).filter((gpu, index) => index % 2 != 0);

            const rigInfo = {
                rigNumber: rigNameFormatter.getCorrectRigNameFromNumber(rigNumber) ,
                minerVersion: resultArray[0],
                totalTimeInMinutes: resultArray[1],
                hashrateTotal: hashRateAndShareInfo[0],
                acceptedShares: hashRateAndShareInfo[1],
                rejectedShares: hashRateAndShareInfo[2],
                invalidShares: invalidShareAndPoolSwitches[0],
                rigPoolSwitches: invalidShareAndPoolSwitches[1],
                rigHashRatePerCard: resultArray[3].split(`;`),
                rigGpuTempPerCard: gpuTempPerCard,
                rigGpuFanPerCard: gpuFanPerCard
            }
           return rigInfo;
    }
};