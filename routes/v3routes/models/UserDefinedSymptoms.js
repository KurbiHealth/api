/**
*  UserDefinedSymptoms schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.680Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  UserDefinedSymptoms Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var UserDefinedSymptoms = schema.define('user_defined_symptoms', {
         name: { type: schema.String, limit: 255 },
         description: { type: schema.Text },
         created: { type: schema.Date },
         user_id: { type: schema.Number, limit: 11 }
    },{
,
         indexes: {
            index_user_defined_symptoms_on_patient_id: {
                columns: 'user_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return UserDefinedSymptoms;
};
