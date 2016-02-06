module.exports = function(router,connection,validModels,joins,Q){

	var checkForOwnerRecursively = function(promise,userId,tableName,tableParent,fieldArr){

		if(promise == ''){
			var returnPromise = true;
			var promise = Q.defer();
		}else{
			var returnPromise = false;
		}

		if(tableParent == 'addresses' ){
		    var fieldKey = 'address_id';
		}else if(tableParent == 'exercises_done'){
		    var fieldKey = 'exercises_done_id';
		}else if(tableParent == 'goals_journal_entry'){
		    var fieldKey = 'goals_journal_entry';
		}else if(tableParent == 'goal_activities'){
		    var fieldKey = 'goal_activity_id';
		}else if(tableParent == 'health_care_org'){
		    var fieldKey = 'health_care_org_id';
		}else if(tableParent == 'journal_entries'){
		    var fieldKey = 'journal_entry_id';
		}else if(tableParent == 'medications_taken'){
		    var fieldKey = 'medications_taken_id';
		}else if(tableParent == 'othertreatments_taken'){
		    var fieldKey = 'othertreatments_taken_id';
		}else if(tableParent == 'path_steps_done'){
		    var fieldKey = 'path_steps_done_id';
		}else if(tableParent == 'searches'){
		    var fieldKey = 'search_id';
		}else if(tableParent == 'search_queries'){
		    var fieldKey = 'search_query_id';
		}else if(tableParent == 'symptom_categories'){
		    var fieldKey = 'symptom_category_id';
		}else if(tableParent == 'user_role_healthcareprof'){
		    var fieldKey = 'user_role_healthcareprof_id';
		}else if(tableParent == 'user_symptom_searches'){
		    var fieldKey = 'user_symptom_search_id';
		}else{
		    var fieldKey = tableParent.substring(0,tableParent.length - 1) + '_id';
		}

		// the notes & images tables do not have parent id's, so do not fall into the normal flow of relationships
		// that allows for this recursive security policy to work. This needs work -Matt Eckman 2/6/2016
		if(tableName == 'notes' || tableName == 'images'){
			promise.resolve();
		}

		queryString = 'SELECT * FROM ' + tableParent + ' WHERE id=' + fieldArr[fieldKey];

		connection.query(queryString,function(error,data){
			if(error){
				promise.reject(queryString + error);
			}else if(data[0].length == 0){
				// if length is 0, then there's no parent relationship, error out
				promise.reject('no parent relationship on line 51');
			}else if(data[0].user_id==userId){
				// then all is good, return success
				promise.resolve();
			}else{
				// there was a relationship, but no user_id, so keep going
				tableCurrent = tableParent;
				tableParent = validModels[tableCurrent].join;
				checkForOwnerRecursively(promise,userId,tableParent,data[0]);
			}
		});

		if(returnPromise == true){
			return promise.promise;
		}
	}

	return {
		'checkForOwnerRecursively': checkForOwnerRecursively
	}

}; // end modules.exports