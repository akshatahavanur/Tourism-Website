const countries = [
    { name: "Australia", code: "AU" },
    { name: "Germany", code: "DE" },
    { name: "Hong Kong", code: "HK" },
    { name: "Iceland", code: "IS" },
    { name: "India", code: "IN" },
    { name: "Nepal", code: "NP" },
    { name: "Russian Federation", code: "RU" },
    { name: "Singapore", code: "SG" },
    { name: "Switzerland", code: "CH" },
    { name: "United Kingdom", code: "GB" },
    { name: "United States", code: "US" },
],

select_box = document.querySelector('.options'),
    // search_box = document.querySelector('.search-box'),
    // input_box = document.querySelector('input[type="tel"]'),
    selected_option = document.querySelector('.selected-option div');

let options = null;

for (country of countries) {
    const option = ``;

    select_box.querySelector('ol').insertAdjacentHTML('beforeend', option);
    options = document.querySelectorAll('.option');
}

function selectOption() {
    console.log(this);
    const icon = this.querySelector('.iconify').cloneNode(true),
        phone_code = this.querySelector('.country-name').cloneNode(true);

    selected_option.innerHTML = '';
    selected_option.append(icon, phone_code);

    // input_box.value = phone_code.innerText;

    select_box.classList.remove('active');
    selected_option.classList.remove('active');

    // search_box.value = '';
    select_box.querySelectorAll('.hide').forEach(el => el.classList.remove('hide'));
}

function searchCountry() {
    let search_query = search_box.value.toLowerCase();
    for (option of options) {
        let is_matched = option.querySelector('.country-name').innerText.toLowerCase().includes(search_query);
        option.classList.toggle('hide', !is_matched)
    }
}


selected_option.addEventListener('click', () => {
    select_box.classList.toggle('active');
    selected_option.classList.toggle('active');
})

options.forEach(option => option.addEventListener('click', selectOption));
search_box.addEventListener('input', searchCountry);