/*
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-21 11:19:03
 * @FilePath: \webpackLoader\src\loader\consoleLoader.js
 */
module.exports = function(source){
    const { author , email} = this.getOptions();
    const newcontent = `
    /**
     * @Author:${author}
     * @Email:${email}
     * */
    
    ${source}
    `
    return newcontent
}