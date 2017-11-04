(function(exports) {
    'use strict';
    class KspCfg {
        constructor() {

        }

        static encode(data) {
            let lines = [];

            transpile(data);

            function transpile(obj) {
                for (let key of Object.keys(obj)) {
                    if (typeof obj[key] === 'object') {
                        lines.push(key);
                        lines.push('{');
                        transpile(obj[key]);
                        lines.push('}');
                    } else if (typeof key === 'string') {
                        lines.push(key + ' = ' + obj[key])
                    }
                }
            }

            let final = lines.join('\r\n');
            return final;
        }

        static decode(string) {
            let obj = {};
            let arr = string.split('\r\n');
            let jsonstring = '{';

            for (let i = 0; i < arr.length; i++) {
                if (arr[i].split(' = ')[1] === undefined && arr[i] != '{' && arr[i] != '}') {
                    jsonstring += '"' + arr[i] + '":';
                } else if (arr[i] === '{' || arr[i] === '}') {
                    if (arr[i] === '{') {
                        jsonstring += '{';
                    } else if (arr[i] === '}') {
                        jsonstring += '}';
                        if (arr[i+1] !== '}' && i+1 != arr.length) {
                            jsonstring += ',';
                        }
                    }
                } else if (arr[i].split(' = ')[1] !== undefined && arr[i].split(' = ')[1] !== '') {
                    let tmpstr = '"' + arr[i].split(' = ')[0] + '"' + ':';
                    if (/^\d+$/.test(arr[i].split(' = ')[1])) {
                        tmpstr += arr[i].split(' = ')[1];
                    } else {
                        tmpstr += '"' + arr[i].split(' = ')[1] + '"';
                    }
                    tmpstr += ',';
                    jsonstring += tmpstr;
                }
            }

            jsonstring += '}';
            return JSON.parse(jsonstring);
        }
    }

    exports.KspCfg = KspCfg;
})(typeof window === 'undefined' ? module.exports : window);
