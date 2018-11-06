const rigInfoFetcher = require(`./RigInfoFetcher`),
      requestBuilder = require(`./RequestBuilder`),
      rigInfoSender = require(`./RigInfoSender`),
      rigInfoFormatter = require(`./RigInfoFormatter`),
      requestArray = requestBuilder.BuildRequestArray(),
      rigInfo = {},

      resetRigInfoValues = () => {
        rigInfo.rigInfoArray = [];
        rigInfo.totalAcceptedShares = 0;
        rigInfo.totalHashrate = 0;
        rigInfo.totalRejectedShares = 0;
        rigInfo.totalInvalidShares = 0;
    };
    
module.exports = {
    updateAndSendRigInfo : async () => {
        await resetRigInfoValues();

        requestArray.forEach(async (rigAddress, index) => {
                const data = await rigInfoFetcher.getRigInfo(rigAddress);
                if ( data ) {
                    const rig = await rigInfoFormatter.formatRigInfo(index, data);
                    rigInfo.totalAcceptedShares += parseInt(rig.acceptedShares);
                    rigInfo.totalHashrate += parseInt(rig.hashrateTotal);
                    rigInfo.totalRejectedShares += parseInt(rig.rejectedShares);
                    rigInfo.totalInvalidShares += parseInt(rig.invalidShares);
                    rigInfo.rigInfoArray[index] = rig;
                } else {
                    rigInfo.rigInfoArray[index] = {rigNumber : index, totalTimeInMinutes : 'error'};
                }
            });
        rigInfoSender.sendRigInfo(await rigInfo);
    }
};