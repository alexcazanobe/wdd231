const params = new URLSearchParams(window.location.search);
const fields = [
    { label: "First Name", key: "first-name" },
    { label: "Last Name", key: "last-name" },
    { label: "Email", key: "email" },
    { label: "Mobile", key: "mobile" },
    { label: "Business Name", key: "organization" },
    { label: "Timestamp", key: "timestamp" }
];
const ul = document.getElementById('submitted-info');
if (ul) {
    fields.forEach(f => {
        const value = params.get(f.key) || "(not provided)";
        const li = document.createElement('li');
        li.innerHTML = `<strong>${f.label}:</strong> ${value}`;
        ul.appendChild(li);
    });
}