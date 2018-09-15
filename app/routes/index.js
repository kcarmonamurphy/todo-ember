import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return this.store.peekAll('todo');
	},

	actions: {
		addToDo(todo) {
			this.store.createRecord('todo', {
				message: todo.get('message'),
				created: new Date()
			});
			todo.set('message', null);
		}
	}
});
