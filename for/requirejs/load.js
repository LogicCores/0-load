
;({"APPEND_AS_GLOBAL":"cores/load/for/requirejs/node_modules/requirejs/require.js"});


exports.load = function (uri) {

    return new window.Promise(function (resolve, reject) {

        return window.requirejs([
            uri
        ], function (exports) {

            return resolve(exports);
        }, reject);
    });

}
