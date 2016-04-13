/**
*  UserSymptomSearches schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.681Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  UserSymptomSearches Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var UserSymptomSearches = schema.define('user_symptom_searches', {
         created: { type: schema.Date },
         user_id: { type: schema.Number, limit: 11 },
         symptom_id: { type: schema.Number, limit: 11 }
    },{
,
         indexes: {
            index_patient_symptom_searches_on_patient_id: {
                columns: 'user_id'
            },
            index_patient_symptom_searches_on_predefined_symptom_id: {
                columns: 'symptom_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return UserSymptomSearches;
};
