const axios = require('axios'),
      postUrl = 'http://www.matthewlangford.net:3004/api/updateRigInfo';

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