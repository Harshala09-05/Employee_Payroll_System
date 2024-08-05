
function cancel() {
    document.getElementById('cancelButton').addEventListener('click', function () {
        if (confirm('Are you sure you want to cancel?')) {
            document.getElementById('Empl-form').reset();
        }
    });
}
function sub() {
    console.log("faa");
    document.querySelector('#submit').addEventListener('click', function (event) {
       
console.log('inside form')
       
        
    });
    const formData = {
        fname: document.getElementById('fname').value,
        profile: Array.from(document.getElementsByClassName("radio")).map(checkbox => checkbox.value),
        gender: Array.from(document.getElementsByClassName("radio1")).map(checkbox => checkbox.value),
        departments: Array.from(document.getElementsByClassName("checkbox")).map(checkbox => checkbox.value),
        salary: document.getElementById('salary').value,
        startDate: {
            day: document.getElementById('start').value,
            month: document.getElementById('start1').value,
            year: document.getElementById('start2').value
        },
        notes: document.getElementById('notes').value
    };
    
    console.log(formData)
    storeFormData(formData);

    
    window.location.href = '/dashboard.html'
    
   
}


function readData() {
    const profileElement = document.querySelector('input[name="profile"]:checked');
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const departmentElements = document.querySelectorAll('input[name="department"]:checked');

    if (!profileElement || !genderElement) {
        alert('Please complete all required fields.');
        throw new Error('Required fields are missing');
    }

    const formData = {
        fname: document.getElementById('fname').value,
        profile: document.getElementsByClassName("prof").value,
        gender: document.getElementsByClassName("radio1").value,
        departments: Array.from(departmentElements).map(checkbox => checkbox.value),
        salary: document.getElementById('salary').value,
        startDate: {
            day: document.getElementById('start').value,
            month: document.getElementById('start1').value,
            year: document.getElementById('start2').value
        },
        notes: document.getElementById('notes').value
    };
    return formData;
}

function storeFormData(formData) {
    localStorage.setItem('employeeFormData', JSON.stringify(formData));
    alert('Form data stored locally!');
}

document.getElementById('reset').addEventListener('reset', function() {
    if (confirm('Are you sure you want to reset the form?')) {
        document.getElementById('reset').reset();
    } else {
        event.preventDefault();
    }
});
