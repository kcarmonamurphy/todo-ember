import Component from '@ember/component';
import { computed } from  '@ember/object';

export default Component.extend({
	prioritiesMap: computed('model.@each', function() {
		let todos = this.get('model');

		let priorityTodos = todos.filter(function(todo){
			return todo.get('priority') > 1;
	});

	let priorities = priorityTodos.getEach('priority');

	let countsMap = new Map([...new Set(priorities)].map(
			x => [x, priorities.filter(y => y === x).length]
	));

		return countsMap;
	}),
});
