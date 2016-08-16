(function () {
    angular
        .module('dpShared')
        .constant('ACTIONS', {
            URL_CHANGE: 'URL_CHANGE',

            SHOW_SEARCH_RESULTS_BY_QUERY: 'SHOW_SEARCH_RESULTS_BY_QUERY',
            SHOW_SEARCH_RESULTS_BY_CLICK: 'SHOW_SEARCH_RESULTS_BY_CLICK',
            SHOW_SEARCH_RESULTS_CATEGORY: 'SHOW_SEARCH_RESULTS_CATEGORY',

            MAP_SET_BASELAYER: 'MAP_SET_BASELAYER',
            MAP_ADD_OVERLAY: 'MAP_ADD_OVERLAY',
            MAP_REMOVE_OVERLAY: 'MAP_REMOVE_OVERLAY',
            MAP_TOGGLE_VISIBILITY_OVERLAY: 'MAP_TOGGLE_VISIBILITY_OVERLAY',
            MAP_PAN: 'MAP_PAN',
            MAP_ZOOM: 'MAP_ZOOM',
            MAP_FULLSCREEN: 'MAP_FULLSCREEN',

            FETCH_DETAIL: 'FETCH_DETAIL',
            SHOW_DETAIL: 'SHOW_DETAIL',

            FETCH_STRAATBEELD: 'FETCH_STRAATBEELD',
            SHOW_STRAATBEELD_INITIAL: 'SHOW_STRAATBEELD_INITIAL',
            SHOW_STRAATBEELD_SUBSEQUENT: 'SHOW_STRAATBEELD_SUBSEQUENT',
            STRAATBEELD_SET_ORIENTATION: 'STRAATBEELD_SET_ORIENTATION',

            SHOW_LAYER_SELECTION: 'SHOW_LAYER_SELECTION',
            HIDE_LAYER_SELECTION: 'HIDE_LAYER_SELECTION',

            SHOW_HOME: 'SHOW_HOME',
            SHOW_PAGE: 'SHOW_PAGE'
        });
})();
