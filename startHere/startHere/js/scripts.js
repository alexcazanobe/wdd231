
const myInfo = new URLSearchParams(window.location.search);



document.querySelector("#results").innerHTML = `
<p> Appointment for ${myInfo.get("first")} ${myInfo.get("last")}</p>
<p> Proxy for ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} Temple </p>
<p> Your phone: ${myInfo.get("phone")}</p>
<p> Your email: ${myInfo.get("email")}</p>
`