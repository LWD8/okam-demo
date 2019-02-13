/**
 * @file Build ant mini program build config
 * @author LWD8<948929032@qq.com>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'ant_dist',
        depDir: 'src/common'
    },
    localPolyfill: ['async']
});
