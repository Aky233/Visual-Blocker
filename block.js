document.addEventListener("DOMContentLoaded", () => {
  const mensajes = {
    es: "No hay nada aquí",
    en: "There's nothing here",
    fr: "Il n'y a rien ici",
    de: "Hier ist nichts",
    it: "Non c'è niente qui",
    pt: "Não há nada aqui",
    ru: "Здесь ничего нет",
    zh: "这里什么也没有",
    ja: "ここには何もありません",
    ko: "여기에는 아무것도 없습니다",
    hi: "यहां कुछ नहीं है",
    ar: "لا يوجد شيء هنا",
    tr: "Burada hiçbir şey yok",
    pl: "Tu nic nie ma"
  };

  const idiomas = Object.keys(mensajes);
  let i = 0;
  function mostrarSiguiente() {
    const msgDiv = document.getElementById("msg");
    if (msgDiv) {
      msgDiv.textContent = mensajes[idiomas[i]];
      i = (i + 1) % idiomas.length;
    }
  }
  mostrarSiguiente();
  setInterval(mostrarSiguiente, 2500);
});