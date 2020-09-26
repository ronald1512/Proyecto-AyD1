'use strict';

module.exports = function registro() {
    return {
        url: "registro",
        getButtonByName: function (buttonName) {
            var mapping = {
                "Registrarme": ".btn"
            };

            return mapping[buttonName];
        },
        getFieldByName: function (name) {
            var mapping = {
                "correo": 'input[ng-model="registro.correo"]',
                "contraseña": 'input[ng-model="registro.contraseña"]'
            };

            return mapping[name];
        }
    };
}();