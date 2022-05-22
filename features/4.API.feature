Feature: API Tests

    Scenario: Cannot login with invalid password
        Then I get 499 error on submit incorrect password

    Scenario: Unauthorized User cannot Book class
        Then I get 401 error

    Scenario: I can get classes by Trainer ID
        Then I get Classes by Trainer ID

    Scenario: I can check JSON schema
        Then Json Schema is valid