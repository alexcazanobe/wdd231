export function showConfirmationData() {
  const params = new URLSearchParams(window.location.search);
  const dataList = document.getElementById('submittedData');
  if (!dataList) return;

  const fields = {
    name: "Name/Company",
    phone: "Phone",
    email: "Email",
    repairType: "Type of Repair",
    brand: "Crane Brand",
    model: "Crane Model",
    description: "Issue Description"
  };

  for (const key in fields) {
    if (params.has(key)) {
      const value = params.get(key);
      const li = document.createElement('li');
      li.innerHTML = `<strong>${fields[key]}:</strong> ${value}`;
      dataList.appendChild(li);
    }
  }
}