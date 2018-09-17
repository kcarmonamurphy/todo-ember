import Component from '@ember/component';

export default Component.extend({

	classNames: ['todo-note'],

	actions: {
		deleteToDo(todo) {
			this.get('deleteToDo')(todo);
		}
	}
});
