// Generated by Selenium IDE
require("dotenv").config();
const assert = require("assert");
const { Builder, By } = require("selenium-webdriver");

// Constants
const STUDENT_USER = process.env.SELENIUM_STUDENT_USER || "";
const STUDENT_PASS = process.env.SELENIUM_STUDENT_PASS || "";
const TEACHER_USER = process.env.SELENIUM_TEACHER_USER || "";
const TEACHER_PASS = process.env.SELENIUM_TEACHER_PASS || "";

describe("Selenium End to End tests.", function () {
  this.timeout(60000);
  let driver;

  beforeEach(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });
  afterEach(async function () {
    await driver.quit();
  });

  describe("Microsoft integration tests.", function () {
    it("Checks if the Student login works properly.", async function () {
      // Test name: login student
      // Step # | name | target | value
      // 1 | open | http://localhost:3000/ |
      await driver.get("http://localhost:3000/");
      // 2 | setWindowSize | 1130x789 |
      await driver.manage().window().setRect({ width: 1130, height: 789 });
      // 3 | click | css=.css-taj3dd |
      await driver.findElement(By.css(".css-taj3dd")).click();
      // 4 | click | id=i0116 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await driver.findElement(By.id("i0116")).click();
      // 5 | type | id=i0116
      await driver.findElement(By.id("i0116")).sendKeys(STUDENT_USER);
      // 6 | type | id=i0118
      await driver.findElement(By.id("i0118")).sendKeys(STUDENT_PASS);
      // 7 | click | id=idSIButton9 |
      await driver.findElement(By.id("idSIButton9")).click();
      // 8 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 9 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 10 | assert we are on the student page
      const attendButton = await driver
        .findElement(By.css(".css-16nf58z"))
        .getText();
      assert.strictEqual(attendButton, "Attend Class");
      const checkAttendanceButton = await driver
        .findElement(By.css(".css-2a592z"))
        .getText();
      assert.strictEqual(checkAttendanceButton, "Check Attendance");
      // 11 | click | css=.css-0:nth-child(1) .css-14irisy |
      await driver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();
    });

    it("Checks if the Teacher login works properly.", async function () {
      // Test name: login teacher
      // Step # | name | target | value
      // 1 | open | http://localhost:3000/ |
      await driver.get("http://localhost:3000/");
      // 2 | setWindowSize | 1130x789 |
      await driver.manage().window().setRect({ width: 1130, height: 789 });
      // 3 | click | css=.css-taj3dd |
      await driver.findElement(By.css(".css-taj3dd")).click();
      // 4 | click | id=i0116 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await driver.findElement(By.id("i0116")).click();
      // 5 | type | id=i0116
      await driver.findElement(By.id("i0116")).sendKeys(TEACHER_USER);
      // 6 | type | id=i0118
      await driver.findElement(By.id("i0118")).sendKeys(TEACHER_PASS);
      // 7 | click | id=idSIButton9 |
      await driver.findElement(By.id("idSIButton9")).click();
      // 8 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 9 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 10 | assert we are on the teacher page
      const addButton = await driver
        .findElement(By.css(".css-1a5aj3w"))
        .getText();
      assert.strictEqual(addButton, "Add");
      const classHeader = await driver
        .findElement(By.css(".css-1zts0j:nth-child(1)"))
        .getText();
      assert.strictEqual(classHeader, "CLASS");
      const subjectHeader = await driver
        .findElement(By.css(".css-1zts0j:nth-child(2)"))
        .getText();
      assert.strictEqual(subjectHeader, "SUBJECT NAME");
      const studentsHeader = await driver
        .findElement(By.css(".css-1zts0j:nth-child(3)"))
        .getText();
      assert.strictEqual(studentsHeader, "STUDENTS");
      // 11 | click | css=.css-0:nth-child(1) .css-14irisy |
      await driver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();
    });
  });

  describe("Testing Flow: 'Marking an attendance'.", function () {
    it("Checks if the Teacher can start an attendance process and a Student can mark their attendance.", async function () {
      // Test name: Mark attendance
      // Step # | name | target | value

      // Teacher starting attendance process

      // 1 | open | http://localhost:3000/ |
      await driver.get("http://localhost:3000/");
      // 2 | setWindowSize | 1130x789 |
      await driver.manage().window().setRect({ width: 1130, height: 789 });
      // 3 | click | css=.css-taj3dd |
      await driver.findElement(By.css(".css-taj3dd")).click();
      // 4 | click | id=i0116 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await driver.findElement(By.id("i0116")).click();
      // 5 | type | id=i0116
      await driver.findElement(By.id("i0116")).sendKeys(TEACHER_USER);
      // 6 | type | id=i0118
      await driver.findElement(By.id("i0118")).sendKeys(TEACHER_PASS);
      // 7 | click | id=idSIButton9 |
      await driver.findElement(By.id("idSIButton9")).click();
      // 8 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 9 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 10 | click | css=.css-5gu8bj:nth-child(1) > .css-xumdn4:nth-child(2) |
      await driver
        .findElement(
          By.css(".css-5gu8bj:nth-child(1) > .css-xumdn4:nth-child(2)")
        )
        .click();

      // Student marking their attendance

      const studentDriver = await new Builder().forBrowser("chrome").build();
      // 11 | open | http://localhost:3000/ |
      await studentDriver.get("http://localhost:3000/");
      // 12 | setWindowSize | 1130x789 |
      await studentDriver
        .manage()
        .window()
        .setRect({ width: 1130, height: 789 });
      // 13 | click | css=.css-taj3dd |
      await studentDriver.findElement(By.css(".css-taj3dd")).click();
      // 14 | click | id=i0116 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await studentDriver.findElement(By.id("i0116")).click();
      // 15 | type | id=i0116
      await studentDriver.findElement(By.id("i0116")).sendKeys(STUDENT_USER);
      // 16 | type | id=i0118
      await studentDriver.findElement(By.id("i0118")).sendKeys(STUDENT_PASS);
      // 17 | click | id=idSIButton9 |
      await studentDriver.findElement(By.id("idSIButton9")).click();
      // 18 | click | id=idSIButton9 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await studentDriver.findElement(By.id("idSIButton9")).click();
      // 19 | click | id=idSIButton9 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await studentDriver.findElement(By.id("idSIButton9")).click();

      const teacherAttendanceCode = driver
        .findElement(By.css("span"))
        .getText();

      // 20 | click | id=field-1 |
      await studentDriver.findElement(By.id("field-1")).click();
      // 21 | type | id=field-1 | teacherAttendanceCode
      await studentDriver
        .findElement(By.id("field-1"))
        .sendKeys(teacherAttendanceCode);
      // 22 | click | css=.css-16nf58z |
      await studentDriver.findElement(By.css(".css-16nf58z")).click();
      // 23 | Check that the student attended successfully
      await studentDriver.sleep(1000); // Need to wait for the modal to show up
      const successMessage = await studentDriver
        .findElement(By.css(".css-1x6efgi"))
        .getText();
      assert.strictEqual(successMessage, "Success!");
      // 24 | click | css=css-1wyhjrh |
      await studentDriver.findElement(By.css(".css-1wyhjrh")).click();
      // 25 | click | css=.css-0:nth-child(1) .css-14irisy |
      await studentDriver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();

      studentDriver.quit();

      // Teacher stops attendance process

      // 26 | click | css=.css-1wyhjrh |
      await driver.findElement(By.css(".css-1wyhjrh")).click();
      // 27 | click | css=.css-0:nth-child(1) .css-14irisy |
      await driver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();
    });

    it("Checks if the Teacher can start an attendance process and a Student fails to mark their attendance.", async function () {
      // Test name: Mark attendance
      // Step # | name | target | value

      // Teacher starting attendance process

      // 1 | open | http://localhost:3000/ |
      await driver.get("http://localhost:3000/");
      // 2 | setWindowSize | 1130x789 |
      await driver.manage().window().setRect({ width: 1130, height: 789 });
      // 3 | click | css=.css-taj3dd |
      await driver.findElement(By.css(".css-taj3dd")).click();
      // 4 | click | id=i0116 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await driver.findElement(By.id("i0116")).click();
      // 5 | type | id=i0116
      await driver.findElement(By.id("i0116")).sendKeys(TEACHER_USER);
      // 6 | type | id=i0118
      await driver.findElement(By.id("i0118")).sendKeys(TEACHER_PASS);
      // 7 | click | id=idSIButton9 |
      await driver.findElement(By.id("idSIButton9")).click();
      // 8 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 9 | click | id=idSIButton9 |
      await driver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await driver.findElement(By.id("idSIButton9")).click();
      // 10 | click | css=.css-5gu8bj:nth-child(1) > .css-xumdn4:nth-child(2) |
      await driver
        .findElement(
          By.css(".css-5gu8bj:nth-child(1) > .css-xumdn4:nth-child(2)")
        )
        .click();

      // Student marking their attendance

      const studentDriver = await new Builder().forBrowser("chrome").build();
      // 11 | open | http://localhost:3000/ |
      await studentDriver.get("http://localhost:3000/");
      // 12 | setWindowSize | 1130x789 |
      await studentDriver
        .manage()
        .window()
        .setRect({ width: 1130, height: 789 });
      // 13 | click | css=.css-taj3dd |
      await studentDriver.findElement(By.css(".css-taj3dd")).click();
      // 14 | click | id=i0116 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive

      await studentDriver.findElement(By.id("i0116")).click();
      // 15 | type | id=i0116
      await studentDriver.findElement(By.id("i0116")).sendKeys(STUDENT_USER);
      // 16 | type | id=i0118
      await studentDriver.findElement(By.id("i0118")).sendKeys(STUDENT_PASS);
      // 17 | click | id=idSIButton9 |
      await studentDriver.findElement(By.id("idSIButton9")).click();
      // 18 | click | id=idSIButton9 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await studentDriver.findElement(By.id("idSIButton9")).click();
      // 19 | click | id=idSIButton9 |
      await studentDriver.sleep(2000); // Need to wait for the Microsoft animation to finish for the button to become interactive
      await studentDriver.findElement(By.id("idSIButton9")).click();
      // 20 | click | id=field-1 |
      await studentDriver.findElement(By.id("field-1")).click();
      // 21 | type | id=field-1 | teacherAttendanceCode
      await studentDriver.findElement(By.id("field-1")).sendKeys("ABADCODE");
      // 22 | click | css=.css-16nf58z |
      await studentDriver.findElement(By.css(".css-16nf58z")).click();
      // 23 | Check that the student attended successfully
      
			// Trigger Commit
			// await studentDriver.sleep(1000); // Need to wait for the modal to show up
      const failureMessage = await studentDriver
        .findElement(By.id("toast-1-title"))
        .getText();
      assert.strictEqual(
        failureMessage,
        "Seems like you entered the wrong code"
      );
      // 24 | click | css=.css-0:nth-child(1) .css-14irisy |
      await studentDriver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();

      studentDriver.quit();

      // Teacher stops attendance process

      // 25 | click | css=.css-1wyhjrh |
      await driver.findElement(By.css(".css-1wyhjrh")).click();
      // 26 | click | css=.css-0:nth-child(1) .css-14irisy |
      await driver
        .findElement(By.css(".css-0:nth-child(1) .css-14irisy"))
        .click();
    });
  });
});
