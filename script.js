let expandButton = document.getElementById('expand-button');
let sidebar = document.getElementById('sidebar');

expandButton.addEventListener('click', function() {
    expandButton.classList.toggle('expanded');
    sidebar.classList.toggle('expanded');
});