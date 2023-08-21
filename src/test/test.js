import _ from 'lodash'

import('lodash').then(({ default: _ }) =>{
    console.log(_.join(['hello'],''))
})
export const add = function(){
    console.log(_.add(1,2))
}