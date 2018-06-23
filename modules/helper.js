const axios = require("axios");
const config = require("./config");

const helper = {
  searchReq: (query = "nature") => {
    let options = {
      method: "get",
      url: config.searchUrl,
      params: {
        key: config.customSearchKey, // Custom search API key
        cx: config.cx,
        q: query,
        searchType: "image",
        fileType: "jpg",
        imgSize: "xlarge",
        alt: "json"
      }
    };

    return axios(options).then(response => {
      const items = response.data.items;
      let formated = [];

      for (let i = 0; i < items.length; i++) {
        formated.push({
          type: "photo",
          id: `${query}-${i}`,
          photo_url: items[i].link,
          thumb_url: items[i].link,
          photo_width: items[i].image.width,
          photo_height: items[i].image.height
        });
      }

      return formated;
    });
  }
};

module.exports = helper;
