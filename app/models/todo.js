import DS from 'ember-data';

export default DS.Model.extend({
	message: DS.attr('string'),
	created: DS.attr('date'),
	priority: DS.attr('number')
});
