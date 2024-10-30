/// <reference types="cypress" />

import Search from '../support/pageObjects/components/search';
import PlayList from '../support/pageObjects/components/paylist';
import PlaylistPage from '../support/pageObjects/pages/playlistPage';
import TrackList from '../support/pageObjects/components/tracklist';
const {
  generateNonExistedTrack,
  getRandomTrack
} = require('../support/dataGeneration/generateTracks');

const playlistPage = new PlaylistPage();
const searchField = new Search();
const trackList = new TrackList();
const playList = new PlayList();

const validation = require('../fixtures/validation.json');

describe('Playlist flow', () => {
  let trackName,
    playListTitle,
    listOfTracks;

  beforeEach(() => {
    cy.wrap(getRandomTrack()).then((track) => {
      trackName = track;
    });

    cy.fixture('titles').then((titles) => {
      playListTitle = titles.playlistTitle;
    });

    cy.fixture('tracks').then((track) => {
      listOfTracks = track.existedTracks;
    });

    cy.visit('');
  });

  it(`should allow to find existed track using the "Search" field`, () => {
    searchField
      .typeTrackName(trackName);

    playlistPage
      .assertExistedTrackIsFound(trackName);
  });

  it(`should display error message when searching for non-existed track using the "Search" field`, () => {
    const invalidTrackName = generateNonExistedTrack;
    const trackNotFoundValidation = validation.trackNotFound;

    searchField
      .typeTrackName(invalidTrackName);

    playlistPage
      .assertValidationTrackIsNotFound(invalidTrackName, trackNotFoundValidation);
  });

  it(`should allow to add track to the playlist using "+" button`, () => {
    trackList
      .addSingleTrackToPlaylist(trackName);

    playlistPage
      .assertPlaylistTitleExists(playListTitle)
      .assertSingleTrackIsAddedToPlaylist(trackName);
  });

  it(`should allow to add multiple tracks to the playlist`, () => {
    trackList
      .addMultipleTracksToPlaylist(listOfTracks);

    playlistPage
      .assertPlaylistTitleExists(playListTitle)
      .assertMultipleTracksAddedToPlaylist(listOfTracks);
  });

  it(`should allow to remove track from the playlist`, () => {
    trackList
      .addSingleTrackToPlaylist(trackName);

    playList
      .removeSingleTrackFromPlaylist(trackName);

    playlistPage
      .assertSingleTrackRemovedFromPlaylist(trackName);
  });

  it(`should allow to remove multiple tracks from the playlist`, () => {
    trackList
      .addMultipleTracksToPlaylist(listOfTracks);

    playList
      .removeMultipleTracksFromPlaylist(listOfTracks);

    playlistPage
      .assertMultipleTracksRemovedFromPlaylist();
  });
});
