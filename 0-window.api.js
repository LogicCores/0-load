
exports.forLib = function (LIB) {
    
    var exports = {};

    // TODO: Load adapters as needed on demand
    
    exports.adapters = {
        pinf: require("./for/pinf-loader-js/0-window.api").forLib(LIB),
        requirejs: require("./for/requirejs/0-window.api").forLib(LIB)
    
    //    systemjs: require("./for/systemjs")
    }

    return exports;
}
