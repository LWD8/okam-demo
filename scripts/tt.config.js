/**
 * @file Build tt mini program config
 * @author LWD8<948929032@qq.com>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'tt_dist',
        depDir: 'src/common'
    },
    localPolyfill: [
        'async'
    ],
    processors: {
        postcss: {
            options: {
                plugins: [
                    ['postcss-url', {
                        url: 'inline'
                    }]
                ]
            }
        }
    }
});
