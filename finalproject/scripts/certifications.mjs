export async function loadCertifications() {
  const container = document.getElementById('certificationsLogos');
  if (!container) return;
  try {
    const res = await fetch('data/certifications.json');
    if (!res.ok) throw new Error('Could not load certifications');
    const certs = await res.json();
    container.innerHTML = certs.map(cert => `
      <figure class="cert-logo">
        <img src="${cert.logo}" alt="${cert.name} logo" width="90" height="50" loading="lazy">
        <figcaption>${cert.name}</figcaption>
      </figure>
    `).join('');
  } catch (err) {
    container.textContent = "Certifications could not be loaded.";
  }
}