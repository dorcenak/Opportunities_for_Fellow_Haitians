document.addEventListener("DOMContentLoaded", function () {
    let allJobsData; // Variable to store all jobs data

    // Fetch job data from JSON file
    fetch("C:\\Users\\dorcenak\\WebstormProjects\\Opportunities_for_Fellow_Haitians\\data_base\\scholarships-data.json")
        .then((response) => response.json())
        .then((data) => {
            // Store all jobs data for later use
            allJobsData = data;

            // Display all jobs initially
            displayJobs(data);

            // Add event listener to filter button
            document.getElementById("filter-button").addEventListener("click", function (event) {
                event.preventDefault();

                // Get user input
                const keywords = document.getElementById("keywords").value.toLowerCase().trim(); // Remove trailing and leading spaces
                const location = document.getElementById("location").value.toLowerCase().replace(/[\s,]+/g, ''); // Remove spaces and commas

                // Filter jobs based on user input (case-insensitive)
                let filteredJobs;

                if (keywords && location) {
                    // Filter by both keywords and location
                    filteredJobs = data.filter(
                        (job) =>
                            job.title.toLowerCase().includes(keywords) ||
                            job.company.toLowerCase().includes(keywords) ||
                            job.location.replace(/[\s,]+/g, '').toLowerCase().includes(location) || // Remove spaces and commas from the location data
                            job.description.replace(/[\s,]+/g, '').toLowerCase().includes(keywords) // Remove spaces and commas from the description data
                    );
                } else if (keywords) {
                    // Filter only by keywords
                    filteredJobs = data.filter(
                        (job) =>
                            job.title.toLowerCase().includes(keywords) ||
                            job.company.toLowerCase().includes(keywords) ||
                            job.description.replace(/[\s,]+/g, '').toLowerCase().includes(keywords) // Remove spaces and commas from the description data
                    );
                } else if (location) {
                    // Filter only by location
                    filteredJobs = data.filter(
                        (job) =>
                            job.location.replace(/[\s,]+/g, '').toLowerCase().includes(location) // Remove spaces and commas from the location data
                    );
                } else {
                    // No filters applied, display all jobs
                    filteredJobs = data;
                }

                // Display filtered jobs
                displayJobs(filteredJobs);
            });
        })
        .catch((error) => console.error("Error fetching job data:", error));

    function displayJobs(jobs) {
        const jobsContainer = document.querySelector(".featured-jobs");

        // Clear previous job listings
        jobsContainer.innerHTML = "";

        // Display each job
        jobs.forEach((job) => {
            const jobElement = createJobElement(job);
            jobsContainer.appendChild(jobElement);
        });
    }

    function createJobElement(job) {
        const jobElement = document.createElement("div");
        jobElement.classList.add("job");

        const titleElement = document.createElement("h2");
        titleElement.textContent = job.title;

        const companyElement = document.createElement("h3");
        companyElement.textContent = job.company;

        const locationElement = document.createElement("p");
        locationElement.textContent = "Location: " + job.location;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = job.description;

        const applyLinkElement = document.createElement("a");
        applyLinkElement.href = job.apply_url;
        applyLinkElement.textContent = "Apply Now";

        // Append elements to job container
        jobElement.appendChild(titleElement);
        jobElement.appendChild(companyElement);
        jobElement.appendChild(locationElement);
        jobElement.appendChild(descriptionElement);
        jobElement.appendChild(applyLinkElement);

        return jobElement;
    }
});


console.log("Event listener attached to filter button.");
