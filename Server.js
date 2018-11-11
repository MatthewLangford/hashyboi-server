const rigInfoRepository = require('./src/RigInfoRepository/RigInfoRepository');

rigInfoRepository.updateAndSendRigInfo();
setInterval(rigInfoRepository.updateAndSendRigInfo, 60 * 1000);