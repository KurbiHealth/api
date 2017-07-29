/**
*  ActionsUsers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.667Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  ActionsUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var ActionsUsers = schema.define('actions_users', {
         actions_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return ActionsUsers;
};
