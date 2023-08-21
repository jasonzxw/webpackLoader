import data from '../build.json'
import _ from 'lodash';
import { add } from './test/test'
import './style.css';
import('lodash').then(({ default: _ }) =>{
    console.log(_.join(['hello'],''))
})
console.log(add)
console.log(data)
console.log(`hello webpack`)