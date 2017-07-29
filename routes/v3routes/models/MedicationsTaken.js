/**
*  MedicationsTaken schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.673Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  MedicationsTaken Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var MedicationsTaken = schema.define('medications_taken', {
         patient_id: { type: schema.Number, limit: 11 },
         medication_id: { type: schema.Number, limit: 11 },
         date_taken: { type: schema.Date }
    },{


    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return MedicationsTaken;
};
