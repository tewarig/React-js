const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 2, isActive: false },
];
const activeJobs = jobs.filter((jobs) => jobs.isActive);
