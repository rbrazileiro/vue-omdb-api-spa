let axios = require("axios");
let BASE_URL = "http://www.omdbapi.com/";

export default (options, callback) => {
  try {
    let config = {
      params: {
        apikey: options.apikey,
        i: options.i,
        plot: options.plot,
        type: options.type
      }
    };
    axios
      .get(BASE_URL, config)
      .then(response => {
        if (callback) {
          callback(response.data);
        }
        console.log("OMDb API response", response);
      })
      .catch(err => console.error(err));
  } catch (err) {
    callback.res.status(500).send({
      error: "An error ocurred. Try catch on debug mode"
    });
  }
};
