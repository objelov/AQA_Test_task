class TrackList {
  constructor() {
    this.checkBox = 'input[type="checkbox"]';
    this.addTrackBtn = 'button[type="button"]';
    this.trackDetails = '.MuiGrid-container';
  }

  get trackList() {
    return cy.get('#tracklist');
  }

  addSingleTrackToPlaylist(trackName) {
    this.trackList
      .contains(trackName)
      .parents(this.trackDetails)
      .find(this.addTrackBtn)
      .click();

    return this;
  }

  addMultipleTracksToPlaylist(tracks) {
    const numberOfTracks = tracks.length;

    this.checkMultipleTracks(tracks);

    this.trackList
      .contains('button', `Add ${numberOfTracks} tracks`)
      .click();

    return this;
  }

  checkMultipleTracks(tracks) {
    tracks.forEach(trackName => {
      this.trackList
        .contains(trackName)
        .parents(this.trackDetails)
        .find(this.checkBox)
        .check();
    });

    return this;
  }
}

export default TrackList;
