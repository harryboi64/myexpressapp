// var mongoose = require('mongoose');

// var imageSchema = new mongoose.Schema({
//     name: String,
//     desc: String,
//     img:
//     {
//         data: Buffer,
//         contentType: String
//     }
// });

// //Image is a model which has a schema imageSchema

// module.exports = new mongoose.model('Image', imageSchema);
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ImageItem = new Schema({ any: {} });

      
  /* value:
    {
      BinData: Buffer
    }, */
  /* img: Buffer
}); */

module.exports = new mongoose.model('Image', ImageItem);