/*let formData = [];
let fields = document.querySelectorAll('input');
let form = document.querySelector(".magicForm");
let label1 = document.querySelector("#first-name");
let label2 = document.querySelector("#last-name");
let label3 = document.querySelector("#email");
let label4 = document.querySelector("#phone");
let label5 = document.querySelector("#company");
let label6 = document.querySelector("#address");
let history = document.querySelector(".submit-history-name");
let historyFN = document.querySelector(".card-first-name")
let saveBtn = document.querySelector("#submit-button");*/

/*label1.value = localStorage.getItem('label1');
label1.oninput = () => {
    localStorage.setItem('label1', label1.value)
};
historyFN.oninput1 = () => {
    localStorage.getItem('label1')
    localStorage.setItem('historyFN', label1.value)
};


label2.value = localStorage.getItem('label2');
label2.oninput = () => {
    localStorage.setItem('label2', label2.value)
};

label3.value = localStorage.getItem('label3');
label3.oninput = () => {
    localStorage.setItem('label3', label3.value)
};

label4.value = localStorage.getItem('label4');
label4.oninput = () => {
    localStorage.setItem('label4', label4.value)
};

label5.value = localStorage.getItem('label5');
label5.oninput = () => {
    localStorage.setItem('label5', label5.value)
};

label6.value = localStorage.getItem('label6');
label6.oninput = () => {
    localStorage.setItem('label6', label6.value)
};

//historyFN.value = localStorage.getItem('label1');

form.onsubmit = e => {
    e.target.submit();
    e.target.reset();
    return false;
};


butSubmit.addEventListener("click", function() {
    localStorage.clear();
});*/
const form = document.getElementById('form')
const names = ["first-name", "last-name", "email", "phone", "company", 'address']
const formWrap = document.getElementById('form-wrap')
const submitBtn = document.getElementById('submit-button')


const htmlString = `<div class="submit-history-card">
        <p>First Name</p>
      <p class="card-first-name">New</p>
      <p>Last name</p>
      <p class="card-last-name">New</p>
      <p>Email</p>
      <p class="card-email">New</p>
      <p>Phone</p>
      <p class="card-phone">New</p>
      <p>Company</p>
      <p class="card-company">New</p>
      <p>Address</p>
      <p class="card-address">New</p>
      <button class="delete-button">Delete</button>
    </div>`

if (document.body.hasAttribute('data-form')) {
    form.addEventListener('submit', e => {
        e.preventDefault()
    })
}

document.addEventListener('input', e => {
    localStorage.setItem(e.target.name, e.target.value);
})

if (document.body.hasAttribute('data-history')) {
    document.addEventListener("DOMContentLoaded", () => {
        formWrap.insertAdjacentHTML('afterbegin', htmlString)
    })
}

for (let i in names) {
    const cardNames = names.map(e => `.card-${e}`)
    if (document.body.hasAttribute('data-form')) {
        document.getElementsByName(names[i])[0].value = localStorage.getItem(names[i])
        submitBtn.addEventListener('click', () => {
            document.getElementsByName(names[i])[0].value = '';
        })

    }
    if (document.body.hasAttribute('data-history')) {
        if (!!localStorage.getItem('history') === true) {
            formWrap.innerHTML = localStorage.getItem('history')
        }
        setTimeout(() => {
            document.querySelector(cardNames[i]).textContent = localStorage.getItem(names[i])
        }, 10)
        setTimeout(() => {
            localStorage.setItem('history', formWrap.innerHTML)
        }, 11)
    }
}
let delBtn = document.querySelector('.delete-button');
delBtn.addEventListener('click', function () {
    htmlString.remote();
    localStorage.clear();
});

