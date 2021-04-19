import { API_KEY, YOUTUBE_API_KEY } from '../config/youtube.js';

$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', API_KEY);
});

var searchYouTube = (query, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    // part: 'snippet',
    // key: options.key,
    // q: options.query,
    // maxReults: max,
    // type: 'video',
    // videoEmbaddable: 'true'
    part: 'snippet',
    q: query,
    key: API_KEY,
    maxReults: 5
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
