let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('chk');


const checkedDarkMode = () => {
    // 1.add the class DarkMode to the Body element
    document.body.classList.add('darkmode');

    // 2.Update darkMode in the localStorage
    localStorage.setItem('darkMode', 'checked');

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
            localStorage.s_item ?
                localStorage.s_item = localStorage.s_item.indexOf(this.id + ",") == -1
                    ? localStorage.s_item + this.id + ","
                    : localStorage.s_item.replace(this.id + ",", "") :
                localStorage.s_item = this.id + ",";
        });
    }

    if (localStorage.s_item) {
        for (var item of checkbox) {
            item.checked = localStorage.s_item.indexOf(item.id + ",") != -1 ? true : false;
        }
    }
});