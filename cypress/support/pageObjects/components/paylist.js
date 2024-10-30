import TrackList from "./tracklist";

class PlayList extends TrackList {
  constructor() {
    super();

    this.removeTrackBtn = 'button[type="button"]';
  }

  get playList() {
    return cy.get('#playlist');
  }

  removeSingleTrackFromPlaylist(trackName) {
    this.playList
      .contains(trackName)
      .parents(this.trackDetails)
      .find(this.removeTrackBtn)
      .click();

    return this;
  }

  removeMultipleTracksFromPlaylist(tracks) {
    const numberOfTracks = tracks.length;

    this.checkMultipleTracks(tracks);

    this.playList
      .contains('button', `Remove ${numberOfTracks} tracks`)
      .click();

    return this;
  }

  checkMultipleTracks(tracks) {
    tracks.forEach(trackName => {
      this.playList
        .contains(trackName)
        .parents(this.trackDetails)
        .find(this.checkBox)
        .check();
    });

    return this;
  }
}

export default PlayList;
