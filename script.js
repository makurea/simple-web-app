const extensions = [
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
  