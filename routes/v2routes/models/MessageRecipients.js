/**
*  MessageRecipients schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.673Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  MessageRecipients Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var MessageRecipients = schema.define('message_recipients', {
         message_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return MessageRecipients;
};
