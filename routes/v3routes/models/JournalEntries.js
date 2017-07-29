/**
*  JournalEntries schema
*
*  @version     0.0.1
*  @created     2016-04-12T23:46:19.672Z
*  @link        https://camintejs.com/
*  @wiki        https://github.com/biggora/caminte/wiki
*
*  Created by create-model script
**/

/**
*  Define  JournalEntries Model
*  @param  {Object}  schema
*  @return {Object}  model
*
*  @wiki   https://github.com/biggora/caminte/wiki/Defining-a-Model
**/
module.exports = function(schema){
    var JournalEntries = schema.define('journal_entries', {
         date: { type: schema.Date },
         note: { type: schema.Text },
         wellness_score: { type: schema.Number, limit: 9 },
         user_id: { type: schema.Number, limit: 11 },
         created: { type: schema.Date }
    },{
,
         indexes: {
            index_daily_records_on_patient_id: {
                columns: 'user_id'
            }
         }
    });

    /**
    *  Define any custom method
    *  or setup validations here
    **/

    return JournalEntries;
};
