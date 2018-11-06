const axios = require(`axios`);
      
module.exports = {
    getRigInfo : async rigAddress => {
        try {
            const response =  await axios({
                method: `get`,  
                url: rigAddress,
                timeout: 1000
        });
            return response.data;
        } catch (error) {
            return null;
        }
    }
};