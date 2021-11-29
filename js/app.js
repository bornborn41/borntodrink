let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('chk');

console.log(darkModeToggle);
// console.log(darkMode);

// function checkOnLocalStorage() {
//     if (!localStorage['chk']) return;
//     var checked = localStorage['chk'].split(',');
//     checked.map((id) => {
//         document.getElementById(id).checked = true;
//     })
// }


const checkedDarkMode = () => {
    // 1.add the class DarkMode to the Body element
    document.body.classList.add('darkmode');

    // 2.Update darkMode in the localStorage
    localStorage.setItem('darkMode', 'checked');

    // 3.Update Checked in Checked Type
    // document.checkbox.classList.add('checked');
    // document.getElementById('chk').checked;
    // checkOnLocalStorage();

}
const uncheckedDarkMode = () => {
    // 1.remove the class DarkMode to the Body element
    document.body.classList.remove('darkmode');

    // 2.Update darkMode in the localStorage
    localStorage.setItem('darkMode', null);

}

if (darkMode === 'checked') {
    checkedDarkMode();

}

darkModeToggle.addEventListener('change', () => {
    // document.body.classList.toggle('dark');
    // console.log('test')
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'checked') {
        checkedDarkMode();
        // console.log(darkMode);
    } else {
        uncheckedDarkMode();
        // console.log(darkMode);
    }

});


document.addEventListener("DOMContentLoaded", function () {

    var checkbox = document.querySelectorAll("input[type='checkbox']");

    for (var item of checkbox) {
        item.addEventListener("click", function () {
            localStorage.s_item ? // verifico se existe localStorage
                localStorage.s_item = localStorage.s_item.indexOf(this.id + ",") == -1 // verifico de localStorage contém o id
                    ? localStorage.s_item + this.id + "," // não existe. Adiciono a id no loaclStorage
                    : localStorage.s_item.replace(this.id + ",", "") : // já existe, apago do localStorage
                localStorage.s_item = this.id + ",";  // não existe. Crio com o id do checkbox
        });
    }

    if (localStorage.s_item) { // verifico se existe localStorage
        for (var item of checkbox) { // existe, percorro as checkbox
            item.checked = localStorage.s_item.indexOf(item.id + ",") != -1 ? true : false; // marco true nas ids que existem no localStorage
        }
    }
});