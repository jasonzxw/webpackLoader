/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-30 14:34:14
 * @FilePath: \webpackLoader\src\index.js
 */
import(/* webpackChunkName: 'dynamic' */ './test/dynamic').then(val => console.log(val))
import test from './test/test'

console.log(test)