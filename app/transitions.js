export default function(){
	var duration = 1000;
	// this.transition(
	// 	this.toRoute(['about', 'work', 'contact', 'project']),
	// 	this.use('fade', { duration })
	// );
	this.transition (
		this.use('fade', { duration })
	);
}