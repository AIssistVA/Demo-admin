// Business Automation Hub - Universal Demo
// Built by AIssistVA - AI Operations Architect

// Global variables
let currentSection = 'email-hub';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

// Sample data
const sampleData = {
    templates: [
        {
            id: 1,
            name: "Follow-up After Meeting",
            category: "follow-up",
            subject: "Following up on our discussion",
            content: "Hi [Name],\n\nThank you for taking the time to meet with me yesterday. I wanted to follow up on our discussion about [Topic].\n\nAs we discussed, I'll be sending over the proposal by [Date]. Please let me know if you have any questions in the meantime.\n\nBest regards,\n[Your Name]"
        },
        {
            id: 2,
            name: "Proposal Submission",
            category: "proposal",
            subject: "Proposal for [Project Name]",
            content: "Dear [Name],\n\nI'm pleased to submit our proposal for [Project Name]. This document outlines our approach, timeline, and investment required.\n\nKey highlights:\n- [Feature 1]\n- [Feature 2]\n- [Feature 3]\n\nI'm available for a call to discuss any questions you may have.\n\nBest regards,\n[Your Name]"
        },
        {
            id: 3,
            name: "Thank You After Purchase",
            category: "thank-you",
            subject: "Thank you for your business!",
            content: "Dear [Name],\n\nThank you for choosing to work with us! We're excited to have you as a client and look forward to delivering exceptional results.\n\nYour project is now in our queue, and we'll be in touch within [Timeframe] with next steps.\n\nIf you have any questions, please don't hesitate to reach out.\n\nBest regards,\n[Your Name]"
        },
        {
            id: 4,
            name: "Meeting Confirmation",
            category: "meeting",
            subject: "Meeting Confirmed: [Topic]",
            content: "Hi [Name],\n\nThis confirms our meeting scheduled for [Date] at [Time].\n\nMeeting Details:\n- Topic: [Topic]\n- Duration: [Duration]\n- Location: [Location/Platform]\n\nPlease let me know if you need to reschedule.\n\nBest regards,\n[Your Name]"
        },
        {
            id: 5,
            name: "Project Update",
            category: "follow-up",
            subject: "Project Update: [Project Name]",
            content: "Hi [Name],\n\nI wanted to provide you with an update on [Project Name].\n\nCurrent Status: [Status]\nProgress: [Percentage]%\nNext Milestone: [Milestone]\n\nWe're on track to complete by [Date]. Let me know if you have any questions.\n\nBest regards,\n[Your Name]"
        }
    ],
    contacts: [
        { id: 1, name: "Sarah Johnson", email: "sarah@kcmarketing.com", company: "KC Marketing Solutions", category: "clients", phone: "(555) 123-4567" },
        { id: 2, name: "Mike Chen", email: "mike@midwestconsulting.com", company: "Midwest Consulting", category: "leads", phone: "(555) 234-5678" },
        { id: 3, name: "Lisa Rodriguez", email: "lisa@prairietech.com", company: "Prairie Tech Services", category: "clients", phone: "(555) 345-6789" },
        { id: 4, name: "David Thompson", email: "david@thompsonassoc.com", company: "Thompson Associates", category: "vendors", phone: "(555) 456-7890" },
        { id: 5, name: "Jennifer Lee", email: "jennifer@leedesigns.com", company: "Lee Designs", category: "partners", phone: "(555) 567-8901" }
    ],
    scheduledEmails: [
        { id: 1, subject: "Proposal follow-up", recipient: "sarah@kcmarketing.com", scheduledTime: "2024-12-15T10:00:00", status: "pending" },
        { id: 2, subject: "Meeting confirmation", recipient: "mike@midwestconsulting.com", scheduledTime: "2024-12-16T14:00:00", status: "pending" },
        { id: 3, subject: "Project update", recipient: "lisa@prairietech.com", scheduledTime: "2024-12-14T09:00:00", status: "sent" }
    ],
    appointments: [
        { id: 1, title: "Strategy Consultation", client: "KC Marketing Solutions", date: "2024-12-15", time: "10:00 AM", type: "strategy", duration: "60 min" },
        { id: 2, title: "Project Kickoff", client: "Midwest Consulting", date: "2024-12-16", time: "2:00 PM", type: "kickoff", duration: "90 min" },
        { id: 3, title: "Status Review", client: "Prairie Tech Services", date: "2024-12-17", time: "11:00 AM", type: "review", duration: "30 min" }
    ],
    tasks: [
        { id: 1, title: "Send invoice to ABC Corp", description: "Prepare and send invoice for Q4 services", priority: "high", dueDate: "2024-12-20", project: "website-redesign", completed: false },
        { id: 2, title: "Prepare quarterly report", description: "Compile Q4 performance metrics", priority: "medium", dueDate: "2024-12-25", project: "q4-planning", completed: false },
        { id: 3, title: "Client onboarding call", description: "Schedule and conduct onboarding for new client", priority: "urgent", dueDate: "2024-12-18", project: "client-onboarding", completed: false }
    ],
    projects: [
        { id: 1, name: "Website Redesign", status: "in-progress", progress: 65, tasks: 8, completed: 5 },
        { id: 2, name: "Marketing Campaign", status: "planning", progress: 25, tasks: 12, completed: 3 },
        { id: 3, name: "Client Onboarding", status: "in-progress", progress: 80, tasks: 6, completed: 4 },
        { id: 4, name: "Q4 Planning", status: "review", progress: 90, tasks: 10, completed: 9 }
    ],
    leads: [
        { id: 1, name: "Alex Smith", company: "Smith Enterprises", email: "alex@smithenterprises.com", stage: "prospect", value: "$15,000", source: "website" },
        { id: 2, name: "Maria Garcia", company: "Garcia Consulting", email: "maria@garcia.com", stage: "qualified", value: "$25,000", source: "referral" },
        { id: 3, name: "Tom Wilson", company: "Wilson Solutions", email: "tom@wilson.com", stage: "proposal", value: "$35,000", source: "social-media" }
    ]
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    loadSectionData();
    setupEventListeners();
    generateCalendar();
    showSuccessMessage('Welcome to Business Automation Hub Demo!', 'This is a fully functional demo showcasing AIssistVA\'s automation capabilities.');
}

// Navigation functionality
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            switchSection(targetSection);
        });
    });
}

function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from all nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Show target section
    document.getElementById(sectionId).classList.add('active');
    
    // Add active class to current nav link
    document.querySelector(`[data-section="${sectionId}"]`).classList.add('active');
    
    currentSection = sectionId;
    loadSectionData();
}

// Load data for current section
function loadSectionData() {
    switch(currentSection) {
        case 'email-hub':
            loadEmailHubData();
            break;
        case 'scheduling':
            loadSchedulingData();
            break;
        case 'task-manager':
            loadTaskManagerData();
            break;
        case 'crm':
            loadCRMData();
            break;
        case 'reports':
            loadReportsData();
            break;
    }
}

// Email Hub functionality
function loadEmailHubData() {
    loadTemplates();
    loadContacts();
    loadScheduledEmails();
}

function loadTemplates() {
    const templateList = document.getElementById('template-list');
    if (!templateList) return;
    
    templateList.innerHTML = '';
    
    sampleData.templates.forEach(template => {
        const templateItem = document.createElement('div');
        templateItem.className = 'template-item';
        templateItem.innerHTML = `
            <div class="template-header">
                <div class="template-name">${template.name}</div>
                <div class="template-category">${template.category}</div>
            </div>
            <div class="template-subject">${template.subject}</div>
            <div class="template-actions">
                <button onclick="editTemplate(${template.id})">Edit</button>
                <button onclick="useTemplate(${template.id})">Use</button>
                <button onclick="deleteTemplate(${template.id})">Delete</button>
            </div>
        `;
        templateList.appendChild(templateItem);
    });
}

function loadContacts() {
    const contactList = document.getElementById('contact-list');
    if (!contactList) return;
    
    contactList.innerHTML = '';
    
    sampleData.contacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        contactItem.innerHTML = `
            <div class="contact-header">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-category ${contact.category}">${contact.category}</div>
            </div>
            <div class="contact-details">
                <div>${contact.company}</div>
                <a href="mailto:${contact.email}" class="contact-email">${contact.email}</a>
                <div>${contact.phone}</div>
            </div>
        `;
        contactList.appendChild(contactItem);
    });
}

function loadScheduledEmails() {
    const scheduledEmails = document.getElementById('scheduled-emails');
    if (!scheduledEmails) return;
    
    scheduledEmails.innerHTML = '';
    
    sampleData.scheduledEmails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.className = `scheduled-email ${email.status}`;
        emailItem.innerHTML = `
            <div class="email-schedule-info">
                <div class="email-subject">${email.subject}</div>
                <div class="email-time">${formatDateTime(email.scheduledTime)}</div>
            </div>
            <div class="email-recipient">To: ${email.recipient}</div>
            <div class="email-status">
                <span class="status-badge ${email.status}">${email.status}</span>
            </div>
        `;
        scheduledEmails.appendChild(emailItem);
    });
}

// Scheduling functionality
function loadSchedulingData() {
    loadAppointments();
    loadMeetingTypes();
}

function loadAppointments() {
    const appointmentList = document.getElementById('appointment-list');
    if (!appointmentList) return;
    
    appointmentList.innerHTML = '';
    
    sampleData.appointments.forEach(appointment => {
        const appointmentItem = document.createElement('div');
        appointmentItem.className = 'appointment-item';
        appointmentItem.innerHTML = `
            <div class="appointment-header">
                <div class="appointment-title">${appointment.title}</div>
                <div class="appointment-time">${appointment.date} at ${appointment.time}</div>
            </div>
            <div class="appointment-details">${appointment.client}</div>
            <div class="appointment-type">${appointment.type} • ${appointment.duration}</div>
        `;
        appointmentList.appendChild(appointmentItem);
    });
}

function loadMeetingTypes() {
    const meetingTypes = document.getElementById('meeting-types');
    if (!meetingTypes) return;
    
    meetingTypes.innerHTML = '';
    
    const types = [
        { name: "Strategy Consultation", description: "Business strategy and planning", duration: "60 min" },
        { name: "Project Kickoff", description: "New project initiation and planning", duration: "90 min" },
        { name: "Status Review", description: "Project progress and updates", duration: "30 min" }
    ];
    
    types.forEach(type => {
        const typeItem = document.createElement('div');
        typeItem.className = 'meeting-type-item';
        typeItem.innerHTML = `
            <div class="meeting-type-info">
                <h4>${type.name}</h4>
                <p>${type.description}</p>
            </div>
            <div class="meeting-type-duration">${type.duration}</div>
        `;
        meetingTypes.appendChild(typeItem);
    });
}

// Calendar functionality
function generateCalendar() {
    const calendarGrid = document.getElementById('calendar-grid');
    if (!calendarGrid) return;
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    document.getElementById('current-month').textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Add calendar days
    for (let i = 0; i < 42; i++) {
        const date = new Date(startDate);
        date.setDate(startDate.getDate() + i);
        
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = date.getDate();
        
        if (date.getMonth() !== currentMonth) {
            dayElement.classList.add('other-month');
        }
        
        if (isToday(date)) {
            dayElement.classList.add('today');
        }
        
        if (hasAppointment(date)) {
            dayElement.classList.add('has-appointment');
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

function isToday(date) {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
}

function hasAppointment(date) {
    return sampleData.appointments.some(appointment => {
        const appointmentDate = new Date(appointment.date);
        return appointmentDate.getDate() === date.getDate() &&
               appointmentDate.getMonth() === date.getMonth() &&
               appointmentDate.getFullYear() === date.getFullYear();
    });
}

function previousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    generateCalendar();
}

// Task Manager functionality
function loadTaskManagerData() {
    loadActiveTasks();
    loadProjects();
    loadCompletedTasks();
}

function loadActiveTasks() {
    const activeTasks = document.getElementById('active-tasks');
    if (!activeTasks) return;
    
    activeTasks.innerHTML = '';
    
    sampleData.tasks.filter(task => !task.completed).forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = `task-item priority-${task.priority}`;
        taskItem.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
                <div class="task-priority ${task.priority}">${task.priority}</div>
            </div>
            <div class="task-details">${task.description}</div>
            <div class="task-meta">
                <div class="task-due-date">
                    <i class="fas fa-calendar"></i>
                    ${task.dueDate}
                </div>
                <div class="task-project">
                    <i class="fas fa-folder"></i>
                    ${task.project}
                </div>
            </div>
            <div class="task-actions">
                <button onclick="completeTask(${task.id})" class="complete">Complete</button>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;
        activeTasks.appendChild(taskItem);
    });
}

function loadProjects() {
    const projectPipeline = document.getElementById('project-pipeline');
    if (!projectPipeline) return;
    
    projectPipeline.innerHTML = '';
    
    sampleData.projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <div class="project-header">
                <div>
                    <div class="project-title">${project.name}</div>
                </div>
                <div class="project-status ${project.status}">${project.status}</div>
            </div>
            <div class="project-progress">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${project.progress}%"></div>
                </div>
                <div class="progress-text">
                    <span>${project.completed}/${project.tasks} tasks</span>
                    <span>${project.progress}%</span>
                </div>
            </div>
            <div class="project-meta">
                <div class="project-tasks">
                    <i class="fas fa-tasks"></i>
                    ${project.tasks} total tasks
                </div>
            </div>
        `;
        projectPipeline.appendChild(projectCard);
    });
}

function loadCompletedTasks() {
    const completedTasks = document.getElementById('completed-tasks');
    if (!completedTasks) return;
    
    completedTasks.innerHTML = '';
    
    const completed = [
        { title: "Send invoice to ABC Corp", completedDate: "2024-12-10" },
        { title: "Prepare quarterly report", completedDate: "2024-12-08" },
        { title: "Client onboarding call", completedDate: "2024-12-05" }
    ];
    
    completed.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <div class="task-header">
                <div class="task-title">${task.title}</div>
                <div class="task-priority completed">Completed</div>
            </div>
            <div class="task-meta">
                <div class="task-due-date">
                    <i class="fas fa-check-circle"></i>
                    Completed on ${task.completedDate}
                </div>
            </div>
        `;
        completedTasks.appendChild(taskItem);
    });
}

// CRM functionality
function loadCRMData() {
    loadPipelineLeads();
    loadFollowUpSequences();
}

function loadPipelineLeads() {
    const stages = ['prospect', 'qualified', 'proposal', 'negotiation', 'closed'];
    
    stages.forEach(stage => {
        const container = document.getElementById(`${stage}-leads`);
        if (!container) return;
        
        container.innerHTML = '';
        
        const stageLeads = sampleData.leads.filter(lead => lead.stage === stage);
        
        stageLeads.forEach(lead => {
            const leadCard = document.createElement('div');
            leadCard.className = 'lead-card';
            leadCard.draggable = true;
            leadCard.innerHTML = `
                <div class="lead-name">${lead.name}</div>
                <div class="lead-company">${lead.company}</div>
                <div class="lead-value">${lead.value}</div>
            `;
            container.appendChild(leadCard);
        });
    });
}

function loadFollowUpSequences() {
    const sequenceList = document.getElementById('sequence-list');
    if (!sequenceList) return;
    
    sequenceList.innerHTML = '';
    
    const sequences = [
        { name: "New Lead Welcome", steps: 3, active: true },
        { name: "Proposal Follow-up", steps: 5, active: true },
        { name: "Meeting Reminder", steps: 2, active: false }
    ];
    
    sequences.forEach(sequence => {
        const sequenceItem = document.createElement('div');
        sequenceItem.className = 'reminder-item';
        sequenceItem.innerHTML = `
            <div class="response-header">
                <h4>${sequence.name}</h4>
                <label class="switch">
                    <input type="checkbox" ${sequence.active ? 'checked' : ''}>
                    <span class="slider"></span>
                </label>
            </div>
            <p>${sequence.steps} automated follow-up steps</p>
        `;
        sequenceList.appendChild(sequenceItem);
    });
}

// Reports functionality
function loadReportsData() {
    // Reports data is mostly static and already in HTML
    // This function can be used for dynamic chart generation
}

// Form handling
function setupEventListeners() {
    // Task form
    const taskForm = document.getElementById('task-form');
    if (taskForm) {
        taskForm.addEventListener('submit', handleTaskSubmit);
    }
    
    // Lead form
    const leadForm = document.getElementById('lead-form');
    if (leadForm) {
        leadForm.addEventListener('submit', handleLeadSubmit);
    }
    
    // Template form
    const templateForm = document.getElementById('template-form');
    if (templateForm) {
        templateForm.addEventListener('submit', handleTemplateSubmit);
    }
    
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterTemplates(this.getAttribute('data-category'));
        });
    });
}

function handleTaskSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const task = {
        id: Date.now(),
        title: document.getElementById('task-title').value,
        description: document.getElementById('task-description').value,
        priority: document.getElementById('task-priority').value,
        dueDate: document.getElementById('task-due-date').value,
        project: document.getElementById('task-project').value,
        completed: false
    };
    
    sampleData.tasks.push(task);
    loadActiveTasks();
    e.target.reset();
    showSuccessMessage('Task Created!', 'Your task has been added successfully.');
}

function handleLeadSubmit(e) {
    e.preventDefault();
    
    const lead = {
        id: Date.now(),
        name: `${document.getElementById('lead-first-name').value} ${document.getElementById('lead-last-name').value}`,
        company: document.getElementById('lead-company').value,
        email: document.getElementById('lead-email').value,
        phone: document.getElementById('lead-phone').value,
        source: document.getElementById('lead-source').value,
        stage: 'prospect',
        value: '$10,000'
    };
    
    sampleData.leads.push(lead);
    loadPipelineLeads();
    e.target.reset();
    showSuccessMessage('Lead Added!', 'New lead has been added to your pipeline.');
}

function handleTemplateSubmit(e) {
    e.preventDefault();
    
    const template = {
        id: Date.now(),
        name: document.getElementById('template-name').value,
        category: document.getElementById('template-category').value,
        subject: document.getElementById('template-subject').value,
        content: document.getElementById('template-content').value
    };
    
    sampleData.templates.push(template);
    loadTemplates();
    closeModal('template-modal');
    e.target.reset();
    showSuccessMessage('Template Saved!', 'Your email template has been created successfully.');
}

function handleContactSubmit(e) {
    e.preventDefault();
    
    const contact = {
        id: Date.now(),
        name: document.getElementById('contact-name').value,
        email: document.getElementById('contact-email').value,
        company: document.getElementById('contact-company').value,
        category: document.getElementById('contact-category').value,
        phone: ''
    };
    
    sampleData.contacts.push(contact);
    loadContacts();
    closeModal('contact-modal');
    e.target.reset();
    showSuccessMessage('Contact Added!', 'New contact has been added to your database.');
}

// Utility functions
function showModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function showSuccessMessage(title, message) {
    // Create a simple success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 4px;">${title}</div>
        <div style="font-size: 14px;">${message}</div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

function formatDateTime(dateTimeString) {
    const date = new Date(dateTimeString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}

function filterTemplates(category) {
    const templates = document.querySelectorAll('.template-item');
    templates.forEach(template => {
        if (category === 'all' || template.querySelector('.template-category').textContent === category) {
            template.style.display = 'block';
        } else {
            template.style.display = 'none';
        }
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Export functions for global access
window.showModal = showModal;
window.closeModal = closeModal;
window.previousMonth = previousMonth;
window.nextMonth = nextMonth;