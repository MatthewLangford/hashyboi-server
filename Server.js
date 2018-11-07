const rigInfoRepository = require('./src/RigInfoRepository/RigInfoRepository');

rigInfoRepository.updateAndSendRigInfo();      
setInterval(rigInfoRepository.updateAndSendRigInfo, 50 * 1000);