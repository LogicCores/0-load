
require("../../../../lib/pinf-loader-js");

exports.load = function (uri) {

    return new window.Promise(function (resolve, reject) {

        return PINF.sandbox(uri, function (sandbox) {

            return resolve(sandbox);
        }, reject);
    });

}
