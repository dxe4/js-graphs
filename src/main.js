requirejs.config({
    urlArgs: 'bustCache=' + (new Date()).getTime(),

    paths: {
        'svgjs': '../static'
    },

    callback: function () {
        "use strict";

        require(["app"], function (App) {
            var app = new App();
            app.start();
        });
    }
});