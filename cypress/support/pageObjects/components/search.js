class Search {
  get searchField() {
    return cy.get('input[type="text"]');
  }

  typeTrackName(trackName) {
    this.searchField
      .type(trackName);

    return this;
  }
}

export default Search;
