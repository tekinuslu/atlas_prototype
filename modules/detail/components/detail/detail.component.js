(function () {
    angular
        .module('atlasDetail')
        .component('atlasDetail', {
            bindings: {
                endpoint: '@',
                isLoading: '='
            },
            templateUrl: 'modules/detail/components/detail/detail.html',
            controller: AtlasDetailController,
            controllerAs: 'vm'
        });

    AtlasDetailController.$inject = [
        '$scope',
        'store',
        'ACTIONS',
        'api',
        'endpointParser',
        'geometry',
        'geojson',
        'wgs84RdConverter'
    ];

    function AtlasDetailController (
        $scope,
        store,
        ACTIONS,
        api,
        endpointParser,
        geometry,
        geojson,
        wgs84RdConverter) {

        var vm = this;

        $scope.$watch('vm.endpoint', function (endpoint) {
            api.getByUrl(endpoint).then(function (data) {
                vm.apiData = {
                    results: data
                };

                vm.includeSrc = endpointParser.parseEndpoint(endpoint).templateUrl;

                geometry.getGeoJSON(endpoint).then(function (geometry) {
                    vm.location = wgs84RdConverter.rdToWgs84(geojson.getCenter(geometry));

                    store.dispatch({
                        type: ACTIONS.SHOW_DETAIL,
                        payload: {
                            location: vm.location,
                            geometry: geometry
                        }
                    });
                });
            });
        });
    }
})();