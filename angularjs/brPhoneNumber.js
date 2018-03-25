(function() {
    'use strict';
    angular.module("uiMaskTom", []);
    angular.module("uiMaskTom").directive('brPhoneNumber', dataDirective);

    function dataDirective(){
        var directive = {
            require: 'ngModel',
            link: link,
            restrict: 'A'
        }
        return directive;
        
        function link(scope, element, attrs, ctrl){
            
            var _formatphoneNumber = function(phoneNumber){
                phoneNumber = _clearMaskPhoneNumber(phoneNumber);

                
                if(phoneNumber.length > 2){
                    phoneNumber = "(" + phoneNumber.substring(0,2) + ") " + phoneNumber.substring(2);
                }
                
                if(phoneNumber.length > 13){
                    phoneNumber = phoneNumber.substring(0,10) + "-" + phoneNumber.substring(10,14);
                }

                if(phoneNumber.length > 9 && phoneNumber.length < 14){
                    phoneNumber = phoneNumber.substring(0,9) + "-" + phoneNumber.substring(9);
                }

                return phoneNumber;
            }

            var _clearMaskPhoneNumber = function(phoneNumber){
                return phoneNumber = phoneNumber.replace(/[^0-9]+/g, "");
            }
            
            element.bind("keyup", function(){
                ctrl.$setViewValue(_formatphoneNumber(ctrl.$viewValue));
                ctrl.$render();
            });

            ctrl.$parsers.push(function (value){
                return _clearMaskPhoneNumber(value);
            });
        }
    }


})()