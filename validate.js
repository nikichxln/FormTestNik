function ValidMail() { 
var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i; 
var myMail = document.getElementById('mail').value; 
var valid = re.test(myMail); 
if (valid) { 
output = 'Адрес эл. почты введен правильно!'; 
document.getElementById('mes').innerHTML = output; 
return valid; 
} 
else { 
re =/^(\+7|8)[\d]{10}$/; 
valid = re.test(myMail); 
if (valid) output = 'Номер телефона введен правильно!'; 
else output = 'Ошибка!'; 
document.getElementById('mes').innerHTML = output; 
return valid; 
} 
}
function PassWord() { 
var re = /^(?=.*[0-9])[0-9a-zA-Z]{6,30}$/g; 
var myPassword= document.getElementById('pass').value; 
var valid = re.test(myPassword); 
if (valid) output = 'Пароль введен верно'; 
else output = 'Ошибка!'; 
document.getElementById('mes2').innerHTML = output; 
return valid; 
}