'use strict'
let user = {
    firstName: "Вася",
    sayHi() {
        console.log(this)
        console.log(`Привет, ${this.firstName}!`);
    }
};
  
setTimeout(user.sayHi, 1000); // Привет, undefined!

let user1 = {
    firstName: "Вася",
    sayHi() {
        console.log(this)
        console.log(`Привет, ${this.firstName}!`);
    }
};
  
setTimeout(function() {
    user1.sayHi(); // Привет, Вася!
}, 1000);

/*
4. Исправьте функцию, теряющую "this"
важность: 5
Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

Однако, его вызов приводит к ошибке. Почему?

Исправьте выделенную строку, чтобы всё работало (других строк изменять не надо).

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword(user.loginOk, user.loginFail);
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
let user2 = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};
  
askPassword(user2.loginOk.bind(user), user2.loginFail.bind(user));

/*
5. Использование частично применённой функции для логина
важность: 5
Это задание является немного усложнённым вариантом одного из предыдущих – Исправьте функцию, теряющую "this".

Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: 'John',

  login(result) {
    alert( this.name + (result ? ' logged in' : ' failed to log in') );
  }
};

askPassword(?, ?); // ?
Ваши изменения должны затрагивать только выделенный фрагмент кода.
*/

function askPassword2(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user3 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
  };
  
  askPassword2(user3.login.bind(user, true), user3.login.bind(user, false)); // ?