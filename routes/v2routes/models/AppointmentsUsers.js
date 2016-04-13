/**
*  AppointmentsUsers schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.668Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  AppointmentsUsers Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var AppointmentsUsers = schema.define('appointments_users', {
         appointment_id: { type: schema.Number, limit: 11 },
         user_id: { type: schema.Number, limit: 11 },
         if_patient: { type: schema.Boolean, limit: 4 },
         if_healthcareprof: { type: schema.Boolean, limit: 4 },
         created: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return AppointmentsUsers;
};
