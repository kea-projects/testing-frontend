# Selenium Setup

1. Install dependencies with `yarn install` or `npm install`.
2. Install the chrome driver from [here](https://chromedriver.chromium.org/).
3. Install mocha with `npm install -g mocha`.
4. Add the required environment variables.
> The variables are:
>- SELENIUM_TEACHER_USER = `The Teacher user KEA email`
>- SELENIUM_TEACHER_PASS = `The Teacher account password`
>- SELENIUM_STUDENT_USER = `The Student user KEA email`
>- SELENIUM_STUDENT_PASS = `The Student account password` 
5. Run the Selenium tests with the `npm run test-selenium` command.