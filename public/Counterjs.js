/**
 * Created by lipeishang on 17-5-20.
 */
const {count} = require('./components/Counter');

setTimeout(function () {
    console.log('read count after 1000ms in commonjs is ',count)
},1000);