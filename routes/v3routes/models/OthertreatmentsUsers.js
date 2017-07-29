/**
*  OthertreatmentsUsers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.674Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  OthertreatmentsUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var OthertreatmentsUsers = schema.define('othertreatments_users', {
         othertreatments_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         frequency: { type: schema.String, limit: 15 },
         last_date_done: { type: schema.Date },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return OthertreatmentsUsers;
};
