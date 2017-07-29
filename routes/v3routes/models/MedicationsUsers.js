/**
*  MedicationsUsers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.673Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  MedicationsUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var MedicationsUsers = schema.define('medications_users', {
         medication_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         frequency: { type: schema.Number, limit: 9 },
         last_date_taken: { type: schema.Date },
         prescribing_doctors_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return MedicationsUsers;
};
