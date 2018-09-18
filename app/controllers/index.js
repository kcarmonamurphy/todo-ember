import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import StringMethodsMixin from '../mixins/string-methods';

export default Controller.extend(StringMethodsMixin, {

	store: service(),

	actions: {
		addToDo(todo) {
			let message = todo.get('message');
			let priority = todo.get('priority');

			if (!this.isBlank(message)) {
				this.get('store').createRecord('todo', {
					message: message,
					priority: priority,
					created: new Date()
				});
				todo.set('message', null);
				todo.set('priority', null);
			}
		},
		deleteToDo(todo) {
			todo.deleteRecord();
		}
	}
});
