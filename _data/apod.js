const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
  const API_KEY = 'j3t4U4txb56151AQEbkm9zIv9faSs4xwxcETUVzX';
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

  /* This returns a promise */
  const apod = EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });

  return apod;
};
