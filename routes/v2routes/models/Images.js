/**
*  Images schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.672Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Images Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Images = schema.define('images', {
         image_url: { type: schema.String, limit: 100 },
         description: { type: schema.String, limit: 300 },
         cloudinary_public_id: { type: schema.String, limit: 100 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Images;
};
