import Component from '@ember/component';
import { computed } from  '@ember/object';
import StringMethodsMixin from '../mixins/string-methods';

export default Component.extend(StringMethodsMixin, {

	isNotValid: computed('model.message', function() {
		let message = this.get('model.message');
        return this.isBlank(message);
    }),

	actions: {
		addToDo(todo) {
			this.get('addToDo')(todo);
		}
	}
});