import PlayList from "../components/paylist";
import Search from "../components/search";
import TrackList from "../components/tracklist";

class PlaylistPage {
  constructor() {
    this.searchField = new Search();
    this.trackListSection = new TrackList();
    this.playListSection = new PlayList();
  }

  assertExistedTrackIsFound(trackName) {
    this.trackListSection
      .trackList
      .should('contain.text', trackName);

    return this;
  }

  assertValidationTrackIsNotFound(invalidTrackName, trackNotFoundValidation) {
    this.trackListSection
      .trackList
      .should('not.contain.text', invalidTrackName)
      .and('contain.text', trackNotFoundValidation);

    return this;
  }

  assertPlaylistTitleExists(playlistTitle) {
    this.playListSection
      .playList
      .should('contain.text', playlistTitle);

    return this;
  }

  assertPlaylistTitleNotExists(playlistTitle) {
    this.playListSection
      .playList
      .should('not.contain.text', playlistTitle);

    return this;
  }

  assertSingleTrackIsAddedToPlaylist(trackName) {
    this.playListSection
      .playList
      .should('contain.text', trackName);

    return this;
  }

  assertMultipleTracksAddedToPlaylist(tracks) {
    const numberOfTracks = tracks.length;

    tracks.forEach(trackName => {
      this.playListSection
        .playList
        .should('contain.text', trackName);
    });

    this.playListSection
      .playList
      .find(this.playListSection.trackDetails)
      .should('have.length', numberOfTracks);

    return this;
  }

  assertSingleTrackRemovedFromPlaylist(trackName) {
    this.playListSection
      .playList
      .should('not.contain.text', trackName)
      .and('be.empty');

    return this;
  }

  assertMultipleTracksRemovedFromPlaylist() {
    this.playListSection
      .playList
      .should('be.empty');

    return this;
  }
}

export default PlaylistPage;
