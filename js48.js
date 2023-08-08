const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');

menuIcon.addEventListener('mouseenter', () => {
    sidebar.classList.add('sidebar-open');
});

sidebar.addEventListener('mouseleave', () => {
    sidebar.classList.remove('sidebar-open');
});


