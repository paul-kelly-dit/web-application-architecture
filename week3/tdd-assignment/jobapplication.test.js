const jobApplicationService = require('./jobapplication');

let applicantA = {
    experienceInYears: 4,
    industry: "hospitality",
    bachelorsDegree: true
}

let applicantB = {
    experienceInYears: 3,
    industry: "hospitality",
    bachelorsDegree: false
}

let applicantC = {
    experienceInYears: 2,
    industry: "hospitality",
    bachelorsDegree: false
}

test('processApplicant - should return HIRE if job applicant has 3 years or more experience in hospitality with a bachelors degree', () => {
    expect(jobApplicationService.processApplication(applicantA)).toBe("HIRE");
});

test('processApplicant - should return MAYBE if job applicant has 3 years or more experience in hospitality, but does not have a bachelors degree', () => {
    expect(jobApplicationService.processApplication(applicantB)).toBe("MAYBE");
});

