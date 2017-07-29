/**
*  Symptoms schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.677Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  Symptoms Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var Symptoms = schema.define('symptoms', {
         technical_name: { type: schema.String, limit: 255 },
         colloquial_name: { type: schema.String, limit: 255 },
         description: { type: schema.Text },
         long_description: { type: schema.Text },
         symptom_category_id: { type: schema.Number, limit: 11 },
         disease_id: { type: schema.Number, limit: 11 },
         disease_condition_symptom_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{
//,
         indexes: {
            index_predefined_symptoms_on_symptom_category_id: {
                columns: 'symptom_category_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return Symptoms;
};
