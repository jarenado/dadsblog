const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
	let url = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=htaAEhKzmd4XeTixtSaGGWcrEg1VislZ"

  /* This returns a promise */
  const books = EleventyFetch(url, {
    duration: "1d", // save for 1 day
    type: "json"    // we’ll parse JSON for you
  });

	return books;
};
