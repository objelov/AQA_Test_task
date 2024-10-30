const { faker } = require('@faker-js/faker');
const tracks = require('../../fixtures/tracks.json');

const generateNonExistedTrack = faker.music.songName();

function getRandomTrack() {
  const trackList = tracks.existedTracks;
  const randomTrack = Math.floor(Math.random() * trackList.length);

  return trackList[randomTrack];
}

module.exports = {
  generateNonExistedTrack,
  getRandomTrack
};
