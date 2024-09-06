Feature: login page validation

  Background:
    Given Provide valid url

  Scenario Outline: login with valid username and password 2
    And Provide valid username "Admin" and password "admin123"
    And Click on login button
    When Click on Recruitment and Add
    And Fill the fields whith data of candidate
      | firstName   | lastName   | vacancy   | email   |
      | <firstName> | <lastName> | <vacancy> | <email> |
    And click on Shortlist and Save
    And Click on Schedule Interview
    And Fill the fields whith data of Interview
      | interviewTitle   | interviewer   | date   |
      | <interviewTitle> | <interviewer> | <date> |
    And click on Mark interview passed and Save
    Then Click on Offer Job and Save
    And Click on Hire and Save
    And Expect "Status: Hired"

    Examples:
      | firstName | lastName | vacancy               | email           | interviewTitle | interviewer | date       |
      | Pedro     | Escamoso | Payroll Administrator | email@gmail.com | Interview      | Amelia      | 2024-09-05 |
