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
      "Headline": "Oregon governor signs bills targeting AI chatbot safety, behavioral health workforce issues",
      "Outlet": "KGW News",
      "Type": "Press",
      "Key strength": "Advocating"
    },
    sources: [
      ["Read on KGW", "https://www.kgw.com/article/news/politics/kotek-sign-oregon-ai-teen-mental-health-bill-safety-chatbot/283-321743ef-c1c2-49dc-bdec-da956c94704f"],
      ["Also covered by OregonLive", "https://www.oregonlive.com/politics/2026/05/new-oregon-law-will-compel-ai-chatbots-to-connect-suicidal-users-to-real-life-help.html"]
    ],
    description: "“AI isn’t human, and it doesn’t know what we feel.” (YouthLine volunteer, to KGW)",
    connections: ["sb-1546", "koin-pride"]
  },

  "advocacy-day": {
    title: "AFSP Advocacy Day",
    details: {
      "Date": "February 9, 2026",
      "Venue": "Oregon State Capitol, Salem",
      "Partner": "American Foundation for Suicide Prevention",
      "Type": "Policy",
      "Key strength": "Advocating"
    },
    sources: [],
    description: "YouthLine volunteers joined the American Foundation for Suicide Prevention at the Oregon State Capitol to advocate for three bills, talking with state senators and representatives about each one. HB 4070 ensures parity in access to mental health and substance use disorder treatment. HB 4028 strengthens insurance parity requirements to protect behavioral health treatment providers. SB 1546 requires AI companion platforms to refer users who express suicidal thoughts to crisis resources like 988.",
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
    description: "A YouthLine volunteer presented YouthLine to Oregon’s Behavioral Health Talent Council as a proven model for supporting young people and growing the behavioral health workforce. The presentation showed how peer helpers close in age build trust through an equal power dynamic, how volunteering builds skills that carry into behavioral health careers, and how ongoing training, regular check-ins, and a supportive culture help prevent burnout. “Workforces now more than ever need workers who have emotional intelligence, resilience, and adaptability. YouthLine has trained students to have all three of these characteristics.”",
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
    description: "A YouthLine volunteer presented why teens might find it difficult to tell adults about things like suicide and self-harm, as well as ways adults can approach those talks with understanding rather than judgment.",
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
      "Date": "September 22–24, 2026",
      "Venue": "Gaylord Opryland Resort & Convention Center, Nashville, Tennessee",
      "YouthLine panel": "“Schools Can’t Do This Alone - But They Can’t Opt Out Either,” September 24, 2026, Youth & Young Adults track",
      "Moderator": "Alison Malmon, Active Minds",
      "Also on the panel": "Alicia Ead (The Bradley Learning Exchange); Lauren Carson (Black Girls Smile); Gabi Green",
      "Also at the conference": "“Ask a Teen” counter; helped lead the “Measure What Matters” workshop",
      "Type": "Professional",
      "Key strength": "Building"
    },
    sources: [
      ["Conference agenda (BHT2026)", "https://45392274.fs1.hubspotusercontent-na1.net/hubfs/45392274/BHT2026/BHT2026%20Agenda.pdf"],
      ["Conference reflections (BHT Impact)", "https://www.bhtimpact.org/post/reflections-on-youth-leadership-peer-support-and-co-design-at-behavioral-health-tech-2026"],
      ["YouthLine on Instagram", "https://www.instagram.com/theyouthline/p/De0OF54Eqrc/"]
    ],
    description: "Two of our amazing YouthLine volunteers and two staff members attended the Behavioral Health Tech Conference in Nashville, TN! They connected with advocates and organizations working to make mental health care more accessible and equitable for everyone. A YouthLine volunteer also spoke on the panel “Schools Can’t Do This Alone - But They Can’t Opt Out Either,” saying, “Instead of waiting for students to talk about their problems, schools can meet them in the middle.” YouthLine volunteers also helped run an “Ask a Teen” counter, where adults could ask teens questions about mental health and their experiences, and a volunteer helped lead part of the workshop “Measure What Matters: Building an Actionable Measurement Strategy in Youth Behavioral Health,” answering participants’ questions. Reflecting on the conference, BHT Impact correspondent Anika Nayak wrote, “Young people aren’t waiting for someone else to build those relationships for them.”",
    connections: ["talent-council", "bh-webinar", "osbha"]
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
    title: "U.S. Senate Forum on Youth Peer Crisis Support",
    details: {
      "Date": "July 28, 2026",
      "Venue": "Senate Finance Committee Hearing Room, Washington, D.C.",
      "Host": "U.S. Senator Ron Wyden, with the National Action Alliance for Suicide Prevention",
      "Volunteers": "Eight: five from Oregon, three from Maui",
      "Type": "Policy",
      "Key strength": "Advocating"
    },
    sources: [
      ["Lines for Life press release", "https://www.linesforlife.org/youthline-volunteers-participate-in-u-s-senate-forum-on-youth-mental-health/"],
      ["Eight Teens, 14,000 Miles (Lines for Life)", "https://www.linesforlife.org/eight-teens-14000-miles-advocating-for-youth-mental-health/"]
    ],
    description: "“Fortunately, YouthLine has pioneered a proven model to tackle this crisis.” (U.S. Senator Ron Wyden)",
    connections: ["wyden-council", "sb-1546"]
  },

  "bh-webinar": {
    title: "Beyond the Barriers: Behavioral Health Tech Webinar",
    details: {
      "Date": "September 15, 2026",
      "Host": "Behavioral Health Tech Insider Sessions, in partnership with Somethings",
      "Session": "Beyond the Barriers: Building Youth Behavioral Health Support That Actually Reaches Everyone",
      "YouthLine speakers": "Morgan Leets, MEd, Deputy Director of Youth Development, Training, and Quality Assurance; a YouthLine volunteer",
      "Also on the panel": "Amber W. Childs, Ph.D (Somethings); Kelsie Okamura (Penn Medicine); Marc Fagan, Psy.D (YouthCare Health Choice Illinois)",
      "Type": "Professional",
      "Key strength": "Advocating"
    },
    sources: [
      ["Behavioral Health Tech Insider Sessions", "https://www.behavioralhealthtech.com/insider-sessions"],
      ["Watch on demand", "https://us06web.zoom.us/webinar/register/6717878039488/WN_IOYVTSy1Q4KafZDZXPNtBg"]
    ],
    description: "YouthLine's Morgan Leets and a volunteer joined a national Behavioral Health Tech webinar on building youth behavioral health support that reaches every young person. They spoke alongside leaders from Somethings, Penn Medicine, and YouthCare Health Choice Illinois. “Metrics are important, but they’re not going to tell you the whole story,” said a YouthLine volunteer.",
    connections: ["bh-tech", "talent-council"]
  },

  "blazers": {
    title: "Trail Blazers Pride Night",
    details: {
      "Date": "December 18, 2025",
      "Partner": "Portland Trail Blazers",
      "Type": "Outreach",
      "Key strength": "Building",
      "Outcome": "Named Community Partner of the night"
    },
    sources: [
      ["Trail Blazers announcement", "https://www.nba.com/blazers/news/portland-trail-blazers-host-their-pride-celebration-game-presented-by-jamba-on-december-18"],
      ["KOIN News", "https://www.koin.com/everydaynorthwest/trail-blazers-celebrate-pride-night/"],
      ["Promotion on Instagram", "https://www.instagram.com/reel/DSa0hOSDH4g/"],
      ["Promotion on Facebook", "https://www.facebook.com/share/v/1Fjxj4fzWN/"]
    ],
    description: "“The Community Partner of the night, YouthLine.” (Portland Trail Blazers)",
    connections: ["koin-pride", "afsp-walk", "dna-video"]
  },

  "koin-pride": {
    title: "KOIN: Trail Blazers Celebrate Pride Night",
    details: {
      "Date": "December 17, 2025",
      "Headline": "Trail Blazers Celebrate Pride Night",
      "Outlet": "KOIN 6, Everyday Northwest",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Watch on KOIN", "https://www.koin.com/everydaynorthwest/trail-blazers-celebrate-pride-night/"]
    ],
    description: "“Several local LGBTQ2SIA+ nonprofits will also be highlighted throughout the evening, including YouthLine.” (KOIN)",
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
    description: "YouthLine tabled at the American Foundation for Suicide Prevention Walk, talking with community members about what YouthLine does and distributing resources.",
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
    description: "We’re excited to welcome this newest group of youth volunteers as they complete their training and prepare to support peers in their communities. Through their time, care, and commitment, they’re helping make sure youth have someone to turn to when they need support.",
    connections: ["hawaii-school", "maui-imua"]
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
  },

  "apa-monitor": {
    title: "APA Monitor: Peer Support Crisis Line for Teens",
    details: {
      "Date": "July 1, 2023",
      "Headline": "YouthLine: A peer-support crisis line for teens",
      "Outlet": "Monitor on Psychology, American Psychological Association",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Read on APA", "https://www.apa.org/monitor/2023/07/peer-support-crisis-line-teens"]
    ],
    description: "YouthLine director Emily Moser was interviewed by the American Psychological Association’s Monitor on Psychology about how YouthLine’s peer-support model works and why it matters. She is often asked, “Can teenagers really do this?” to which she said, “The answer is an obvious yes.”",
    connections: ["pbs-newshour", "talent-council"]
  },

  "pbs-newshour": {
    title: "PBS NewsHour: Teen Volunteers Staff Crisis Support Line",
    details: {
      "Date": "January 25, 2023",
      "Headline": "Teen volunteers staff crisis support line to help peers facing mental health challenges",
      "Outlet": "PBS NewsHour",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Watch on PBS", "https://www.pbs.org/newshour/show/teen-volunteers-staff-crisis-support-line-to-help-peers-facing-mental-health-challenges"]
    ],
    description: "“Teenagers field calls from other teenagers who are struggling.” (PBS NewsHour)",
    connections: ["apa-monitor", "kgw-breaking-silence"]
  },

  "kgw-breaking-silence": {
    title: "KGW: Breaking the Silence",
    details: {
      "Headline": "Breaking the Silence: YouthLine serves as critical resource for teens in need",
      "Outlet": "KGW News",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Read on KGW", "https://kgw.com/article/news/breaking-the-silence-youthline-serves-as-critical-resource-for-teens-in-need/283-979b940e-cd88-4aa6-a44e-db76a3dd015f"]
    ],
    description: "“People just want to be heard.” (YouthLine volunteers, to KGW)",
    connections: ["pbs-newshour", "roleplay"]
  },

  "jpr-southern-oregon": {
    title: "JPR: YouthLine Brings Peer-Based Crisis Support to Southern Oregon",
    details: {
      "Date": "January 15, 2026",
      "Headline": "YouthLine brings peer-based crisis support to southern Oregon",
      "Outlet": "Jefferson Public Radio, The Jefferson Exchange",
      "Accredited by": "American Association of Suicidology",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Listen on JPR", "https://www.ijpr.org/podcast/the-jefferson-exchange/2026-01-15/youthline-expands-to-southern-oregon"]
    ],
    description: "“The organization has served ages 10 to 24 since 2000.” (Jefferson Public Radio)",
    connections: ["wildhorse-grant", "osbha"]
  },

  "maui-imua": {
    title: "Maui Now: Imua Family Services and YouthLine Collaborate",
    details: {
      "Date": "September 6, 2025",
      "Headline": "Imua Family Services and YouthLine collaborate on youth mental health and suicide prevention in Maui County",
      "Outlet": "Maui Now",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Read on Maui Now", "https://mauinow.com/2025/09/06/imua-family-services-and-youthline-collaborate-on-youth-mental-health-and-suicide-prevention-in-maui-county/"]
    ],
    description: "“YouthLine, a service of Lines for Life, is committed to addressing this pressing issue.” (Maui Now)",
    connections: ["hawaii-cohort", "hawaii-school"]
  },

  "wildhorse-grant": {
    title: "Wildhorse Foundation Grant for School Suicide Prevention",
    details: {
      "Date": "September 22, 2026",
      "Partner": "Wildhorse Foundation",
      "Type": "Programs",
      "Key strength": "Building"
    },
    sources: [
      ["Lines for Life announcement", "https://www.linesforlife.org/blog/page/2/"]
    ],
    description: "“Received a $10,000 grant from the Wildhorse Foundation.” (Lines for Life)",
    connections: ["osbha", "jpr-southern-oregon"]
  }
,
  "grant-magazine": {
    title: "Grant Magazine: On The Line",
    details: {
      "Date": "April 7, 2026",
      "Outlet": "Grant Magazine, Grant High School",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Read on Grant Magazine", "https://grantmagazine.com/28300/news/on-the-line/"]
    ],
    description: "“YouthLine, a mental health crisis line, is changing the game for youth nationwide.” (Grant Magazine)",
    connections: ["cardinal-times", "pbs-newshour"]
  },

  "cardinal-times": {
    title: "The Cardinal Times: A Lifeline for Students, Run by Students",
    details: {
      "Date": "May 20, 2025",
      "Headline": "Youthline: A lifeline for students, run by students",
      "Outlet": "The Cardinal Times",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Read on The Cardinal Times", "https://cardinaltimes.org/25984/news/youthline-a-lifeline-for-students-run-by-students/"]
    ],
    description: "“No problem is too big or too small.” (Genevieve Castle, YouthLine outreach coordinator)",
    connections: ["grant-magazine", "kgw-breaking-silence"]
  },

  "opb-safe-social": {
    title: "OPB Think Out Loud: Safe Social Spaces",
    details: {
      "Date": "July 9, 2024",
      "Headline": "Safe Social Spaces program run by Lines for Life uses social media to help youth in crisis",
      "Outlet": "OPB, Think Out Loud",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Listen on OPB", "https://www.opb.org/article/2024/07/10/think-out-loud-suicide-mental-health-oregon-safe-spaces/"]
    ],
    description: "“YouthLine is available for phone calls, texts and chats.” (OPB)",
    connections: ["hechinger-native", "roleplay"]
  },

  "hechinger-native": {
    title: "The Hechinger Report: A Crisis Call Line Run by Native Youth",
    details: {
      "Date": "April 29, 2024",
      "Headline": "A crisis call line run by Native youth, for Native youth",
      "Outlet": "The Hechinger Report (also published by OPB)",
      "Type": "Press",
      "Key strength": "Building"
    },
    sources: [
      ["Read on The Hechinger Report", "https://hechingerreport.org/a-crisis-call-line-run-by-native-youth-for-native-youth/"],
      ["Read on OPB", "https://opb.org/article/2024/04/29/oregon-crisis-call-line-native-youth"]
    ],
    description: "“Youthline is part of the 988 network” (The Hechinger Report)",
    connections: ["opb-safe-social", "jpr-southern-oregon"]
  },

  "island-scene": {
    title: "Island Scene: A New Line of Support for Youth Mental Health",
    details: {
      "Date": "July 7, 2026",
      "Headline": "A new line of support for youth mental health",
      "Outlet": "Island Scene",
      "Type": "Press",
      "Key strength": "Listening"
    },
    sources: [
      ["Read on Island Scene", "https://islandscene.com/a-new-line-of-support-for-youth-mental-health"]
    ],
    description: "“You don’t have to be falling apart to ask for help.” (Island Scene)",
    connections: ["maui-imua", "hawaii-cohort"]
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
