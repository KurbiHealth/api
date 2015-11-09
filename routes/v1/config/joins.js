var joins = {
	'actions': 
		{
			'actions_users': 'actions.id=actions_users.actions_id'
		}	
	,
	'actions_users':
		{
			'actions': 'actions_users.actions_id=actions.id',
			'users': 'actions_users.user_id=user.id'
		}
	,
	'addresses':
		{
			'users': 'addresses.users_id=users.id'
		}
	,
	'appointments':
		{
			'appointments_users': 'appointments.id=appointments_users.appointment_id'
		}
	,
	'appointments_users': 
		{
			'users': 'appointments_users.user_id=users.id',
			'appointments': 'appointments_users.appointment_id=appointments.id'
		}
	,
	'care_teams':
		{
			'users': 'care_teams.user_id=users.id',
			'care_team_members': 'care_teams.id=care_team_members.care_team_id'
		}
	,
	'care_team_members':
		{
			'users': 'users.id=care_team_members.member_user_id',
			'care_teams': 'care_team_members.care_team_id=care_teams.id'
		}
	,
	'care_team_orgs':
		{
			'users': 'users.id=care_team_orgs.user_id',
			'health_care_orgs': 'health_care_orgs.id=care_team_orgs.health_care_org_id'
		}
	,
	'diseases':
		{
			'disease_conditions': 'diseases.id=disease_conditions.disease_id'
		}
	,
	'disease_conditions':
		{
			'diseases': 'disease_conditions.disease_id=diseases.id'
		}
	,
	'disease_condition_symptoms':
		{
			'disease_conditions': 'disease_condition_symptoms.disease_condition_id=disease_conditions.id',
			'symptoms': 'disease_condition_symptoms.symptom_id=symptoms.id'
		}
	,
	'exercises':
		{
			'exercises_done': 'exercises.id=exercises_done.exercise_id',
			'exercises_users': 'exercises.id=exercises_users.exercises_id'
		}
	,
	'exercises_done':
		{
			'exercises': 'exercises_done.exercise_id=exercises.id',
			'users': 'exercises_done.user_id=users.id'
		}
	,
	'exercises_users':
		{
			'exercises': 'exercises_users.exercise_id=exercises.id',
			'users': 'exercises_users.user_id=users.id'
		}
	,
	'goals':
		{
			'users': 'users.id=goals.user_id',
			'goal_activities': 'goals.goal_activity_id=goal_activities.id',
			'goals_journal_entry': 'goals.id=goals_journal_entry.goal_id',
			'goals_supporters': 'goals.id=goals_supporters.goal_id',
			'paths': 'goals.id=paths.goal_id'
		}
	, 
	'goals_journal_entry':
		{
			'goals': 'goals.id=goals_journal_entry.goal_id',
			'journal_entries': 'goals_journal_entry.journal_entry_id=journal_entries.id'
		}
	,
	'goals_supporters':
		{
			'goals': 'goals.id=goals_supporters.goal_id',
			'users': 'users.id=goals_supporters.supporter_user_id'

		}
	,
	'goal_activities':
		{
			'goals': 'goals_activities.id=goals.goal_activity_id'
		}
	,
	'health_care_org':
		{
			'care_team_orgs': 'health_care_org.id=care_team_orgs.health_care_org_id'
		}
	,
	'images':
		{
			'journal_entry_components': 'images.id=journal_entry_components.image_id'
		}
	,
	'journal_entries':
		{
			'journal_entry_components': 'journal_entries.id=journal_entry_components.journal_entry_id',
			'users': 'users.id=journal_entries.user_id'
		}
	,
	'journal_entry_components':
		{
			'journal_entries': 'journal_entry_components.journal_entry_id=journal_entries.id',
			'notes': 'notes.id=journal_entry_components.note_id',
			'symptoms': 'symptoms.id=journal_entry_components.symptom_id',
			'images': 'images.id=journal_entry_components.image_id'
		}
	,
	'medications':
		{
			'medications_taken': 'medications.id=medications_taken.medication_id',
			'medications_users': 'medications.id=medications_users.medication_id'
		}
	,
	'medications_taken':
		{
			'medications': 'medications.id=medications_taken.medication_id',
			'users': 'users.id=medications_taken.user_id'
		}
	,
	'medications_users':
		{
			'medications': 'medications.id=medications_users.medication_id',
			'users': 'users.id=medications_users.user_id'
		}
	,
	'messages':
		{
			'users': 'messages.author_user_id=users.id',
			'messages': 'messages.parent_message_id=messages.id'
		}
	,
	'message_recipients':
		{
			'users': 'users.id=message_recipients.recipient_user_id',
			'messages': 'messages.id=message_recipients.message_id'
		}
	,
	'notes':
		{
			'journal_entry_components': 'notes.id=journal_entry_components.note_id'
		}
	,
	'othertreatments':
		{
			'othertreatments_taken': 'othertreatments.id=othertreatments_taken.othertreatments_id',
			'othertreatments_done': 'othertreatments.id=othertreatments_done.othertreatments.id'
		}
	,
	'othertreatments_taken':
		{
			'othertreatments': 'othertreatments.id=othertreatments_taken.othertreatments_id',
			'users': 'users.id=othertreatments_taken.user_id'
		}
	,
	'othertreatments_users':
		{
			'othertreatments': 'othertreatments.id=othertreatments_done.othertreatments.id',
			'users': 'users.id=othertreatments_done.user_id'
		}
	,
	'paths':
		{
			'goals': 'goals.id=paths.goal_id',
			'path_steps': 'paths.id=path_steps.path_id',
			'path_toolkit_items': 'paths.id=path_toolkit_items.path_id'
			//'users': 'paths.user_id=users.id'
		}
	,
	'path_steps':
		{
			'paths': 'paths.id=path_steps.path_id'
		}
	,
	'path_steps_done':
		{
			'path_steps': 'path_steps.id=path_steps_done.path_steps_id'
		}
	,
	'path_toolkit_items':
		{
			'paths': 'path.id=path_toolkit_items.path_id'
		}
	,
	'searches':
		{
			'users': 'users.id=searches.user_id',
			'search_queries': 'searches.search_query_id=search_queries.id'
		}
	,
	'search_queries':
		{
			'searches': 'search_queries.search_query_id=searches.id'
		}
	,
	'symptoms':
		{
			'symptom_categories': 'symptoms.symptom_category_id=symptom_categories.id',
			'diseases': 'symptoms.disease_id=diseases.id',
			'disease_condition_symptoms': 'symptoms.disease_condition_symptom_id=disease_condition_symptoms.symptom_id',
			'journal_entry_components': 'symptoms.id=journal_entry_components.symptom_id'
		}
	,
	'symptom_categories': 
		{
			'symptoms': 'symptom_categories.id=symptoms.symptom_category_id'
		}
	,
	'users': 
		{
			'actions_users': 'users.id=actions_users.user_id',
			'addresses': 'users.id=addresses.user_id',
			'appointments_users': 'users.id=appointments_users.user_id',
			'care_teams': 'users.id=care_teams.user_id',
			'care_team_members': 'users.id=care_team_members.user_id',
			'care_team_orgs': 'users.id=care_team_orgs.user_id',
			'exercises_done': 'users.id=exercises_done.user_id',
			'exercises_users': 'users.id=exercises_users.user_id',
			'goals_daily_users': 'users.id=goals_daily_users.user_id',
			'goals_daily_users_supporters': 'users.id=goals_daily_users_supporters.user_id',
			'goals_life_users': 'users.id=goals_life_users.user_id',
			'journal_entry': 'users.id=journal_entries.user_id',
			'medications_taken': 'users.id=medications_taken.user_id',
			'medications_users': 'users.id=medications_users.user_id',
			'messages': 'users.id=messages_author_person_id',
			'message_recipients': 'users.id=message_recipients.recipient_user_id',
			'othertreatments_taken': 'users.id=othertreatments_taken.user_id',
			'othertreatments_users': 'users.id=othertreatments_users.user_id',
			'searches': 'users.id=searches.user_id',
			'user_defined_symptoms': 'users.id=user_defined_symptoms.user_id',
			'user_role_employee': 'users.id=user_role_employee.user_id',
			'user_role_healthcareprof': 'users.id=user_role_healthcareprof.user_id',
			'user_role_patients': 'users.id=user_role_patients.user_id',
			'user_role_supporters': 'users.id=user_role_supporters.user_id',
			'user_symptom_searches': 'users.id=user_symptom_searches.user_id',
			'paths': 'users.id=paths.user_id'
		}
	,
	'user_defined_symptoms': 
		{
			'users': 'user_defined_symptoms.user_id=users.id'
		}
	,
	'user_role_employee':
		{
			'users': 'users.id=user_role_employee.user_id'
		}
	,
	'user_role_healthcareprof':
		{
			'users': 'users.id=user_role_employee.user_id'
		}
	,
	'user_role_patients':
		{
			'users': 'user_role_patients.user_id'
		}
	,
	'user_role_supporters':
		{
			'users': 'user_role_supporters.user_id=users.id'
		}
	,
	'user_symptom_searches':
		{
			'users': 'user_symptom_searches.user_id=users.id',
			'symptoms': 'user_symptom_searches.symptom_id=symptoms.id'
		}
};

module.exports = joins;