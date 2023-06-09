const request = require("request");

const fetchMyIP = function (callback) {
  request(
    "https://api.ipify.org?format=json",
    function (error, response, body) {
      if (error) {
        callback(error, null);
        return;
      }

      if (response.statusCode !== 200) {
        callback(
          new Error(`Unexpected status code: ${response.statusCode}`),
          null
        );
        return;
      }

      try {
        const data = JSON.parse(body);
        callback(null, data.ip);
      } catch (parseError) {
        callback(parseError, null);
      }
    }
  );
};

module.exports = { fetchMyIP };
