// function cancel() {
//     document.getElementById('cancelButton').addEventListener('click', function () {
//         if (confirm('Are you sure you want to cancel?')) {
//             document.getElementById('Empl-form').reset();
//         }
//     });
// }
// function sub() {
//     console.log("faa");
//     document.querySelector('#submit').addEventListener('click', function (event) {

// console.log('inside form')

//     });
//     const formData = {
//         fname: document.getElementById('fname').value,
//         profile: Array.from(document.getElementsByClassName("radio")).map(checkbox => checkbox.value),
//         gender: Array.from(document.getElementsByClassName("radio1")).map(checkbox => checkbox.value),
//         departments: Array.from(document.getElementsByClassName("checkbox")).map(checkbox => checkbox.value),
//         salary: document.getElementById('salary').value,
//         startDate: {
//             day: document.getElementById('start').value,
//             month: document.getElementById('start1').value,
//             year: document.getElementById('start2').value
//         },
//         notes: document.getElementById('notes').value
//     };

//     console.log(formData)
//     storeFormData(formData);

//     window.location.href = '/dashboard.html'

// }

// function readData() {
//     const profileElement = document.querySelector('input[name="profile"]:checked');
//     const genderElement = document.querySelector('input[name="gender"]:checked');
//     const departmentElements = document.querySelectorAll('input[name="department"]:checked');

//     if (!profileElement || !genderElement) {
//         alert('Please complete all required fields.');
//         throw new Error('Required fields are missing');
//     }

//     const formData = {
//         fname: document.getElementById('fname').value,
//         profile: document.getElementsByClassName("prof").value,
//         gender: document.getElementsByClassName("radio1").value,
//         departments: Array.from(departmentElements).map(checkbox => checkbox.value),
//         salary: document.getElementById('salary').value,
//         startDate: {
//             day: document.getElementById('start').value,
//             month: document.getElementById('start1').value,
//             year: document.getElementById('start2').value
//         },
//         notes: document.getElementById('notes').value
//     };
//     return formData;
// }

// function storeFormData(formData) {
//     localStorage.setItem('employeeFormData', JSON.stringify(formData));
//     alert('Form data stored locally!');
// }

// document.getElementById('reset').addEventListener('reset', function() {
//     if (confirm('Are you sure you want to reset the form?')) {
//         document.getElementById('reset').reset();
//     } else {
//         event.preventDefault();
//     }
// });
// $("#submit").click(function(){
//   var Name = $('#fname').val();
//   var ProfileImage = $('[name="prof"]');
// var profile;
// for (var i = 0; i < ProfileImage.length; i++) {
//   if (ProfileImage[i].checked) {
//     profile = ProfileImage[i].value;
//     break;
//   }
// }
// var genderElements = $('[name="gender"]');
// var gender;
// for (var i = 0; i < genderElements.length; i++) {
//   if (genderElements[i].checked) {
//     gender = genderElements[i].value;
//     break;
//   }
// }
// var departmentElements = $('[name="dep"]');
// var departments = [];
// for (var i = 0; i < departmentElements.length; i++) {
//     if (departmentElements[i].checked) {
//         departments.push(departmentElements[i].value);
//     }
//   }
//    var profile=$(document).ready(function () {
//     // When a profile image is clicked, mark the corresponding radio button as checked
//     $(".profile-image").click(function () {
//         var profileId = $(this).data("profile");
//         $("input[name='prof'][value='" + profileId + "']").prop("checked", true);
//     });

//     // Reset button logic to uncheck all radio buttons
//     $(".reset").click(function () {
//         $("input[name='prof']").prop("checked", false);
//     });
//    });
//   var gender = $(document).ready(function () {
//     // Function to get and print selected gender
//     function printSelectedGender() {
//         // Get the value of the selected radio button with name 'gender'
//         var selectedGender = $("input[name='gender']:checked").val();

//         if (selectedGender) {
//             console.log("Selected Gender:", selectedGender);
//         } else {
//             console.log("No gender selected");
//         }
//     }

//     // Attach the function to the button click event
//     $(".radio1").click(function () {
//         printSelectedGender();
//     });
    
//     // When "Female" button is clicked, set the female radio button
//     $(".check-female").click(function () {
//         $("#female").prop("checked", true);
//     });
    
//     // When "Reset" button is clicked, uncheck both gender radio buttons
//     $(".reset").click(function () {
//         $("#male").prop("checked", false);
//         $("#female").prop("checked", false);
//     });
//   });
//   var departmentElements = $('[name="dept"]');
//   var departments = [];
//   for (var i = 0; i < departmentElements.length; i++) {
//       if (departmentElements[i].checked) {
//           departments.push(departmentElements[i].value);
//       }
//   }

// var salary = $("#salary").val();
// var day = $("#start").val();
// var month = $("#start1").val();
// var year = $("#start2").val();

// var notes = $("#notes").val();


// var formData = {
//   fname: $("#fname").val(),
//   profileImage:  profile,
//   gender:  gender,
//   departments: departmentElements.map(function () { return this.value; }).get(),
//   salary:  salary,
//   startDate: {
//       day:  day,
//     month: month,
//       year: year
//   },
//   notes:  notes,
  
// };

// console.log(formData);
// console.log(profile)
// var formDataString = JSON.stringify(formData);
// localStorage.setItem(FormData,formDataString);



// $.ajax({
// url: 'http://localhost:5500/employees',
// type: 'POST',
// data: formDataString,
// success: function(response) {
//     alert("Form Data Submitted");
//     window.location.href = 'D:\Frontend\Employee_Payroll_System\Pages\dashboard.html';
// },
// error: function(xhr, status, error) {
//   console.error('An error occurred:', status, error);
//   console.log("Server response:", xhr.responseText);
// }
// });

// })
////
function sub() {

  // $("#submit").click(function (event) {
  // event.preventDefault();
   
  // var profile = $(document).ready(function() {
  //   $('input[name="prof"]:radio').click(function(){
  //       if ($('input[name=prof]:checked').val() == "1") {
  //           $("#img1").attr("src","/Assets/men.png");
      
  //       } else if ($('input[name=prof]:checked').val() == "2") {
  //         $("#img2").attr("src","/Assets/men.png");
      
  //       }else if ($('input[name=prof]:checked').val() == "3") {
  //         $("#img3").attr("src","/Assets/men.png");
      
  //       }else if ($('input[name=prof]:checked').val() == "4") {
  //         $("#img4").attr("src","/Assets/men.png");
      
  //       }
  //   });
  // });
  var profileElements = $('[name="prof"]');
  var profile = profileElements.filter(':checked').val();
  var fname = $('#fname').val();
  var genderElements = $('[name="gender"]');
  var gender = genderElements.filter(':checked').val();

    

  var salary = $("#salary").val();
  var day = $("#start").val();
  var month = $("#star1").val();
  var year = $("#start2").val();

  var notes = $("#notes").val();
  var departmentElements = $('[name="dep"]');
  var departments = departmentElements.filter(':checked').map(function () {
    return this.value;
  }).get();

  var formData = {
    fname: $("#fname").val(),
    gender: gender,
    profileImage: profile,
    salary: salary,
    startDate: {
      day: $("#start").val(),
      month: $("#start1").val(),
      year: $("#start2").val()
    },
    notes: notes,
    departments: departments
  };

  console.log(formData);

  var formDataString = JSON.stringify(formData);
  localStorage.setItem('FormData', formDataString);
  var check = $("#submit").text();
  if (check === "Submit") {
    $.ajax({
      url: "http://localhost:5500/employees",
      type: "POST",
      data: formDataString,
      success: function (response) {
        window.location.href = "./dashboard.html";
      },
      error: function (xhr, status, error) {
        console.error("An error occurred:", status, error);
      },
    });
  } else {
    var id = localStorage.getItem("key");
    console.log(id);
    
    $.ajax({
      url: 'http://localhost:5500/employees',
      type: 'POST',
      contentType: 'application/json',
      data: formDataString,
      success: function (response) {
        alert("Form Data Submitted");
        window.location.href = './dashboard.html';
      },
      error: function (xhr, status, error) {
        console.error('An error occurred:', status, error);
        console.log("Server response:", xhr.responseText);
      }
    });
    // });
  }




 

  $(document).ready(function () {
    var newdata = localStorage.getItem("updateData");
    var data = JSON.parse(newdata);
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
    }
  });
  $("#Reset").click(function () {
    console.log("cleared")
    $("#fname").val("");
  
    $('[name="gender"]').prop("checked", false);

    $('[name="prof"]').prop("checked", false);
  
    $("#salary").val("");
    $("#start").val("");
    $("#start1").val("");
    $("#start2").val("");
    $("#notes").val("");
  
    $('[name="dep"]').prop("checked", false);
  });
}