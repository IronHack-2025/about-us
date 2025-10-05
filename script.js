document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".team-member, .fade-in");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  elements.forEach((el) => observer.observe(el));

  const langButtons = document.querySelectorAll(".lang-btn");
  let currentLang = localStorage.getItem("lang") || "en";

  function loadLanguage(lang) {
    fetch(`i18n/${lang}.json`)
      .then((res) => res.json())
      .then((data) => {
        document.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.getAttribute("data-i18n");
          const keys = key.split(".");
          let value = data;
          keys.forEach((k) => (value = value?.[k]));
          if (value) el.innerHTML = value;
        });
      })
      .catch((err) => console.error("Error loading language:", err));
  }

  function setActiveButton(lang) {
    langButtons.forEach((b) => b.classList.remove("active"));
    document.getElementById(`lang-${lang}`).classList.add("active");
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.id.replace("lang-", "");
      localStorage.setItem("lang", lang);
      setActiveButton(lang);
      loadLanguage(lang);
    });
  });

  setActiveButton(currentLang);
  loadLanguage(currentLang);
});
