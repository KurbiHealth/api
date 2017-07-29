/**
*  Messages schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.673Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Messages Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Messages = schema.define('messages', {
         text: { type: schema.Text },
         user_id: { type: schema.Number, limit: 11 },
         type: { type: schema.String, limit: 255 },
         parent_message_id: { type: schema.Number, limit: 11 },
         response: { type: schema.String, limit: 100 },
         likes: { type: schema.Number, limit: 6 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Messages;
};
