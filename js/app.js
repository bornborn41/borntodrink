let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.getElementById('chk');

console.log(darkMode);

const enableDarkMode = () => {
    // 1.add the class DarkMode to the Body element
    document.body.classList.add('darkmode');

    // 2.Update darkMode in the localStorage
    localStorage.setItem('darkMode', 'enabled');

}
const disableDarkMode = () => {
    // 1.remove the class DarkMode to the Body element
    document.body.classList.remove('darkmode');

    // 2.Update darkMode in the localStorage
    localStorage.setItem('darkMode', null);

}

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('change', () => {
    // document.body.classList.toggle('dark');
    // console.log('test')
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }

});
