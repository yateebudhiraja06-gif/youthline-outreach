// =====================================================
// EXTRAS: zooming, the big fading circle, wiggly lines
// between connected cards, and the "?" guide.
// This file works alongside script.js. It uses the
// "entries" list from script.js to know what connects.
// =====================================================

const canvas = document.getElementById("canvas");
const sizer = document.getElementById("sizer");
const lines = document.getElementById("lines");

const CANVAS_WIDTH = 1250;
const CANVAS_HEIGHT = 1420;


// ---------- 1. ZOOM ----------

let zoom = 1;
const MIN_ZOOM = 0.4;
const MAX_ZOOM = 1.6;

// Change the zoom while keeping the point at (x, y) on screen in the same place
function setZoom(newZoom, x = board.clientWidth / 2, y = board.clientHeight / 2) {
  newZoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, newZoom));

  // Which spot on the canvas is under (x, y) right now?
  const canvasX = (board.scrollLeft + x) / zoom;
  const canvasY = (board.scrollTop + y) / zoom;

  zoom = newZoom;
  canvas.style.transform = `scale(${zoom})`;
  sizer.style.width = CANVAS_WIDTH * zoom + "px";
  sizer.style.height = CANVAS_HEIGHT * zoom + "px";

  // Scroll so that same spot is still under (x, y)
  board.scrollLeft = canvasX * zoom - x;
  board.scrollTop = canvasY * zoom - y;
}

// Zoom out until the whole board fits on screen
function fitBoard() {
  const fit = Math.min(board.clientWidth / CANVAS_WIDTH, board.clientHeight / CANVAS_HEIGHT);
  setZoom(fit);
  board.scrollLeft = 0;
  board.scrollTop = 0;
}

document.getElementById("zoom-in").addEventListener("click", () => setZoom(zoom + 0.1));
document.getElementById("zoom-out").addEventListener("click", () => setZoom(zoom - 0.1));
document.getElementById("zoom-fit").addEventListener("click", fitBoard);

// Pinch on a trackpad (or Ctrl + scroll wheel) zooms toward the pointer
board.addEventListener("wheel", event => {
  if (!event.ctrlKey) return;          // normal scrolling still scrolls
  event.preventDefault();
  const rect = board.getBoundingClientRect();
  setZoom(zoom * (1 - event.deltaY * 0.01), event.clientX - rect.left, event.clientY - rect.top);
}, { passive: false });

// When the page opens: zoom out so most of the board (and the big circle) shows,
// but not so far that the cards get too small to read, then center it
const fitZoom = Math.min(board.clientWidth / CANVAS_WIDTH, board.clientHeight / CANVAS_HEIGHT);
setZoom(Math.max(fitZoom, 0.6));
board.scrollLeft = (CANVAS_WIDTH * zoom - board.clientWidth) / 2;
board.scrollTop = (CANVAS_HEIGHT * zoom - board.clientHeight) / 2;


// ---------- 2. THE "?" GUIDE ----------

const helpButton = document.getElementById("help-button");
const helpBox = document.getElementById("help");

function setHelp(open) {
  helpBox.hidden = !open;
  helpButton.setAttribute("aria-expanded", open);
}

helpButton.addEventListener("click", () => setHelp(helpBox.hidden));

// Close it with the Escape key, or by clicking anywhere else
document.addEventListener("keydown", event => {
  if (event.key === "Escape") setHelp(false);
});
document.addEventListener("click", event => {
  if (!helpBox.hidden && !helpBox.contains(event.target) && event.target !== helpButton) {
    setHelp(false);
  }
});


// ---------- 3. CIRCLE + WIGGLY LINES ----------

// The middle point of a card, measured on the canvas
function centerOf(card) {
  return {
    x: card.offsetLeft + card.offsetWidth / 2,
    y: card.offsetTop + card.offsetHeight / 2
  };
}

// The bend point for a gentle curve from a to b
function controlPoint(a, b) {
  const bend = 0.25;   // bigger number = more curved
  return {
    x: (a.x + b.x) / 2 - (b.y - a.y) * bend,
    y: (a.y + b.y) / 2 + (b.x - a.x) * bend
  };
}

// A point partway along the curve: t = 0 is the start, t = 1 is the end
function pointOnCurve(a, c, b, t) {
  return {
    x: (1 - t) * (1 - t) * a.x + 2 * (1 - t) * t * c.x + t * t * b.x,
    y: (1 - t) * (1 - t) * a.y + 2 * (1 - t) * t * c.y + t * t * b.y
  };
}

// Which way the curve is heading at t (used to wiggle sideways)
function directionOnCurve(a, c, b, t) {
  const dx = 2 * (1 - t) * (c.x - a.x) + 2 * t * (b.x - c.x);
  const dy = 2 * (1 - t) * (c.y - a.y) + 2 * t * (b.y - c.y);
  const length = Math.hypot(dx, dy) || 1;
  return { x: dx / length, y: dy / length };
}

// A wiggly line: follow the curve, but sway side to side.
// waves = how many wiggles, size = how far it sways.
// The sway shrinks to nothing at both ends, so the line still meets the cards.
function wigglyPath(a, c, b, waves, size) {
  let d = "";
  const steps = 80;
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const point = pointOnCurve(a, c, b, t);
    const dir = directionOnCurve(a, c, b, t);
    const sway = size * Math.sin(Math.PI * t) * Math.sin(2 * Math.PI * waves * t);
    const x = point.x - dir.y * sway;
    const y = point.y + dir.x * sway;
    d += (i === 0 ? "M " : " L ") + x.toFixed(1) + " " + y.toFixed(1);
  }
  return d;
}

// Each connection gets its own style, picked from this list,
// so some lines are smooth and some are wiggly (like apossible)
const lineStyles = [
  { waves: 3, size: 14 },   // big lazy wiggle
  { waves: 0, size: 0 },    // smooth curve
  { waves: 6, size: 7 },    // small quick wiggle
  { waves: 4.5, size: 10 }  // in-between
];

// Turn a name into a number, so the same connection always gets the same style
function pickStyle(name) {
  let total = 0;
  for (const letter of name) total += letter.charCodeAt(0);
  return lineStyles[total % lineStyles.length];
}

// Is a point inside a card's box? (plus a little extra room, so the
// dot sits just outside the card and its outline)
function isInside(point, card) {
  const room = 10;
  return point.x > card.offsetLeft - room && point.x < card.offsetLeft + card.offsetWidth + room &&
         point.y > card.offsetTop - room && point.y < card.offsetTop + card.offsetHeight + room;
}

// Walk along the curve until we step outside the card: that's its edge
function edgeOf(card, a, c, b, fromStart) {
  for (let i = 1; i <= 100; i++) {
    const t = fromStart ? i / 100 : 1 - i / 100;
    const point = pointOnCurve(a, c, b, t);
    if (!isInside(point, card)) return point;
  }
  return fromStart ? a : b;
}

// The fade for the big circle: Cyan that fades to nothing across the circle
const ringFade = `
  <defs>
    <linearGradient id="ring-fade" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#00AEEF" stop-opacity="0.9"/>
      <stop offset="55%"  stop-color="#00AEEF" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#00AEEF" stop-opacity="0"/>
    </linearGradient>
  </defs>`;

// A big circle with a few dots on it, like the one on apossible
function drawRing(center, radius, dotAngles) {
  lines.innerHTML += `<circle class="ring" cx="${center.x}" cy="${center.y}" r="${radius}"/>`;
  dotAngles.forEach((angle, i) => {
    const radians = angle * Math.PI / 180;
    const x = center.x + radius * Math.cos(radians);
    const y = center.y + radius * Math.sin(radians);
    // the first dot is bigger and white, the rest are small and cyan
    lines.innerHTML += i === 0
      ? `<circle class="dot big" cx="${x}" cy="${y}" r="9"/>`
      : `<circle class="dot" cx="${x}" cy="${y}" r="5"/>`;
  });
}

function drawLines() {
  lines.innerHTML = ringFade;
  document.querySelectorAll(".card.connected").forEach(card => card.classList.remove("connected"));
  const active = document.querySelector(".card.active");

  // No card selected (when the page opens): one big circle around the middle of the board
  if (!active) {
    canvas.classList.remove("focused");
    drawRing({ x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2 - 40 }, 400, [135, -60, 40]);
    return;
  }

  canvas.classList.add("focused");
  const start = centerOf(active);
  const entry = entries[active.dataset.entry];

  // A circle around the selected card, reaching out toward its connections
  const others = entry.connections
    .map(name => document.querySelector(`.card[data-entry="${name}"]`))
    .filter(card => card);
  let radius = 260;
  if (others.length > 0) {
    const distances = others.map(card => Math.hypot(centerOf(card).x - start.x, centerOf(card).y - start.y));
    radius = distances.reduce((a, b) => a + b, 0) / distances.length;
  }
  drawRing(start, Math.min(Math.max(radius, 180), 480), [135, 20]);

  // One wiggly (or smooth) line to each connected card
  for (const name of entry.connections) {
    const other = document.querySelector(`.card[data-entry="${name}"]`);
    if (!other) continue;
    other.classList.add("connected");

    const end = centerOf(other);
    const bendPoint = controlPoint(start, end);
    const style = pickStyle(active.dataset.entry + name);

    // Dots go where the line leaves each card, so they are not hidden
    const dot1 = edgeOf(active, start, bendPoint, end, true);
    const dot2 = edgeOf(other, start, bendPoint, end, false);

    lines.innerHTML +=
      `<path pathLength="1" d="${wigglyPath(start, bendPoint, end, style.waves, style.size)}"/>` +
      `<circle class="dot" cx="${dot1.x}" cy="${dot1.y}" r="5"/>` +
      `<circle class="dot" cx="${dot2.x}" cy="${dot2.y}" r="5"/>`;
  }
}

// Redraw whenever a card becomes active or stops being active
// (script.js adds and removes the "active" class).
// Only watch the "active" change, so our own "connected" class does not cause a loop.
let lastActive = null;
const watcher = new MutationObserver(() => {
  const active = document.querySelector(".card.active");
  const name = active ? active.dataset.entry : null;
  if (name !== lastActive) {
    lastActive = name;
    drawLines();
  }
});
document.querySelectorAll(".card").forEach(card => {
  watcher.observe(card, { attributes: true, attributeFilter: ["class"] });
});

// Draw the big circle as soon as the page opens
drawLines();
