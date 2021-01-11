Feature('log into saucedemo.com');

Scenario('valid sign in', ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/index.html');
    I.seeElement('.login_logo');
    I.seeInTitle('Swag Labs');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', 'secret_sauce');
    I.click('input#login-button');
    I.seeElement('.product_label');
});

Scenario('invalid sign in', ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/index.html');
    I.seeElement('.login_logo');
    I.seeInTitle('Swag Labs');
    I.fillField('Username', 'standard_user');
    I.fillField('Password', '0000');
    I.click('input#login-button');
    I.see('Epic sadface: Username and password do not match any user in this service', 'h3');
});
