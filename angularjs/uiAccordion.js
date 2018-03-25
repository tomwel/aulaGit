(function() {
    'use strict';
    angular.module("uiAccordionTom", [])
    .directive('uiAccodion', dataDirective)
    .filter('filterid', filterIdAccordion);

    function dataDirective(){
        var directive = {
            template: `<div class="list-group" id="{{ accordionParent }}">
                            <a class="list-group-item list-group-item-action flex-column align-items-start" 
                            data-toggle="collapse" 
                            data-target="#collapse{{ $index }}" 
                            aria-expanded="false" 
                            aria-controls="collapse {{ $index }}"
                            ng-repeat="acc in accordions">
                                <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{ acc.titulo }}</h5>
                                <small>{{ acc.data }}</small>
                                </div>
                                <div id="collapse{{ $index }}" class="collapse" data-parent="{{ accordionParent | filterid }}">
                                    <p class="mb-1">{{ acc.conteudo }}</p>
                                    <!-- <small>Donec id elit non mi porta.</small> -->
                                </div>
                            </a>
                        </div>`,
            replace: true,
            restrict: 'EA',
            scope: {
                isActiveParent: '@',
                accordions: '='
            },
            link: link,
        }
        return directive;
        
        function link(scope, element, attrs, ctrl){
            if(JSON.parse(scope.isActiveParent)){
                scope.accordionParent = "accordion";
            }
            
        }
    }

    function filterIdAccordion(){
        return function(input){
            if(input !== ''){
                return '#' + input; 
            }

            return '';
        }
    }

})();