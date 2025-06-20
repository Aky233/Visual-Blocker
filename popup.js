function updateRules() {
  chrome.runtime.sendMessage({ type: "updateRules" }, (response) => {
    if (response && response.success) {
      console.log("Reglas actualizadas correctamente.");
    } else {
      console.error("Error actualizando reglas.");
    }
  });
}

document.getElementById('addBtn').addEventListener('click', () => {
  const url = document.getElementById('urlInput').value.trim().toLowerCase();
  if (!url) return;
  chrome.storage.local.get(['blockedUrls'], (res) => {
    const urls = res.blockedUrls || [];
    if (!urls.includes(url)) {
      urls.push(url);
      chrome.storage.local.set({ blockedUrls: urls }, () => {
        renderList();
        updateRules();
      });
    }
  });
});

function renderList() {
  chrome.storage.local.get(['blockedUrls'], (res) => {
    const urls = res.blockedUrls || [];
    const list = document.getElementById('urlList');
    list.innerHTML = '';
    urls.forEach((url, index) => {
      const li = document.createElement('li');
      li.textContent = url;
      const btn = document.createElement('span');
      btn.textContent = '✖';
      btn.className = 'remove';
      btn.onclick = () => {
        urls.splice(index, 1);
        chrome.storage.local.set({ blockedUrls: urls }, () => {
          renderList();
          updateRules();
        });
      };
      li.appendChild(btn);
      list.appendChild(li);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderList();
  updateRules();
});