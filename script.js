// =====================================================
// 1. THE ENTRIES
// Each entry's name (like "sb-1546") matches a card's
// data-entry="..." in index.html.
// To add an event: copy one entry, change the name and
// the details, then add a matching card to index.html.
// =====================================================

const entries = {

  "sb-1546": {
    title: "SB 1546 Testimony",
    details: {
      "Date": "February 5, 2026",
      "Venue": "Oregon Senate Committee on Early Childhood and Behavioral Health",
      "Type": "Policy",
      "Key strength": "Advocating",
      "Outcome": "Signed into law by Governor Tina Kotek on May 7, 2026"
    },
    sources: [
      ["Enrolled bill text", "https://olis.oregonlegislature.gov/liz/2026R1/Downloads/MeasureDocument/SB1546"],
      ["Bill overview (OLIS)", "https://olis.oregonlegislature.gov/liz/2026R1/Measures/Overview/sb1546"],
      ["Committee recording", "https://olis.oregonlegislature.gov/liz/2026R1/Downloads/RecordingLog/SECBH/2026-02-05-08-00"],
      ["KGW: Oregon governor signs bills targeting AI chatbot safety", "https://www.kgw.com/article/news/politics/kotek-sign-oregon-ai-teen-mental-health-bill-safety-chatbot/283-321743ef-c1c2-49dc-bdec-da956c94704f"],
      ["OregonLive: New Oregon law will compel AI chatbots to connect suicidal users to real-life help", "https://www.oregonlive.com/politics/2026/05/new-oregon-law-will-compel-ai-chatbots-to-connect-suicidal-users-to-real-life-help.html"]
    ],
    description: "Some callers asked volunteers whether they were AI, showing concern over who they talked to. SB 1546 requires operators of artificial intelligence companions and artificial intelligence companion platforms to provide notice to users that they are talking to AI, and not a human. When a user indicates suicidal ideation or self-harm, the operator must identify it and refer the user to appropriate mental health resources like YouthLine and 988. SB 1546 turns risk into opportunity. An opportunity to intervene. A YouthLine volunteer testified in support of it, and volunteers were there when Governor Tina Kotek signed it into law.",
    connections: ["kgw-signing", "advocacy-day", "wyden-council"]
  },

  "kgw-signing": {
    title: "KGW: Governor Signs AI Chatbot Safety Bill",
    details: {
      "Date": "May 7, 2026",
      "Outlet": "KGW News",
      "Type": "Press",
      "Key strength": "Advocating"
    },
    sources: [
      ["Read on KGW", "https://www.kgw.com/article/news/politics/kotek-sign-oregon-ai-teen-mental-health-bill-safety-chatbot/283-321743ef-c1c2-49dc-bdec-da956c94704f"],
      ["Also covered by OregonLive", "https://www.oregonlive.com/politics/2026/05/new-oregon-law-will-compel-ai-chatbots-to-connect-suicidal-users-to-real-life-help.html"]
    ],
    description: "KGW covered Governor Tina Kotek's signing of SB 1546 at a ceremony in Northeast Portland. The story featured a YouthLine volunteer who testified for the bill, explaining that many callers ask whether they are talking to AI and that young people often don't know what AI will do with what they share.",
    connections: ["sb-1546", "koin-pride"]
  },

  "advocacy-day": {
    title: "AFSP Advocacy Day",
    details: {
      "Date": "February 9, 2026",
      "Venue": "Oregon State Legislature",
      "Partner": "American Foundation for Suicide Prevention",
      "Type": "Policy",
      "Key strength": "Advocating"
    },
    sources: [],
    description: "HB 4070: ensure parity in access to mental health and substance use disorder treatment. HB 4028: strengthen insurance parity requirements to protect behavioral health treatment providers. SB 1546: supporting safety in the use of artificial intelligence.",
    connections: ["sb-1546", "afsp-walk"]
  },

  "wyden-council": {
    title: "Youth Advisory Council with Senator Ron Wyden",
    details: {
      "Date": "2026",
      "Partner": "Office of U.S. Senator Ron Wyden",
      "Type": "Policy",
      "Key strength": "Advocating"
    },
    sources: [],
    description: "YouthLine representatives created an advisory council to work with Senator Ron Wyden to further educate the federal government on how to help youth.",
    connections: ["sb-1546", "dc-trip"]
  },

  "talent-council": {
    title: "Behavioral Health Talent Council",
    details: {
      "Date": "October 23, 2025",
      "Venue": "Oregon Behavioral Health Talent Council",
      "Type": "Policy",
      "Key strength": "Building"
    },
    sources: [
      ["Meeting agenda", "https://www.oregon.gov/gov/policies/Documents/01_BHTC%20Meeting%20Agenda%2010.23.25%20Final.pdf"],
      ["Recording (1:00:06 to 1:16:57)", "https://www.youtube.com/watch?v=LZo1aW-b-3s&t=3606s"]
    ],
    description: "Peer helpers are more empathic to the situations of those who reach out for support, as they may be going through something similar. There is also an equal power dynamic, which allows people to share more with people their own age. As for why I do it, I want to see a world that is compassionate and connected.",
    connections: ["bh-tech", "new-drug-talk"]
  },

  "new-drug-talk": {
    title: "The New Drug Talk Panel",
    details: {
      "Date": "November 12, 2025",
      "Partner": "Song for Charlie",
      "Type": "Professional",
      "Key strength": "Listening"
    },
    sources: [
      ["The New Drug Talk: Oregon resources", "https://www.thenewdrugtalk.org/resources/oregon"]
    ],
    description: "Talking to adults can be intimidating; they have their stories to tell, judgments to share, and advice to offer. When it comes to sensitive topics like substance use, stress, or mental health, the way adults respond can determine whether we feel comfortable coming to them again in the future.",
    connections: ["unplugged", "talent-council"]
  },

  "unplugged": {
    title: "Unplugged Screening Panel",
    details: {
      "Date": "November 2026",
      "Partner": "Song for Charlie",
      "Type": "Professional",
      "Key strength": "Advocating"
    },
    sources: [
      ["YouthLine on Instagram", "https://www.instagram.com/theyouthline/p/Df-L_yZMypM/"]
    ],
    description: "We joined Song for Charlie for a screening of their short film Unplugged, which explores youth mental health and healthy coping skills! Two of our YouthLine volunteers sat on the panel alongside incredible experts in the field. Youth are the experts this field needs.",
    connections: ["new-drug-talk", "bh-tech"]
  },

  "bh-tech": {
    title: "Behavioral Health Tech Conference",
    details: {
      "Date": "September 2026",
      "Venue": "Nashville, Tennessee",
      "Type": "Professional",
      "Key strength": "Building"
    },
    sources: [
      ["YouthLine on Instagram", "https://www.instagram.com/theyouthline/p/De0OF54Eqrc/"]
    ],
    description: "Two of our amazing YouthLine volunteers and two staff members attended the Behavioral Health Tech Conference in Nashville, TN! They connected with advocates and organizations working to make mental health care more accessible and equitable for everyone.",
    connections: ["talent-council", "osbha"]
  },

  "osbha": {
    title: "Oregon School-Based Health Alliance Conference",
    details: {
      "Date": "May 18–19, 2026",
      "Partner": "Oregon School-Based Health Alliance",
      "Type": "Professional",
      "Key strength": "Building"
    },
    sources: [],
    description: "Details coming soon.",
    connections: ["bh-tech", "hawaii-school"]
  },

  "dc-trip": {
    title: "Washington, D.C. Trip",
    details: {
      "Venue": "Washington, D.C.",
      "Type": "Policy",
      "Key strength": "Advocating"
    },
    sources: [],
    description: "Details coming soon.",
    connections: ["wyden-council", "sb-1546"]
  },

  "bh-webinar": {
    title: "Behavioral Health Webinar",
    details: {
      "Type": "Professional",
      "Key strength": "Advocating"
    },
    sources: [],
    description: "Details coming soon.",
    connections: ["talent-council"]
  },

  "blazers": {
    title: "Trail Blazers Pride Night",
    details: {
      "Date": "December 18, 2025",
      "Partner": "Portland Trail Blazers",
      "Type": "Outreach",
      "Key strength": "Building",
      "Outcome": "Featured as a community resource for LGBTQIA+ youth"
    },
    sources: [
      ["Trail Blazers announcement", "https://www.nba.com/blazers/news/portland-trail-blazers-host-their-pride-celebration-game-presented-by-jamba-on-december-18"],
      ["KOIN News", "https://www.koin.com/everydaynorthwest/trail-blazers-celebrate-pride-night/"],
      ["Promotion on Instagram", "https://www.instagram.com/reel/DSa0hOSDH4g/"],
      ["Promotion on Facebook", "https://www.facebook.com/share/v/1Fjxj4fzWN/"]
    ],
    description: "An ad highlighting YouthLine as a resource for LGBTQIA+ youth at the Trail Blazers' Pride Night, with a community resource feature at the game and a shoutout by KOIN News.",
    connections: ["koin-pride", "afsp-walk", "dna-video"]
  },

  "koin-pride": {
    title: "KOIN: Trail Blazers Celebrate Pride Night",
    details: {
      "Date": "December 17, 2025",
      "Outlet": "KOIN 6, Everyday Northwest",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Watch on KOIN", "https://www.koin.com/everydaynorthwest/trail-blazers-celebrate-pride-night/"]
    ],
    description: "KOIN's Everyday Northwest previewed the Portland Trail Blazers' Celebration of Pride game and named YouthLine among the local LGBTQ2SIA+ nonprofits highlighted that night.",
    connections: ["blazers", "kgw-signing"]
  },

  "afsp-walk": {
    title: "AFSP Walk",
    details: {
      "Date": "October 4, 2025",
      "Partner": "American Foundation for Suicide Prevention",
      "Type": "Outreach",
      "Key strength": "Building"
    },
    sources: [],
    description: "YouthLine at the American Foundation for Suicide Prevention Walk.",
    connections: ["advocacy-day", "blazers"]
  },

  "hawaii-school": {
    title: "YouthLine Hawaiʻi School Visit",
    details: {
      "Date": "Fall 2026",
      "Venue": "Hawaiʻi",
      "Type": "Outreach",
      "Key strength": "Building"
    },
    sources: [
      ["YouthLine on Instagram", "https://www.instagram.com/theyouthline/p/DfVDOeBjT0R/"]
    ],
    description: "YouthLine Hawaiʻi volunteers visited a local school to talk with students about stress, stress management, and coping skills! Stress looks different for everyone, and so do the ways we cope.",
    connections: ["hawaii-cohort", "osbha"]
  },

  "hawaii-cohort": {
    title: "YouthLine Hawaiʻi Cohort 4",
    details: {
      "Date": "October 2026",
      "Venue": "Hawaiʻi",
      "Type": "Programs",
      "Key strength": "Building",
      "Outcome": "A fourth cohort of youth volunteers trained"
    },
    sources: [
      ["YouthLine on Instagram", "https://www.instagram.com/theyouthline/p/DesDeGNgb6F/"]
    ],
    description: "Help us welcome YouthLine Hawaiʻi’s Cohort 4 volunteers! We’re excited to welcome this newest group of youth volunteers as they complete their training and prepare to support peers in their communities. Through their time, care, and commitment, they’re helping make sure youth have someone to turn to when they need support.",
    connections: ["hawaii-school"]
  },

  "dna-video": {
    title: "Peer Support Video with DNA PDX",
    details: {
      "Date": "November 2025",
      "Partner": "DNA PDX",
      "Type": "Programs",
      "Key strength": "Listening"
    },
    sources: [
      ["Watch on Instagram", "https://www.instagram.com/theyouthline/reel/DQ7j6T9DHsG/"]
    ],
    description: "Everyone goes through tough stuff sometimes. At YouthLine, you can talk with another young person who listens, understands, and cares. We are so grateful for our volunteers who participated in this project, and to DNA PDX for putting together this video with some of our youth volunteers!",
    connections: ["roleplay", "blazers"]
  },

  "roleplay": {
    title: "What It's Like to Reach Out",
    details: {
      "Date": "January 2026",
      "Type": "Programs",
      "Key strength": "Listening"
    },
    sources: [
      ["Watch on Instagram", "https://www.instagram.com/theyouthline/reel/DTvilINDAfN/"]
    ],
    description: "We get a lot of questions about what it’s like to reach out to YouthLine, so we created a roleplay example to show you! Whether it’s academic stress, family conflict, or relationship drama, YouthLine is here to listen.",
    connections: ["dna-video"]
  }

};


// =====================================================
// 2. SHOWING AN ENTRY IN THE PANEL
// =====================================================

const home = document.getElementById("home");
const entryView = document.getElementById("entry");
const panel = document.getElementById("panel");

function showEntry(name) {
  const entry = entries[name];
  if (!entry) return;

  document.getElementById("entry-title").textContent = entry.title;

  // Details list (Date, Venue, Type...)
  const details = document.getElementById("entry-details");
  details.innerHTML = "";
  for (const [label, value] of Object.entries(entry.details)) {
    details.innerHTML += `<dt>${label}</dt><dd>${value}</dd>`;
  }
  if (entry.sources.length > 0) {
    const links = entry.sources
      .map(([text, url]) => `<a href="${url}" target="_blank" rel="noopener">${text}</a>`)
      .join("<br>");
    details.innerHTML += `<dt>Source</dt><dd>${links}</dd>`;
  }

  document.getElementById("entry-description").textContent = entry.description;

  // Connections: links that open other entries
  const connections = document.getElementById("entry-connections");
  connections.innerHTML = "";
  for (const other of entry.connections) {
    if (!entries[other]) continue;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "connection";
    button.innerHTML = `${entries[other].title} <span>${entries[other].details["Type"]}</span>`;
    button.addEventListener("click", () => showEntry(other));
    li.appendChild(button);
    connections.appendChild(li);
  }

  // Highlight the matching card on the board
  document.querySelectorAll(".card").forEach(card => {
    card.classList.toggle("active", card.dataset.entry === name);
  });

  home.hidden = true;
  entryView.hidden = false;
  panel.scrollTop = 0;
  // On phones the panel is above the board, so jump up to it
  if (window.innerWidth <= 800) panel.scrollIntoView({ behavior: "smooth" });
}

function showHome() {
  entryView.hidden = true;
  home.hidden = false;
  document.querySelectorAll(".card").forEach(card => card.classList.remove("active"));
}

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    if (board.dataset.dragged === "yes") return;   // ignore clicks that were really drags
    showEntry(card.dataset.entry);
  });
});

document.getElementById("back").addEventListener("click", showHome);

// "Get in touch" in an entry: go back to the guide view and scroll to Work with us
document.querySelector(".context a").addEventListener("click", event => {
  event.preventDefault();
  showHome();
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});


// =====================================================
// 3. DRAGGING THE BOARD AROUND (like the reference site)
// =====================================================

const board = document.getElementById("board");
let dragging = false;
let startX, startY, startLeft, startTop;

board.addEventListener("mousedown", event => {
  dragging = true;
  board.dataset.dragged = "no";
  startX = event.clientX;
  startY = event.clientY;
  startLeft = board.scrollLeft;
  startTop = board.scrollTop;
  board.classList.add("grabbing");
});

window.addEventListener("mousemove", event => {
  if (!dragging) return;
  const dx = event.clientX - startX;
  const dy = event.clientY - startY;
  if (Math.abs(dx) + Math.abs(dy) > 5) board.dataset.dragged = "yes";
  board.scrollLeft = startLeft - dx;
  board.scrollTop = startTop - dy;
});

window.addEventListener("mouseup", () => {
  dragging = false;
  board.classList.remove("grabbing");
  setTimeout(() => { board.dataset.dragged = "no"; }, 0);
});
