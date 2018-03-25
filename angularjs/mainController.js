(function() {
    'use strict';
    console.log("[ mainController -  MainController iniciado ]");

    angular.module("app").controller('MainController', MainController);
    
    //MainController.$inject = ['usuarioJupiterService', 'perfilUsuarioJupiterService','messageService',];
    
    function MainController(/*usuarioJupiterService, perfilUsuarioJupiterService, messageService*/){
    	var vm = this;
    	
    	//Variáveis
        vm.title = 'Employee Management';
        vm.error = 'Aconteceu algo errado!';
        vm.phoneNumber = '995146111';
        vm.arrayAccordion = [
            {
                titulo:'List group item heading 1',
                data:'17/02/2018',
                conteudo:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            },
            {
                titulo:'List group item heading 2',
                data:'17/02/2018',
                conteudo:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            },
            {
                titulo:'List group item heading 3',
                data:'17/02/2018',
                conteudo:'Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.'
            }
        ];
    	
    	//Métodos
        vm.printAnyMessenge = printAnyMessenge;
        vm.printPhoneNumber = printPhoneNumber;
        
        function printAnyMessenge(messenge){
            console.log();
        }  
        
        function printPhoneNumber(){
            console.log(vm.phoneNumber);
        }
    	
    } 
})();