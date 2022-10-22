function JobApplicant() {
    this.processApplication = (jobApplicant) => {
        if (jobApplicant.experienceInYears >= 3 && jobApplicant.industry === "hospitality" && jobApplicant.bachelorsDegree === true) {
            return "HIRE";
        }
    }
}
module.exports = new JobApplicant();

