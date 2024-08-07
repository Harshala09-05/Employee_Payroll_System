function redirect() {
  window.location.href = "./employee_form.html";
}
function deleteEmployee(element) {
    const custIdValue = $(element).closest('tr').data('id'); 
    console.log(custIdValue);

    fetch(`http://localhost:5500/employees/${custIdValue}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => displayData(json))
      .then(console.log("data deleted..."));
      $(element).closest('tr').remove(); 
}

function editEmployee(element) {
    const custIdValue = $(element).closest('tr').find('.Id').val();
  console.log(custIdValue);
  fetch(`http://localhost:5500/employees/${custIdValue}`)
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        console.log(data);

        // Store data in local storage for use in employee_form.html
        localStorage.setItem("updateData", JSON.stringify(data));

        // Redirect to employee_form.html
        redirect();
      }
    })
    .catch((error) => console.error("Error fetching employee data:", error));
}


$(document).ready(function () {
  $.ajax({
    url: "http://localhost:5500/employees",
    method: "GET",
    success: function (data) {
      data.forEach(function (employee) {
        const { profile, fname, gender, departments, salary, startDate } =
          employee;
        const departmentList = departments
          .map((department) => `<span>${department}</span>`)
          .join(" ");

        const newRow = `
                    <tr>
                    <td> ${profile}</td>
                        <td> ${fname}</td>
                        <td>${gender}</td>
                        <td>${departmentList}</td>
                        <td>${salary}</td>
                        <td>${startDate.day} ${startDate.month} ${startDate.year}</td>
                        <td>
                            <span><img id="icon1" src="/Assets/bin.png" alt="bin" onclick="deleteEmployee(this)"></span>
                            <img id="icon2" src="/Assets/pencil.png" alt="edit" onclick="editEmployee(this)">
                        </td>
                    </tr>
                `;

        $(".Empl-table").append(newRow);
      });
    },

    error: function (xhr, status, error) {
      console.error("Error deleting record:", status, error);
    },
  });
});


