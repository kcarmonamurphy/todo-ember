import Mixin from '@ember/object/mixin';

export default Mixin.create({

	isBlank(str) {
		//uses regex to determine if string is
		//only whitespace (^\s*$)
		return (!str || /^\s*$/.test(str));
	}
	
});
