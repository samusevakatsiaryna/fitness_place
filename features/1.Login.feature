Feature: Login

    Scenario: I can login as a club member
        Given I am on Login page
        When I enter "samuseva.bsu@gmail.com" and "Aa!11111111"
        And I click Login button
        Then Logo is displayed

        