
const BasePage = require ('./basePage');

class HomePage extends BasePage{

    constructor(page){
        super(page);
       
    }

    // SELECTORS

    get calendarLoader() { return $('.cp-calendar-loader')}
    get logo() { return $('.cp-header-logo') }
    get calendarDates() { return $$('.cp-calendar-date') }
    get calendar() { return $('.cp-calendar-table') }
    get calendarClasses() { return $$('.cp-calendar-item') }
    get calendarHeader() { return $('.cp-calendar-header') }
    get activeClub() { return $('.secondary-title') }
    get buttonClub() { return $('.cp-choose-club-desktop') }
    get titleBox() { return $('.cp-class-common-title-box') }
    get dropdownClubs() { return $('.baf-scroll-panel-content')}
    get listOfClubs() { return $$('.cp-change-club-mobile-dropdown') }
    get dropdownSelectedClub() { return $("//a[text()='My Fitness Place Dytmara']")}


    // METHODS
    async returnRandomClub() {
        let clubsArray = [];
        await this.listOfClubs.forEach(async (el) => {
            let a = await el.getText()
            await clubsArray.push(a)
        })
        const randomClub = clubsArray[Math.floor(Math.random() * clubsArray.length)];
        return randomClub;
    }

    async selectRandomClub() {
        await this.titleBox.waitForDisplayed();
        await this.buttonClub.click();
        await this.dropdownSelectedClub.waitForDisplayed();
        let clubName = await this.dropdownSelectedClub.getText();
        await this.dropdownSelectedClub.click()
        return clubName;
    }

    async getClassesArray() {
        let calendarClassItems = [];
            await this.calendarClasses.forEach(async (element) => {
                await calendarClassItems.push(element)
            })
        return calendarClassItems; 
    }

    async compareCurrentDates() {
        await this.calendar.waitForDisplayed();
        let calendarDatesArray = [];
        await this.calendarDates.forEach(async (element) => {
            let content = await element.getText();
            calendarDatesArray.push(content)
        })
        return calendarDatesArray;
    }

    async clickClass() {
        let calendarClassItems = await this.getClassesArray()
        await calendarClassItems[0].click(); 
    }

    calculateCurrentDay() {
        let currentDate = new Date()
        let visitDateFull = new Date(currentDate)
        let visitDate = visitDateFull.toISOString()
        let [year, month, day] = visitDate.slice(0, 10).split("-");
        return `${day}.${month}`;
    }
}

module.exports = new HomePage();