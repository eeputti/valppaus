
function openContact(){
  const subject = 'Varaa demo – Valppaus';
  const body = 'Hei,\n\nHaluamme demon Valppauksesta.\nKlinikka: ____\nToimipiste: ____\nYhteyshenkilö: ____\nPuhelin: ____\nHuomio: ____\n\nTerveisin,\n';
  const link = `mailto:info@valppaus.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = link;
  return false;
}
function qs(k){ return new URL(location).searchParams.get(k) || ""; }
document.addEventListener("DOMContentLoaded", () => {
  // JOIN form
  const srcI = document.getElementById("src");
  const svc = document.getElementById("service");
  const first = document.getElementById("first_name");
  const sendBtn = document.getElementById("send");
  const ok = document.getElementById("ok");
  if(srcI){ srcI.value = qs("src") || ""; }
  if(svc && qs("service")){ svc.value = qs("service"); }
  if(first && qs("first")){ first.value = qs("first"); }
  if(sendBtn){
    sendBtn.addEventListener("click", () => {
      const src = (document.getElementById("src").value || "").trim();
      const service = (document.getElementById("service").value || "").trim();
      const first_name = (document.getElementById("first_name").value || "").trim();
      const phone = (document.getElementById("phone").value || "").trim();
      const consent = document.getElementById("consent").checked;
      const note = (document.getElementById("note").value || "").trim();
      if(!src || !service || !first_name || !phone){ alert("Täytä toimipistekoodi, palvelu, etunimi ja puhelin."); return; }
      if(!consent){ alert("Tarvitaan suostumus."); return; }
      const subject = `JOIN: src=${src}; service=${service}; first=${first_name}; phone=${phone}`;
      const body = `timestamp=${new Date().toISOString()}\nsrc=${src}\nservice=${service}\nfirst_name=${first_name}\nphone=${phone}\nconsent=1\nnote=${note}`;
      const mailto = `mailto:join@valppaus.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      location.href = mailto;
      if(ok) ok.style.display = "block";
    });
  }
  // STOP form
  const stopBtn = document.getElementById("stopSend");
  if(stopBtn){
    stopBtn.addEventListener("click", () => {
      const phone = (document.getElementById("phone").value || "").trim();
      const note = (document.getElementById("note").value || "").trim();
      if(!phone){ alert("Anna puhelinnumero."); return; }
      const subject = `STOP: phone=${phone}`;
      const body = `timestamp=${new Date().toISOString()}\nphone=${phone}\nnote=${note}`;
      const mailto = `mailto:join@valppaus.fi?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      location.href = mailto;
      const ok = document.getElementById("ok"); if(ok) ok.style.display = "block";
    });
  }
});

