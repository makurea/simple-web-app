const extensions = [
  {
    name: "Quick Char Count",
    description: "Instant character and word counter for selected text, inputs and textareas.",
    tags: ["Text", "Counter", "Productivity"],
    url: "https://chromewebstore.google.com/detail/quick-char-count/ipaeobflhaoglhkjcffmpgbknkeenbme"
  },
  {
    name: "CipherBloom",
    description: "Secure text transformation and encoding toolkit with elegant UI.",
    tags: ["Security", "Text", "Utility"],
    url: "https://chromewebstore.google.com/detail/cipherbloom/kgmnbeapjicaninihchgcokfdhbbompo"
  },
  {
    name: "JSON Toolkit",
    description: "Powerful JSON viewer, formatter and analyzer directly in your browser.",
    tags: ["JSON", "Developer", "Formatter"],
    url: "https://chromewebstore.google.com/detail/json-toolkit/jmeodpddeeglckkknfggcpccndpejnjf"
  },
  {
    name: "TechScope",
    description: "Analyze technologies used on websites with a single click.",
    tags: ["DevTools", "Analysis", "Tech"],
    url: "https://chromewebstore.google.com/detail/techscope/mmgefggkjnchajdpmconhfnckkpnnoel"
  },
  {
    name: "LinkGuardian",
    description: "Protect yourself from malicious, phishing and suspicious links.",
    tags: ["Security", "Links", "Privacy"],
    url: "https://chromewebstore.google.com/detail/linkguardian/hfmjljiehlkdgfmlghmmonfafdinkjel"
  },
  {
    name: "LumaFind",
    description: "Permanent word and phrase highlighting across the web.",
    tags: ["Highlight", "Productivity", "Search"],
    url: "https://chromewebstore.google.com/detail/lumafind/glnlacklleplcinbpcmeogoiphphilef"
  },
  {
    name: "PagePulse",
    description: "Professional page performance monitor. Automatically tracks load metrics (TTFB, FCP, LCP, etc.) and visualizes them with a clean developer-friendly UI.",
    tags: ["Performance", "DevTools", "Monitoring"],
    url: "https://chromewebstore.google.com/detail/pagepulse/pmmmejkjnfknhajieinjlhegpkephbdn"
  },
  {
    name: "TestDataGen",
    description: "Flexible test data generator for developers. Quickly create mock datasets for apps, APIs and databases.",
    tags: ["Developer", "Testing", "Data"],
    url: "https://chromewebstore.google.com/detail/testdatagen/emlkmgjnlbnlnednbncijghkidjcdfko"
  }
];

  const container = document.getElementById("extensions");

  extensions.forEach(ext => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h2>${ext.name}</h2>
      <p>${ext.description}</p>
      <div class="tags">
        ${ext.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
      </div>
      <a href="${ext.url}" target="_blank">View in Chrome Store</a>
    `;

    container.appendChild(card);
  });
  