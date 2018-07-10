var sizeToStyle = function(props) {
	return {
		left: props.x + 'px',
		top: props.y + 'px',
		width: props.width + 'px',
		height: props.height + 'px'
	};
};
var randomId = function() {
	return Math.random().toString(36).substr(2, 9);
};
var inputMixin = {
	data: function(){
		return {tag: ''};
	},
	methods: {
		edit: function(e) {
			this.$dispatch('edit', {tag: e.target.value});
		}
	}
};

export {sizeToStyle, randomId, inputMixin};