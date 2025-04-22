document.addEventListener('DOMContentLoaded', () => {
    const reportTable = document.querySelector('#reportTable tbody');
    const backbutton = document.getElementById('back-to-index');
    const logoutButton = document.getElementById('logout-btn');

    // Fetch data from /api/report
    fetch('/api/report')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.student_name}</td>
                    <td>${item.college}</td>
                    <td>${item.job_role}</td>
                    <td>${item.company}</td>
                    <td>${item.package}</td>
                    <td>${item.status}</td>
                `;
                reportTable.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching report data:', error);
            alert('An error occurred while fetching the report data.');
        });

    // Back button event listener
    backbutton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/recruiter_home';
    });

    // Logout button event listener
    logoutButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = '/';
    });
});
