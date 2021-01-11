const {I} = inject();

Given('I am on the login page', () => {
    I.amOnPage('https://www.saucedemo.com/index.html');
    I.seeElement('.login_logo');
    I.seeInTitle('Swag Labs');
});

When('I type "{word}" in the email field', (username) => {
    I.fillField('Username', username);
});

Then('I type "{word}" in the password field', (pass) => {
    I.fillField('Password', pass);
});

Then('I click on the Login button', () => {
    I.click('input#login-button');
});

Then('I see an error message', () => {
    I.see('Epic sadface: Username and password do not match any user in this service', 'h3');
});

Then('I see the PRODUCT label on the home page', () => {
    I.seeElement('.product_label');
});