function redirect(){
    window.location.href = './employee_form.html';
}
function deleteEmployee(element) {
    
    console.log('Delete employee ');
}

function editEmployee(element) {
   
    console.log('Edit employee ');
}

$(document).ready(function() {
    $.ajax({
        url:"http://localhost:5500/employees",
        method: "GET",
        success: function (data) {
            data.forEach(function(employee) {
                const { fname, profile ,gender, departments, salary, startDate } = employee;
                const departmentList = departments.map(department => `<span>${department}</span>`).join(' ');
                
                const newRow = `
                    <tr>
                        <td> ${fname}</td>
                        <td> ${profile}</td>
                        <td>${gender}</td>
                        <td>${departmentList}</td>
                        <td>${salary}</td>
                        <td>${startDate.day} ${startDate.month} ${startDate.year}</td>
                        <td>
                            <span><img id="icon" src="/Assets/bin.png" alt="bin" onclick="deleteEmployee(this)"></span>
                            <img id="icon" src="/Assets/pencil.png" alt="edit" onclick="editEmployee(this)">
                        </td>
                    </tr>
                `;
            
                $('.Empl-table').append(newRow);
                
            });
        },
            
            error:  function (xhr, status, error) {
                console.error("Error deleting record:", status, error);
                
            }
    
    });
});