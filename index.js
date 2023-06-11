const { nextISSTimesForMyLocation } = require('./iss');

/** 
 * Input: 
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns: 
 *   undefined
 * Sideffect: 
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});





























































































// const { fetchMyIP } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });

// const { fetchCoordsByIP } = require("./iss");
// const ipAddress = "42";
// fetchCoordsByIP(ipAddress, function (error, data) {
//   if (error) {
//     console.log("It didn't work!", error);
//   } else {
//     //console.log("Latitude:", data.latitude);
//     //console.log("Longitude:", data.longitude);
//     console.log("Coordinate:", data);
//   }
// });

// const { fetchISSFlyOverTimes } = require("./iss");

// const coords = { latitude: "49.27670", longitude: "-123.13000" };

// fetchISSFlyOverTimes(coords, (error, flyOverTimes) => {
//   if (error) {
//     console.log("Error:", error.message);
//   } else {
//     console.log("Fly Over Times:", flyOverTimes);
//   }
// });

// const { nextISSTimesForMyLocation } = require("./iss");
// /**
//  * Input:
//  *   Array of data objects defining the next fly-overs of the ISS.
//  *   [ { risetime: <number>, duration: <number> }, ... ]
//  * Returns:
//  *   undefined
//  * Sideffect:
//  *   Console log messages to make that data more human readable.
//  *   Example output:
//  *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) 
//for 468 seconds!
//  */
// const printPassTimes = function (passTimes) {
//   for (const pass of passTimes) {
//     const datetime = new Date(0);
//     datetime.setUTCSeconds(pass.risetime);
//     const duration = pass.duration;
//     console.log(`Next pass at ${datetime} for ${duration} seconds!`);
//   }
// };
// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   printPassTimes(passTimes);
// });
