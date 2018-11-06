const axios = require('axios'),
      postUrl = 'http://192.168.1.66:3004/api/updateRigInfo';

module.exports = {
    sendRigInfo : rigInfo => {
        //console.log(rigInfo)
        axios({
            method: 'post',
            url : postUrl,
            data : rigInfo
        });
    }
}