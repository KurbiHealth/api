/**
*  Diseases schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.669Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Diseases Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Diseases = schema.define('diseases', {
         name: { type: schema.String, limit: 255 },
         description: { type: schema.Text },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Diseases;
};
