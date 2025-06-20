chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "updateRules") {
    chrome.storage.local.get("blockedUrls", ({ blockedUrls = [] }) => {
      const rules = blockedUrls.map((url, index) => ({
        id: index + 1,
        priority: 1,
        action: {
          type: "redirect",
          redirect: { extensionPath: "/blocked.html" }
        },
        condition: {
          urlFilter: url,
          resourceTypes: ["main_frame"]
        }
      }));

      chrome.declarativeNetRequest.updateDynamicRules(
        {
          removeRuleIds: blockedUrls.map((_, index) => index + 1),
          addRules: rules
        },
        () => {
          if (chrome.runtime.lastError) {
            console.error("Error actualizando reglas:", chrome.runtime.lastError);
            sendResponse({ success: false });
          } else {
            sendResponse({ success: true });
          }
        }
      );
    });

    return true;
  }
});
