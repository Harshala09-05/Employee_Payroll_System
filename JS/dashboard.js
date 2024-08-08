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
debugger
function update(element) {
  const $row = $(element).closest('tr');
  const custIdValue = $row.data('id');
  console.log('Row:', $row);
  console.log('Customer ID:', custIdValue);
  
  if (!custIdValue) {
    console.error("No customer ID found");
    return;
  }

  fetch(`http://localhost:5500/employees/${custIdValue}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data) {
        console.log(data);
        $("#fname").val(data.name);

        $('[name="gender"]')
          .filter('[value="' + data.gender + '"]')
          .prop("checked", true);

        $('[name="prof"]')
          .filter('[value="' + data.profileImage + '"]')
          .prop("checked", true);

        $("#salary").val(data.salary);

        $("#start").val(data.startDate.day);
        $("#start1").val(data.startDate.month);
        $("#start2").val(data.startDate.year);

        $("#notes").val(data.notes);

        data.departments.forEach(function (department) {
          $('[name="dep"][value="' + department + '"]').prop("checked", true);
        });

        $("#submit").text("Update");
        localStorage.removeItem("updateData");
        localStorage.setItem("updateData", JSON.stringify(data));

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
                    <tr id="newrow">
                    <tr data-id="${employee.id}">
                    
                    <td id="name"> ${profile} ${fname}</td>
                        
                      
                        <td id="gender">${gender}</td>
                        <td id="dept">${departmentList}</td>
                        <td id="sal">${salary}</td>
                        <td id="date">${startDate.day} ${startDate.month} ${startDate.year}</td>
                        <td id="action">
                           <div> <span><img id="icon1" src="/Assets/bin.png" alt="bin" onclick="deleteEmployee(this)"></span>
                            <img id="icon2" src="/Assets/pencil.png" alt="edit" onclick="update(this)"></div>
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


