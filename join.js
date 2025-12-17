
function qs(k, d){const u=new URL(window.location);return u.searchParams.get(k)||d||"";}
function setVal(id,v){const el=document.getElementById(id); if(el) el.value=v||"";}
function normPhone(p){
  let x=(p||"").replace(/\s|-/g,"");
  if(x.startsWith("0")){x="+358"+x.slice(1);} // FI default
  if(!x.startsWith("+")){x="+"+x;}
  return x;
}
function init(){
  setVal("src", qs("src","unknown"));
  setVal("service_type", qs("service","psykoterapia"));
  setVal("staff_id", qs("staff","agent-001"));
  setVal("city", qs("city","Helsinki"));
  setVal("method","phone");
  setVal("channel","sms");
  setVal("text_version","v1-phone");
  setVal("medium","phone");
  document.getElementById("ts").textContent = new Date().toISOString();
}
function buildMailto(data){
  const subject = `JOIN: src=${data.src}; service=${data.service_type}; staff=${data.staff_id}`;
  const bodyLines = [
    `phone_e164: ${data.phone}`,
    `email: ${data.email}`,
    `city: ${data.city}`,
    `time_pref: ${data.time_pref}`,
    `clinic_code (src): ${data.src}`,
    `service_type: ${data.service_type}`,
    `method: ${data.method}`,
    `channel: ${data.channel}`,
    `text_version: ${data.text_version}`,
    `medium: ${data.medium}`,
    `consent_status: granted`,
    `consent_method_detail: phone verbal`,
    `staff_id: ${data.staff_id}`,
    `timestamp: ${new Date().toISOString()}`
  ];
  const body = encodeURIComponent(bodyLines.join("\n"));
  return `mailto:join@valppaus.fi?subject=${encodeURIComponent(subject)}&body=${body}`;
}
function submitForm(ev){
  ev.preventDefault();
  const phone = normPhone(document.getElementById("phone").value);
  if(!/^\+[1-9]\d{6,14}$/.test(phone)){ alert("Tarkista puhelin E.164 muodossa (esim. +358401234567)."); return; }
  const data = {
    phone,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    time_pref: document.getElementById("time_pref").value,
    src: document.getElementById("src").value,
    service_type: document.getElementById("service_type").value,
    method: document.getElementById("method").value,
    channel: document.getElementById("channel").value,
    text_version: document.getElementById("text_version").value,
    medium: document.getElementById("medium").value,
    staff_id: document.getElementById("staff_id").value
  };
  const link = buildMailto(data);
  window.location.href = link;
}
document.addEventListener("DOMContentLoaded", init);
