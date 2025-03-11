// Event Details
const eventDetails = {
    gaming: `
        <h2>Gaming Tournaments</h2>
        <h3>Free Fire Tournament</h3>
        <ul>
            <li><strong>Format:</strong> Solo</li>
            <li><strong>Rules:</strong>
                <ul>
                    <li>Standard Battle Royale rules apply.</li>
                    <li>Players must bring their own devices.</li>
                    <li>Internet connectivity is the responsibility of participants.</li>
                    <li>Any hacking or cheating results in immediate disqualification.</li>
                </ul>
            </li>
            <li><strong>Judging:</strong> Last team standing (Bo3 Format)</li>
        </ul>
        <h3>PUBG Tournament</h3>
        <ul>
            <li><strong>Format:</strong> Solo</li>
            <li><strong>Rules:</strong>
                <ul>
                    <li>Standard PUBG mobile tournament rules apply.</li>
                    <li>Any third-party software used will result in a ban.</li>
                    <li>The decision of the referees is final.</li>
                </ul>
            </li>
            <li><strong>Judging:</strong> Points-based system (Kills + Survival Time)</li>
        </ul>
    `,
    'film-hackathon': `
        <h2>Film Hackathon Contest</h2>
        <ul>
            <li><strong>Team Size:</strong> 5 members</li>
            <li><strong>Duration:</strong> 12 hours</li>
            <li><strong>Task:</strong> Create a short film or concept video based on a given theme</li>
            <li><strong>Rules:</strong>
                <ul>
                    <li>Original content only</li>
                    <li>No copyright-infringing material</li>
                    <li>Teams must submit raw and final edits</li>
                    <li>Use of AI-generated content must be disclosed</li>
                </ul>
            </li>
            <li><strong>Judging Criteria:</strong> Storytelling, Execution, Technical Quality, Innovation</li>
        </ul>
    `,
    'short-film': `
        <h2>Short Film Contest</h2>
        <ul>
            <li><strong>Theme:</strong> Open theme, any genre, 2D or 3D animation</li>
            <li><strong>Eligibility:</strong> Open to individuals or teams nationwide</li>
            <li><strong>Duration:</strong> 5-30 minutes</li>
            <li><strong>Language:</strong> Any language with subtitles</li>
            <li><strong>Formats:</strong> MP4 with 1080p or higher resolution</li>
            <li><strong>Deadline:</strong> 18th March 2025</li>
            <li><strong>Awards:</strong> Best 2 short films</li>
        </ul>
    `,
    photography: `
        <h2>Photography Contest</h2>
        <ul>
            <li><strong>Theme:</strong> Story in a Frame</li>
            <li><strong>File Size:</strong> Not less than 2 MB</li>
            <li><strong>Editing:</strong> Basic editing (cropping, color correction) allowed</li>
            <li><strong>Originality:</strong> Must be original, taken by the participant</li>
            <li><strong>File Format:</strong> JPEG/PNG, at least 300 DPI or 1920x1080 pixels</li>
            <li><strong>Submission Deadline:</strong> 5 days before the event</li>
            <li><strong>Watermarks:</strong> No watermarks, logos, or identifiable marks</li>
            <li><strong>Awards:</strong> Best 3 photographs</li>
        </ul>
    `
};

// Open Modal
function openModal(eventKey) {
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = eventDetails[eventKey];
    modal.style.display = 'flex';
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('event-modal');
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('event-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Attach event listeners to all "Learn More" buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.learn-more');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const eventKey = this.getAttribute('data-event');
            openModal(eventKey);
        });
    });
});

// Toggle Navigation Menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}
