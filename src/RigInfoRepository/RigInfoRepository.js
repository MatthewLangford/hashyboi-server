const rigInfoFetcher = require(`./RigInfoFetcher`),
      requestBuilder = require(`./RequestBuilder`),
      rigInfoSender = require(`./RigInfoSender`),
      rigNameFormatter = require(`./RigNameFormatter`),
      rigInfoFormatter = require(`./RigInfoFormatter`),
      requestArray = requestBuilder.BuildRequestArray(),
      rigInfo = {
          rigInfoArray : []
      },

      resetRigInfoValues = () => {
        rigInfo.rigInfoArray = [];
        rigInfo.totalAcceptedShares = 0;
        rigInfo.totalHashrate = 0;
        rigInfo.totalRejectedShares = 0;
        rigInfo.totalInvalidShares = 0;
    };
    
module.exports = {
    updateAndSendRigInfo : async () => {
        resetRigInfoValues();  
        await Promise.all(requestArray.map(async (rigAddress, index) => {
            const data = await rigInfoFetcher.getRigInfo(rigAddress);
            if ( data ) {
                const rig = rigInfoFormatter.formatRigInfo(index + 1, data);
                rigInfo.totalAcceptedShares += parseInt(rig.acceptedShares);
                rigInfo.totalHashrate += parseInt(rig.hashrateTotal);
                rigInfo.totalRejectedShares += parseInt(rig.rejectedShares);
                rigInfo.totalInvalidShares += parseInt(rig.invalidShares);
                rigInfo.rigInfoArray[index] = rig;
            } else {
                rigInfo.rigInfoArray[index] = {rigNumber : rigNameFormatter.getCorrectRigNameFromNumber(index + 1), totalTimeInMinutes : 'error'};
            }
        }));
        rigInfoSender.sendRigInfo(rigInfo);
    }
};