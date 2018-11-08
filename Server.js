const rigInfoRepository = require('./src/RigInfoRepository/RigInfoRepository');
      
setInterval(rigInfoRepository.updateAndSendRigInfo, 60 * 1000);