export default function(){
	var duration = 1000;
	this.transition (
		this.use('fade', { duration })
	);
	this.transition (
		this.hasClass('project-container'),
		this.use('fade', { duration: 1000 })
	)
}