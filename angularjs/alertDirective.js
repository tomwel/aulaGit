(function() {
    'use strict';

    angular.module("app").directive('alertDirective', alertDirective);
    
    //MainController.$inject = ['usuarioJupiterService', 'perfilUsuarioJupiterService','messageService',];
    
    function alertDirective(/*usuarioJupiterService, perfilUsuarioJupiterService, messageService*/){
    	var directive = {
            templateUrl: 'view/alertDirective.html',
            replace: true,
            restrict: 'EA',
            scope: {
                title: '@',
                messenge: '='
            }
        };
        return directive;
    
        /*function link(scope, element, attrs) {
          
        }*/  	
    	
    } 
})();























/*
(function() {
    'use strict';

    angular.module("app").directive('alertDirective', alertDirective);
    
    //MainController.$inject = ['usuarioJupiterService', 'perfilUsuarioJupiterService','messageService',];
    
    function alertDirective(usuarioJupiterService, perfilUsuarioJupiterService, messageService){
    	var directive = {
            link: link,
            templateUrl: '/template/is/located/here.html',
            restrict: 'EA'
        };
        return directive;
    
        function link(scope, element, attrs) {
          
        }   	
    	
    } 
})()
*/