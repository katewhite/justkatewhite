import Ember from 'ember';

export function notCurrentProject(params) {
	let currentProject = params[0];
  	let projectToDisplay = params[1];
	if (currentProject === projectToDisplay) {
		return false;
	}
	else {
		return true;
	}
}

export default Ember.Helper.helper(notCurrentProject);
