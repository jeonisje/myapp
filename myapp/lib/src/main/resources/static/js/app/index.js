var main = {
	init : function() {
		var _this = this;
		$('#btn-save').on('click', function(){
			_this.save();
		});
		$('#btn-update').on('click', function(){
			_this.update();
		});
		$('#btn-delete').on('click', function(){
			_this.delete();
		});
	},
	save : function() {
		var data = {
			title : $('#title').val(),
			author : $('#author').val(),
			content : $('#content').val()
		};
		
		$.ajax({
			type : 'POST',
			url : '/api/v1/posts',
			dataType : 'json',
			contentType : 'application/json; char-set:utf-8',
			data : JSON.stringify(data)
		}).done(function(){
			alert('The post has been registered.');
			window.location.href = '/';
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	update : function() {
		var data = {
			title : $('#title').val(),
			content : $('#content').val()
		};
		
		var id = $('#id').val();
		
		$.ajax({
			type : 'PUT',
			url : '/api/v1/posts/' + id,
			dataType : 'json',
			contentType : 'application/json; char-set:utf-8',
			data : JSON.stringify(data)
		}).done(function(){
			alert('The post has been modified.');
			window.location.href = '/';
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	},
	delete : function() {
		var id = $('#id').val();
		
		$.ajax({
			type : 'DELETE',
			url : '/api/v1/posts/' + id,
			dataType : 'json',
			contentType : 'application/json; char-set:utf-8'			
		}).done(function(){
			alert('The post has been deleted.');
			window.location.href = '/';
		}).fail(function(error){
			alert(JSON.stringify(error));
		});
	}
}

main.init();