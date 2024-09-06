import { Given, When, Then, DataTable } from '@cucumber/cucumber'
import { pageFixture } from '../../hooks/PageFixture';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import { RecruitmentFormPage } from '../../pages/RecruitmentFormPage';
import { ApplicationInitiatedPage } from '../../pages/ApplicationInitiatedPage';
import { SaveShortlistPage } from '../../pages/SaveShortlistPage';
import { ShortlistedPage } from '../../pages/ShortlistedPage';
import { ScheduleInterviewFormPage } from '../../pages/ScheduleInterviewFormPage';
import { InterviewScheduledPage } from '../../pages/InterviewScheduledPage';
import { SaveMarkInterviewPassedPage } from '../../pages/SaveMarkInterviewPassedPage';
import { InterviewPassedPage } from '../../pages/InterviewPassedPage';
import { SaveJobOfferedPage } from '../../pages/SaveJobOfferedPage';
import { JobOfferedPage } from '../../pages/JobOfferedPage';
import { SaveHirePage } from '../../pages/SaveHirePage';
import { HiredPage } from '../../pages/HiredPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const recruitmentFormPage = new RecruitmentFormPage();
const applicationInitiatedPage = new ApplicationInitiatedPage();
const saveShortlistPage = new SaveShortlistPage();
const shortlistedPage = new ShortlistedPage();
const scheduleInterviewFormPage = new ScheduleInterviewFormPage();
const interviewScheduledPage = new InterviewScheduledPage();
const saveMarkInterviewPassedPage = new SaveMarkInterviewPassedPage();
const interviewPassedPage = new InterviewPassedPage();
const saveJobOfferedPage = new SaveJobOfferedPage();
const jobOfferedPage = new JobOfferedPage();
const saveHirePage = new SaveHirePage();
const hiredPage = new HiredPage();

Given('Provide valid url', {timeout: 30000}, async function () {
    await pageFixture.page.goto(process.env.BASEURL);
});

Given('Provide valid username {string} and password {string}', {timeout: 30000}, async function (user: string, pass: string) {
    await loginPage.enterUsernameAndPassword(user, pass);
});

Given('Click on login button', {timeout: 30000}, async function () {
    await loginPage.clickOnLogin();
});

When('Click on Recruitment and Add', {timeout: 30000}, async function () {
    await homePage.clickOnRecruitment();
    await homePage.clickOnAdd();
});

When('Fill the fields whith data of candidate', {timeout: 30000}, async function (dataCandidate: DataTable) {
    await recruitmentFormPage.fillFormDataCandidate(dataCandidate);
    await recruitmentFormPage.clickOnSave();
});

When('click on Shortlist and Save', {timeout: 30000}, async function () {
    await applicationInitiatedPage.clickOnShortlist();
    await saveShortlistPage.clickOnSaveShortlist();
});

When('Click on Schedule Interview', {timeout: 30000}, async function () {
    await shortlistedPage.clickOnScheduleInterview();
});

When('Fill the fields whith data of Interview', {timeout: 30000}, async function (dataInterview: DataTable) {
    await scheduleInterviewFormPage.fillFormDataInterview(dataInterview);
    await scheduleInterviewFormPage.clickOnSave();
});

When('click on Mark interview passed and Save', {timeout: 30000}, async function () {
    await interviewScheduledPage.clickOnMarkInterviewPassed();
    await saveMarkInterviewPassedPage.clickOnSaveMarkInterviewPassed();
});

Then('Click on Offer Job and Save', {timeout: 30000}, async function () {
    await interviewPassedPage.clickOnOfferJob();
    await saveJobOfferedPage.clickOnSaveJobOffer();
});

Then('Click on Hire and Save', {timeout: 30000}, async function () {
    await jobOfferedPage.clickOnHire();
    await saveHirePage.clickOnSaveHire();
});

Then('Expect {string}', {timeout: 30000}, async function (status: string) {
    await hiredPage.validateStatusHired(status);
});
