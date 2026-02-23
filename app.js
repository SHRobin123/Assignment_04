const jobs = [
  {
    id: 1,
    company: "Mobile First Corp",
    role: "React Native Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 – $175,000",
    description: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
    status: "not_applied",
  },
  {
    id: 2,
    company: "WebFlow Agency",
    role: "Web Designer & Developer",
    location: "Los Angeles, CA",
    type: "Part-time",
    salary: "$80,000 – $120,000",
    description: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
    status: "not_applied",
  },
  {
    id: 3,
    company: "DataViz Solutions",
    role: "Data Visualization Specialist",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 – $165,000",
    description: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
    status: "not_applied",
  },
  {
    id: 4,
    company: "CloudFirst Inc",
    role: "Backend Developer",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 – $190,000",
    description: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
    status: "not_applied",
  },
  {
    id: 5,
    company: "Innovation Labs",
    role: "UI/UX Engineer",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$110,000 – $150,000",
    description: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
    status: "not_applied",
  },
  {
    id: 6,
    company: "MegaCorp Solutions",
    role: "JavaScript Developer",
    location: "New York, NY",
    type: "Full-time",
    salary: "$130,000 – $170,000",
    description: "Build enterprise applications with JavaScript and modern frameworks. We offer competitive compensation, health insurance, and professional development opportunities.",
    status: "not_applied",
  },
  {
    id: 7,
    company: "StartupXYZ",
    role: "Full Stack Engineer",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 – $160,000",
    description: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required. Great benefits and equity package included.",
    status: "not_applied",
  },
  {
    id: 8,
    company: "TechCorp Industries",
    role: "Senior Frontend Developer",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$130,000 – $175,000",
    description: "We are looking for an experienced Frontend Developer to build scalable web applications using React and TypeScript. You will work with a talented team on cutting-edge projects.",
    status: "not_applied",
  },
];

let currentPage = "home";
let currentTab = "all";

function statusLabel(s) {
  if (s === "not_applied") return "NOT APPLIED";
  if (s === "interview") return "INTERVIEW";
  if (s === "rejected") return "REJECTED";
}

function setPage(page) {
  currentPage = page;

  document.getElementById("page-home").style.display = page === "home" ? "block" : "none";
  document.getElementById("page-applied").style.display = page === "applied" ? "block" : "none";

  document.getElementById("btn-home").classList.toggle("active", page === "home");
  document.getElementById("btn-applied").classList.toggle("active", page === "applied");

  if (page === "applied") renderApplied();
  if (page === "home") renderJobs();
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById("tab-" + tab).classList.add("active");
  renderJobs();
}

function updateStatus(id, status) {
  const job = jobs.find(j => j.id === id);
  if (job) {
    job.status = job.status === status ? "not_applied" : status;
  }
  renderJobs();
  renderStats();
  if (currentPage === "applied") renderApplied();
}

function deleteJob(id) {
  const idx = jobs.findIndex(j => j.id === id);
  if (idx !== -1) jobs.splice(idx, 1);
  renderJobs();
  renderStats();
  if (currentPage === "applied") renderApplied();
}

function renderStats() {
  document.getElementById("stat-total").textContent = jobs.length;
  document.getElementById("stat-interview").textContent = jobs.filter(j => j.status === "interview").length;
  document.getElementById("stat-rejected").textContent = jobs.filter(j => j.status === "rejected").length;
}

function renderJobs() {
  const filtered = currentTab === "all" ? jobs : jobs.filter(j => j.status === currentTab);
  document.getElementById("jobs-count").textContent = filtered.length + " jobs";

  const list = document.getElementById("jobs-list");

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <div class="empty-title">No jobs available</div>
        <div class="empty-sub">Check back soon for new job opportunities.</div>
      </div>`;
    return;
  }

  list.innerHTML = filtered.map(job => `
    <div class="job-card" id="card-${job.id}">
      <div class="job-info">
        <div class="job-company">${job.company}</div>
        <div class="job-role">${job.role}</div>
        <div class="job-meta">
          ${job.location}
          <span class="meta-dot">•</span>
          ${job.type}
          <span class="meta-dot">•</span>
          ${job.salary}
        </div>
        <div class="status-badge ${job.status}">${statusLabel(job.status)}</div>
        <div class="job-desc">${job.description}</div>
        <div class="action-buttons">
          <button class="btn btn-interview ${job.status === 'interview' ? 'active' : ''}" onclick="updateStatus(${job.id}, 'interview')">INTERVIEW</button>
          <button class="btn btn-rejected ${job.status === 'rejected' ? 'active' : ''}" onclick="updateStatus(${job.id}, 'rejected')">REJECTED</button>
        </div>
      </div>
      <button class="delete-btn" onclick="deleteJob(${job.id})">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
          <path d="M10 11v6M14 11v6"/>
          <path d="M9 6V4h6v2"/>
        </svg>
      </button>
    </div>
  `).join("");
}

function renderApplied() {
  const applied = jobs.filter(j => j.status === "interview" || j.status === "rejected");
  document.getElementById("applied-count").textContent = applied.length + " jobs";

  const content = document.getElementById("applied-content");

  if (applied.length === 0) {
    content.innerHTML = `
      <div class="empty-state">
        <svg class="empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <div class="empty-title">No jobs available</div>
        <div class="empty-sub">Check back soon for new job opportunities.</div>
      </div>`;
    return;
  }

  content.innerHTML = `
    <table class="applied-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Role</th>
          <th>Location</th>
          <th>Salary</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        ${applied.map(job => `
          <tr>
            <td class="td-company">${job.company}</td>
            <td class="td-role">${job.role}</td>
            <td>${job.location}</td>
            <td>${job.salary}</td>
            <td><span class="status-badge ${job.status}">${statusLabel(job.status)}</span></td>
          </tr>
        `).join("")}
      </tbody>
    </table>`;
}

// Initial render
renderStats();
renderJobs();