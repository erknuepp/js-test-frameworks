'use strict';

const { By } = require("selenium-webdriver")
const BasePage = require("./basePage.js")

module.exports = class EbayPage extends BasePage {
    // selectors //
    searchBar = By.id("gh-ac");
    // results = By.id('res');

    constructor(driver, url) {
        super(driver, url);
    }

    // methods //

    async doSearch(term) {
        await this.setInput(this.searchBar, '${term}\n');
    }

    async getResults() {
        return await this.getText(this.results);
    }

};