/**
*  Paths schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.674Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Paths Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Paths = schema.define('paths', {
         user_id: { type: schema.Number, limit: 11 },
         goal_id: { type: schema.Number, limit: 11 },
         name: { type: schema.String, limit: 100 },
         overview: { type: schema.Text },
         full_description: { type: schema.Text },
         background_image: { type: schema.String, limit: 100 },
         location: { type: schema.String, limit: 200 },
         weekly_frequency: { type: schema.Boolean, limit: 4 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Paths;
};
