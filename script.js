document.addEventListener('DOMContentLoaded', function() {
	var openModalBtn = document.getElementById('open-modal');
	var modal = new bootstrap.Modal(document.getElementById('newton-modal'), {
		keyboard: false
	});

	openModalBtn.addEventListener('click', function() {
		modal.show();
	});
});
