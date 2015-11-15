'use strict';

/**
 * @ngdoc service
 * @name contactManagerApp.CONSTANTS
 * @description
 * # CONSTANTS
 * Constant in the contactManagerApp.
 */
angular.module('contactManagerApp')
    .constant('CONSTANTS', {
        "DEFAULT_CONTACT_LIST":"data/defaultContactList.json",
        "DIRECTIVE_CONTACT_CARD":"views/contactcard.html",
        "DIRECTIVE_HEADER_SEARCH_BAR":"views/header-search-bar.html",
        "DIRECTIVE_CREATE_MODAL":"views/create-modal.html",
        "DIRECTIVE_EDIT_MODAL":"views/edit-modal.html",

    });