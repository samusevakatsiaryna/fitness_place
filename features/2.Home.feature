Feature: Home page Verification

    Scenario: Calendar Starts from the current Date
        Given I am on Home Page
        Then Calendar starts from the current date

    Scenario: Popup with Class Details is displayed
        When I can open Class poup
        Then I can close Class popup

    Scenario: I can change  Club
        Given I am on Home Page
        Then Selected Club displayed in Title




