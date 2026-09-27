const envelopeScreen = document.getElementById("envelopeScreen");
const openInvitation = document.getElementById("openInvitation");

function openInvite(){
  if(envelopeScreen.classList.contains("opening")) return;
  envelopeScreen.classList.add("opening");
  setTimeout(()=>{
    document.body.classList.add("invitation-open");
    document.body.style.overflow = "auto";
  }, 850);
  setTimeout(()=>{
    envelopeScreen.classList.add("opened");
  }, 1450);
}

openInvitation.addEventListener("click", openInvite);
openInvitation.addEventListener("keydown", e=>{
  if(e.key === "Enter" || e.key === " "){e.preventDefault();openInvite();}
});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>{el.style.opacity="0";el.style.transform="translateY(24px)";el.style.transition="opacity .9s ease,transform .9s ease";observer.observe(el)});
const style=document.createElement("style");style.textContent=".show{opacity:1!important;transform:none!important}";document.head.appendChild(style);
