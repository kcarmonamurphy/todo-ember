import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import StringMethodsMixin from '../mixins/string-methods';

export default Controller.extend(StringMethodsMixin, {

	store: service(),

	actions: {
		addToDo(todo) {
			let message = todo.get('message');

			if (!this.isBlank(message)) {
				this.get('store').createRecord('todo', {
					message: message,
					created: new Date()
				});
				todo.set('message', null);
			}
		},
		deleteToDo(todo) {
			todo.deleteRecord();
		}
	}
});
