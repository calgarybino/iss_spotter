const request = require("request");

const fetchCoordsByIP = function(ipAddress, callback) {
  const url = `https://ipwho.is/${ipAddress}`;
  request(url, function(error, response, body) {
    if (error) {
      callback(error, null);
      return;
    }
    /*if (response.statusCode !== 200) {
      callback(
        new error(`unexpected status code:${response.statusCode}`),
        null
      );
      return;
    }*/
    try {
      const data = JSON.parse(body);
      if (!data.success) {
        const message = `Success status was ${data.success}. Server message says:${data.message} when fetching for IP ${data.ip}`;
        callback(message, null);
        return;
      }
      const coordinate = {
        latitude: data.latitude,
        longitude: data.longitude,
      };
      callback(null, coordinate);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
};

module.exports = { fetchCoordsByIP };
