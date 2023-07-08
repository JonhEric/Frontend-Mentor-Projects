const inputDay = document.querySelector('.day');
const inputMonth = document.querySelector('.month');
const inputYear = document.querySelector('.year');
let month = parseInt(inputMonth.value);
let year = parseInt(inputYear.value);
const submit = document.querySelector('.btn');
const invalid = document.querySelectorAll('.invalid');
// date local
const date = new Date();
console.log(date);


// console.log(invalid);
inputDay.addEventListener('input', () => {
    let day = inputDay.value;
    console.log(day);
})

submit.addEventListener('click',(Event) => {
    Event.preventDefault();
    let month = parseInt(inputMonth.value);
    let year = parseInt(inputYear.value);
    let day = inputDay.value;

    const birthday = new Date(year, month, day);
    console.log(birthday);

    if (day === '') {
        invalid[0].innerText = 'This field is required';
    } else if (parseInt(day) < 1 || parseInt(day) > 31) {
        invalid[0].innerText = 'Must be a valid day';
    }else {
        invalid[0].innerText = '';
    }
    

    
});