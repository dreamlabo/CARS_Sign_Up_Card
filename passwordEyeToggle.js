const passwordInput = document.getElementById('password');
const passwordEyeIcon = document.getElementById('passwordEyeIcon');

const reenterPasswordInput = document.getElementById('reenterPassword');
const reenterPasswordEyeIcon= document.getElementById('reenterPasswordEyeIcon');

const classNameDontShowPassword = 'passwordEye far fa-eye-slash';
const classNameShowPassword = 'passwordEye far fa-eye';

passwordEyeIcon.onclick = function() {
    setIconAndClassName();
}

reenterPasswordEyeIcon.onclick = function() {
    setIconAndClassName();
}

const setIconAndClassName = () => {
    if(passwordEyeIcon.className == classNameDontShowPassword){
        passwordInput.setAttribute('type', 'text');
        reenterPasswordInput.setAttribute('type', 'text');
        passwordEyeIcon.className = classNameShowPassword;
        reenterPasswordEyeIcon.className = classNameShowPassword;
    }
    else{
        passwordInput.setAttribute('type', 'password');
        reenterPasswordInput.setAttribute('type', 'password');
        passwordEyeIcon.className = classNameDontShowPassword;
        reenterPasswordEyeIcon.className = classNameDontShowPassword;
    }

}