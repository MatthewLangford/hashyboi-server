const axios = require(`axios`),
      postUrl = `http://www.matthewlangford.net:3004`;

module.exports = {
    sendRigInfo : rigInfo => {
        axios({
            method: `post`,
            url : postUrl,
            body : rigInfo
        });
    }
}