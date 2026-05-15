const STORAGE_KEY = "wc2026_sweepstake_state_v2";

const TEAM_POOL = [
  { name: "France", group: "I", rank: 1, points: 1877.32, confed: "UEFA", flagCode: "fr", fifaCode: "FRA", colors: ["#1c3f95", "#d61f2b"], kitHome: "Navy with tricolour side stripe", kitAway: "White with red-blue trim", history: "World champions in 2018 and finalists in 2022.", strength: "Deep squad with elite pace and ball progression.", weakness: "Can become vulnerable when full-backs push high." },
  { name: "Spain", group: "H", rank: 2, points: 1876.4, confed: "UEFA", flagCode: "es", fifaCode: "ESP", colors: ["#b3122d", "#f0c30f"], kitHome: "Red body with gold accents", kitAway: "Pale kit with red detailing", history: "Former champions with a possession-first tournament identity.", strength: "Control of tempo and midfield circulation.", weakness: "Can struggle when transitions become open and direct." },
  { name: "Argentina", group: "J", rank: 3, points: 1874.81, confed: "CONMEBOL", flagCode: "ar", fifaCode: "ARG", colors: ["#73c7f4", "#ffffff"], kitHome: "Sky blue and white stripes", kitAway: "Deep blue alternate set", history: "Current world champions after lifting the 2022 title.", strength: "Big-game composure and sharp chance creation.", weakness: "Aging core can be stretched by high-tempo opponents." },
  { name: "England", group: "L", rank: 4, points: 1825.97, confed: "UEFA", flagCode: "gb-eng", fifaCode: "ENG", colors: ["#f7f7f7", "#c90d2f"], kitHome: "Clean white with red details", kitAway: "Dark alternate with bright trim", history: "Consistent deep-run contender across recent majors.", strength: "Set-piece quality and depth in attacking roles.", weakness: "Can become conservative when leading knockouts." },
  { name: "Portugal", group: "K", rank: 5, points: 1813.19, confed: "UEFA", flagCode: "pt", fifaCode: "POR", colors: ["#0f7a3a", "#b00b24"], kitHome: "Red with green blocks", kitAway: "White with green-red accents", history: "European champions with strong tournament know-how.", strength: "Technical midfield and efficient final-third play.", weakness: "Defensive line can be exposed by direct balls." },
  { name: "Brazil", group: "C", rank: 6, points: 1778.73, confed: "CONMEBOL", flagCode: "br", fifaCode: "BRA", colors: ["#e2bf00", "#1c4ca3"], kitHome: "Iconic yellow with green trim", kitAway: "Blue with yellow details", history: "Five-time world champions with unmatched legacy.", strength: "Individual quality across every attacking lane.", weakness: "At times rely too heavily on moments of brilliance." },
  { name: "Netherlands", group: "F", rank: 7, points: 1752.44, confed: "UEFA", flagCode: "nl", fifaCode: "NED", colors: ["#eb6f00", "#121212"], kitHome: "Bright orange primary", kitAway: "Dark alternate with orange trim", history: "Three-time finalists still chasing a first world title.", strength: "Structured pressing and progressive passing from defense.", weakness: "Can lose width when opponents pin wing-backs." },
  { name: "Belgium", group: "G", rank: 8, points: 1735.75, confed: "UEFA", flagCode: "be", fifaCode: "BEL", colors: ["#1a1a1a", "#c5152d"], kitHome: "Dark red and black combination", kitAway: "Light base with tricolour trim", history: "A regular quarter-final and semi-final threat in recent cycles.", strength: "Technical quality between lines and in transition.", weakness: "Defensive recovery pace can be tested late in games." },
  { name: "Germany", group: "E", rank: 10, points: 1716.98, confed: "UEFA", flagCode: "de", fifaCode: "GER", colors: ["#f4f4f4", "#111111"], kitHome: "White with black accents", kitAway: "Deep red/black alternate", history: "Four-time champions rebuilding a high-ceiling squad.", strength: "Vertical passing and aggressive pressing triggers.", weakness: "Can leave space behind advanced midfielders." },
  { name: "Croatia", group: "L", rank: 11, points: 1710.68, confed: "UEFA", flagCode: "hr", fifaCode: "CRO", colors: ["#ffffff", "#d3132c"], kitHome: "Red-white checkerboard", kitAway: "Blue alternate with check details", history: "Finalists in 2018 and podium finishers in 2022.", strength: "Midfield intelligence and game management.", weakness: "Limited depth compared with top-tier giants." },
  { name: "Morocco", group: "C", rank: 12, points: 1698.72, confed: "CAF", flagCode: "ma", fifaCode: "MAR", colors: ["#ba101f", "#0f6b3b"], kitHome: "Red with green insignia details", kitAway: "White with red trim", history: "First African semi-finalist in World Cup history (2022).", strength: "Compact defensive block and dangerous counters.", weakness: "Chance volume can drop against deep opponents." },
  { name: "Uruguay", group: "H", rank: 13, points: 1680.36, confed: "CONMEBOL", flagCode: "uy", fifaCode: "URU", colors: ["#8ad2f2", "#ffffff"], kitHome: "Sky blue classic shirt", kitAway: "White alternate with sky trim", history: "Two-time champions with a long knockout tradition.", strength: "Competitive intensity and two-way midfield profile.", weakness: "Discipline can be an issue in emotional matches." },
  { name: "Colombia", group: "K", rank: 14, points: 1679.46, confed: "CONMEBOL", flagCode: "co", fifaCode: "COL", colors: ["#e5c20a", "#0f3b9f"], kitHome: "Yellow with navy-red accents", kitAway: "Dark blue with yellow trim", history: "Regular World Cup participant with technical attacking players.", strength: "Wide creativity and fluid attacking movement.", weakness: "Can fade physically in end-to-end fixtures." },
  { name: "Mexico", group: "A", rank: 15, points: 1673.83, confed: "CONCACAF", flagCode: "mx", fifaCode: "MEX", colors: ["#117848", "#c9152b"], kitHome: "Green with white-red accents", kitAway: "Light kit with Aztec-inspired pattern", history: "Co-host nation and frequent round-of-16 side.", strength: "Crowd energy and quick wing combinations.", weakness: "Finishing consistency has been a recurring issue." },
  { name: "United States", group: "D", rank: 16, points: 1660.89, confed: "CONCACAF", flagCode: "us", fifaCode: "USA", colors: ["#112a6b", "#d3222a"], kitHome: "White with navy-red striping", kitAway: "Dark/navy variation with stars motifs", history: "Co-host nation with a young core entering prime years.", strength: "Athletic pressing and transition pace.", weakness: "Still developing end-product against deep blocks." },
  { name: "Japan", group: "F", rank: 17, points: 1652.64, confed: "AFC", flagCode: "jp", fifaCode: "JPN", colors: ["#1d3d9a", "#d4212f"], kitHome: "Blue geometric primary", kitAway: "White with red-blue detailing", history: "A model of consistency in modern World Cups.", strength: "Collective structure and disciplined pressing.", weakness: "Aerial battles versus physically dominant sides." },
  { name: "Senegal", group: "I", rank: 18, points: 1641.07, confed: "CAF", flagCode: "sn", fifaCode: "SEN", colors: ["#0f713f", "#f0ce1a"], kitHome: "White with green-yellow-red accents", kitAway: "Green alternate with bold chest panel", history: "Africa Cup winners with strong recent tournament pedigree.", strength: "Defensive power and direct transition threat.", weakness: "Build-up can become rushed under pressure." },
  { name: "Switzerland", group: "B", rank: 19, points: 1638.5, confed: "UEFA", flagCode: "ch", fifaCode: "SUI", colors: ["#cb132a", "#ffffff"], kitHome: "Red with white trim", kitAway: "White with red central detail", history: "Reliable knockout qualifier across multiple cycles.", strength: "Set-piece organization and tactical discipline.", weakness: "Lower shot volume against top pressing teams." },
  { name: "Iran", group: "G", rank: 20, points: 1637.39, confed: "AFC", flagCode: "ir", fifaCode: "IRN", colors: ["#ffffff", "#d4172f"], kitHome: "White with green-red accents", kitAway: "Red alternate set", history: "Asia regular with a hard-to-break defensive identity.", strength: "Compact shape and dangerous counters.", weakness: "Possession retention in high-pressure phases." },
  { name: "Austria", group: "J", rank: 22, points: 1615.67, confed: "UEFA", flagCode: "at", fifaCode: "AUT", colors: ["#d10e2b", "#ffffff"], kitHome: "Red with white patterning", kitAway: "White with red shoulder detailing", history: "Back among the top European tournament challengers.", strength: "High-intensity pressing with quick vertical play.", weakness: "Can concede fouls in risky pressing zones." },
  { name: "Ecuador", group: "E", rank: 24, points: 1566.59, confed: "CONMEBOL", flagCode: "ec", fifaCode: "ECU", colors: ["#f2cd00", "#0f3ea2"], kitHome: "Yellow base with navy-red trim", kitAway: "Blue alternate with yellow accents", history: "Rising South American side with strong development pipeline.", strength: "Athletic midfield and aggressive ball recoveries.", weakness: "Creative output can dip against low blocks." },
  { name: "South Korea", group: "A", rank: 25, points: 1564.84, confed: "AFC", flagCode: "kr", fifaCode: "KOR", colors: ["#c9162d", "#ffffff"], kitHome: "Red with black detailing", kitAway: "White with red-black accents", history: "Semi-finalists in 2002 and frequent knockout candidates.", strength: "Relentless work rate and quick wide attacks.", weakness: "Central defense can be stretched by target forwards." },
  { name: "Australia", group: "D", rank: 26, points: 1560.62, confed: "AFC", flagCode: "au", fifaCode: "AUS", colors: ["#f1c60e", "#0f6f42"], kitHome: "Gold with green trim", kitAway: "Green with gold accents", history: "Regular qualifiers known for tournament resilience.", strength: "Physical duels and collective mentality.", weakness: "Breaking compact lines with sustained possession." },
  { name: "Sweden", group: "F", rank: 27, points: 1543.56, confed: "UEFA", flagCode: "se", fifaCode: "SWE", colors: ["#1150a7", "#f2ca0a"], kitHome: "Blue with yellow banding", kitAway: "Yellow with blue trim", history: "Historic semi-final pedigree and disciplined structure.", strength: "Defensive compactness and crossing quality.", weakness: "Can be outpaced by elite transition teams." },
  { name: "Turkiye", group: "D", rank: 28, points: 1539.64, confed: "UEFA", flagCode: "tr", fifaCode: "TUR", colors: ["#c50f2d", "#ffffff"], kitHome: "Red with white crescent-star themes", kitAway: "White with red trims", history: "Third-place finish in 2002 remains a landmark run.", strength: "Crowd-driven intensity and quick direct attacks.", weakness: "Rhythm can swing heavily with game state." },
  { name: "Egypt", group: "G", rank: 30, points: 1536.59, confed: "CAF", flagCode: "eg", fifaCode: "EGY", colors: ["#d11a2f", "#111111"], kitHome: "Red with black-white accents", kitAway: "White with red details", history: "Record African champions seeking a deep global run.", strength: "Counterattacking threat and set-piece delivery.", weakness: "Possession phases can become predictable." },
  { name: "Algeria", group: "J", rank: 31, points: 1535.27, confed: "CAF", flagCode: "dz", fifaCode: "ALG", colors: ["#0d7a3d", "#ffffff"], kitHome: "White with green side blocks", kitAway: "Green alternate with white accents", history: "Known for fearless displays against higher-ranked opposition.", strength: "Ball-carrying in midfield and direct wing play.", weakness: "Defensive spacing after turnovers." },
  { name: "Panama", group: "L", rank: 34, points: 1512.76, confed: "CONCACAF", flagCode: "pa", fifaCode: "PAN", colors: ["#ffffff", "#d2122f"], kitHome: "Red with blue accents", kitAway: "White with red-blue striping", history: "Steady regional riser with growing tournament exposure.", strength: "Collective shape and transition commitment.", weakness: "Chance creation against compact mid-blocks." },
  { name: "Cote d'Ivoire", group: "E", rank: 36, points: 1507.87, confed: "CAF", flagCode: "ci", fifaCode: "CIV", colors: ["#ef7b12", "#0e8a47"], kitHome: "Orange with green-white detailing", kitAway: "White with orange-green trim", history: "Recent continental champions with elite athletic profile.", strength: "Explosive pace and physicality in duels.", weakness: "Build-up patience under sustained pressure." },
  { name: "Norway", group: "I", rank: 38, points: 1496.31, confed: "UEFA", flagCode: "no", fifaCode: "NOR", colors: ["#b1152f", "#123b90"], kitHome: "Red with navy-white accents", kitAway: "White with red-navy details", history: "Back on the world stage after an extended absence.", strength: "Direct front-line play and crossing volume.", weakness: "Midfield control versus elite press-resistant teams." },
  { name: "Czech Republic", group: "A", rank: 40, points: 1494.16, confed: "UEFA", flagCode: "cz", fifaCode: "CZE", colors: ["#c5152d", "#103f9c"], kitHome: "Red with blue-white trims", kitAway: "White with red-blue accents", history: "Traditional European competitor returning to major contention.", strength: "Set-piece routines and compact mid-blocks.", weakness: "Limited pace in defensive recovery runs." },
  { name: "Scotland", group: "C", rank: 41, points: 1493.61, confed: "UEFA", flagCode: "gb-sct", fifaCode: "SCO", colors: ["#16479e", "#ffffff"], kitHome: "Navy with white trim", kitAway: "White with navy-blue accents", history: "Historic football nation aiming to convert momentum into results.", strength: "Collective spirit and wing-back delivery.", weakness: "Finishing efficiency in tight knockout matches." },
  { name: "Tunisia", group: "F", rank: 42, points: 1492.1, confed: "CAF", flagCode: "tn", fifaCode: "TUN", colors: ["#d5172f", "#ffffff"], kitHome: "White with red chest detailing", kitAway: "Red with white accents", history: "Consistent African qualifier with defensive organization.", strength: "Compact shape and disciplined defensive distances.", weakness: "Attacking depth when chasing games." },
  { name: "Paraguay", group: "D", rank: 46, points: 1481.36, confed: "CONMEBOL", flagCode: "py", fifaCode: "PAR", colors: ["#d11a2f", "#11439b"], kitHome: "Red-white stripes with blue trim", kitAway: "Blue alternate with white-red details", history: "Tough knockout-era side with strong defensive culture.", strength: "Defensive duels and second-ball work.", weakness: "Sustained chance creation against deep opponents." },
  { name: "Canada", group: "B", rank: 48, points: 1477.8, confed: "CONCACAF", flagCode: "ca", fifaCode: "CAN", colors: ["#d0192f", "#ffffff"], kitHome: "Red with white maple details", kitAway: "White with red accents", history: "Co-host nation continuing a strong growth trajectory.", strength: "Fast transitions and athletic front-line pressing.", weakness: "Game management in late knockout situations." },
  { name: "Qatar", group: "B", rank: 52, points: 1464.3, confed: "AFC", flagCode: "qa", fifaCode: "QAT", colors: ["#7a1038", "#ffffff"], kitHome: "Maroon with white trim", kitAway: "White with maroon accents", history: "Recent host nation with significant tournament experience.", strength: "Possession structure and short-passing combinations.", weakness: "Recovery speed against direct transition teams." },
  { name: "Saudi Arabia", group: "H", rank: 53, points: 1464.2, confed: "AFC", flagCode: "sa", fifaCode: "KSA", colors: ["#0f7c3f", "#ffffff"], kitHome: "Green with white details", kitAway: "White with green trim", history: "Known for upset potential on the global stage.", strength: "High-energy pressing and quick vertical entries.", weakness: "Defensive concentration over full 90 minutes." },
  { name: "Iraq", group: "I", rank: 54, points: 1462.35, confed: "AFC", flagCode: "iq", fifaCode: "IRQ", colors: ["#d11a2f", "#111111"], kitHome: "White with red-black accents", kitAway: "Green alternate strip", history: "Resilient side re-establishing itself among world qualifiers.", strength: "Commitment in duels and transition defense.", weakness: "Final-third efficiency under pressure." },
  { name: "Uzbekistan", group: "K", rank: 55, points: 1449.12, confed: "AFC", flagCode: "uz", fifaCode: "UZB", colors: ["#1f8cd0", "#ffffff"], kitHome: "Blue-white with green-red trim", kitAway: "White with blue detailing", history: "One of Asia's most improved sides in this cycle.", strength: "Organized defensive lanes and quick breaks.", weakness: "Can struggle to dictate tempo against elite midfields." },
  { name: "South Africa", group: "A", rank: 56, points: 1438.43, confed: "CAF", flagCode: "za", fifaCode: "RSA", colors: ["#f2c40f", "#0b7a45"], kitHome: "Gold with green details", kitAway: "Green with yellow trim", history: "Returning with a balanced, hard-working squad profile.", strength: "Physical intensity and direct wide play.", weakness: "Converting possession into high-value chances." },
  { name: "Jordan", group: "J", rank: 57, points: 1433.48, confed: "AFC", flagCode: "jo", fifaCode: "JOR", colors: ["#d11a2f", "#111111"], kitHome: "White with red-black-green accents", kitAway: "Red alternate set", history: "Regional breakthrough side carrying momentum into the finals.", strength: "Compact defending and opportunistic counters.", weakness: "Depth against prolonged knockout schedules." },
  { name: "Bosnia and Herzegovina", group: "B", rank: 58, points: 1385.84, confed: "UEFA", flagCode: "ba", fifaCode: "BIH", colors: ["#113f9f", "#f2c10f"], kitHome: "Blue with yellow trim", kitAway: "White with blue-yellow accents", history: "Back on the major stage with experienced leadership.", strength: "Direct attacking patterns and aerial threat.", weakness: "Defensive transitions after losing possession." },
  { name: "Ghana", group: "L", rank: 59, points: 1383.33, confed: "CAF", flagCode: "gh", fifaCode: "GHA", colors: ["#d11a2f", "#0f7a42"], kitHome: "White with red-yellow-green trim", kitAway: "Yellow/green inspired alternate", history: "Historic quarter-finalists aiming for another statement run.", strength: "Explosive athleticism and pressing intent.", weakness: "Consistency in structured buildup phases." },
  { name: "Haiti", group: "C", rank: 61, points: 1363.19, confed: "CONCACAF", flagCode: "ht", fifaCode: "HAI", colors: ["#113f9f", "#d3162e"], kitHome: "Blue-red split with white details", kitAway: "White with blue-red trim", history: "Regional dark horse reaching the world stage with confidence.", strength: "Transition speed and attacking bravery.", weakness: "Game control against possession-heavy sides." },
  { name: "New Zealand", group: "G", rank: 62, points: 1355.7, confed: "OFC", flagCode: "nz", fifaCode: "NZL", colors: ["#111111", "#ffffff"], kitHome: "All-black style with silver trim", kitAway: "White with black detailing", history: "Oceania representative with a strong defensive mentality.", strength: "Shape discipline and aerial competitiveness.", weakness: "Shot volume against physically dominant teams." },
  { name: "Cabo Verde", group: "H", rank: 63, points: 1354.69, confed: "CAF", flagCode: "cv", fifaCode: "CPV", colors: ["#1042a1", "#f2c10f"], kitHome: "Blue with yellow-red accents", kitAway: "White with blue trim", history: "Emerging African side building on consistent progress.", strength: "Technical midfield movement and work rate.", weakness: "Squad depth in demanding fixture sequences." },
  { name: "DR Congo", group: "K", rank: 64, points: 1354.4, confed: "CAF", flagCode: "cd", fifaCode: "COD", colors: ["#2e8be0", "#d61a2f"], kitHome: "Sky blue with red-yellow sash themes", kitAway: "White with blue-red accents", history: "Powerful returning side with physical upside.", strength: "Duel strength and direct ball-carrying.", weakness: "Spacing in defensive midfield zones." },
  { name: "Curacao", group: "E", rank: 65, points: 1348.46, confed: "CONCACAF", flagCode: "cw", fifaCode: "CUW", colors: ["#0f3f9f", "#f1c20f"], kitHome: "Blue with yellow highlights", kitAway: "White with blue-yellow details", history: "Debut-level underdog profile in a historic campaign.", strength: "Collective discipline and compact shape.", weakness: "Limited margin for error against top seeds." }
];

const GROUP_ORDER = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L"];

const TITLE_ODDS_BY_TEAM = {
  France: 18.2,
  Spain: 16.7,
  England: 11.0,
  Brazil: 9.7,
  Argentina: 9.4,
  Portugal: 8.2,
  Germany: 5.4,
  Netherlands: 3.8,
  Belgium: 2.3,
  Norway: 2.0,
  Colombia: 1.9,
  Japan: 1.9,
  Morocco: 1.5,
  "United States": 1.5,
  Mexico: 1.4,
  Croatia: 1.2,
  Uruguay: 1.1,
  Switzerland: 0.9,
  Senegal: 0.8,
  Turkiye: 0.8,
  Ecuador: 0.7,
  Austria: 0.5,
  Canada: 0.5,
  Sweden: 0.4,
  "Cote d'Ivoire": 0.3,
  Egypt: 0.3,
  "South Korea": 0.3,
  Paraguay: 0.3,
  Scotland: 0.3,
  Australia: 0.2,
  Algeria: 0.2,
  Ghana: 0.2,
  Iran: 0.2,
  "South Africa": 0.2,
  Tunisia: 0.2,
  "Bosnia and Herzegovina": 0.99,
  "DR Congo": 0.99,
  "Czech Republic": 0.99,
  Iraq: 0.99,
  "Cabo Verde": 0.99,
  Curacao: 0.99
};

const state = loadState();
let selectedTeamName = null;
let filteredTeams = [];

const els = {
  form: document.getElementById("participant-form"),
  nameInput: document.getElementById("participant-name"),
  register: document.getElementById("participant-register"),
  rowsIn: document.getElementById("participant-rows-in"),
  rowsPending: document.getElementById("participant-rows-pending"),
  participantStatusSummary: document.getElementById("participant-status-summary"),
  paidCount: document.getElementById("paid-count"),
  potTotal: document.getElementById("pot-total"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  countdownTarget: document.getElementById("countdown-target"),
  teamSearch: document.getElementById("team-search"),
  rankedTeamList: document.getElementById("ranked-team-list"),
  teamDetail: document.getElementById("team-detail")
};

init();

function init() {
  setupRankedExplorer();
  renderParticipants();
  updatePot();
  setupCountdown();

  els.form.addEventListener("submit", onAddParticipant);
  els.teamSearch.addEventListener("input", onSearchTeams);

  els.register.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) {
      return;
    }

    const { action, id } = button.dataset;
    if (!action || !id) {
      return;
    }

    if (action === "toggle-paid") {
      togglePaid(id);
      return;
    }

    if (action === "assign-manual") {
      assignTeamsToParticipant(id);
      return;
    }

    if (action === "remove") {
      removeParticipant(id);
    }
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { participants: [], assignmentsDone: false };
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed.participants)) {
      return { participants: [], assignmentsDone: false };
    }

    return {
      participants: parsed.participants.map((p) => ({
        id: String(p.id),
        name: String(p.name || ""),
        contact: String(p.contact || ""),
        paid: Boolean(p.paid),
        teams: Array.isArray(p.teams) ? p.teams.map(String) : []
      })),
      assignmentsDone: Boolean(parsed.assignmentsDone)
    };
  } catch {
    return { participants: [], assignmentsDone: false };
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function setupRankedExplorer() {
  filteredTeams = sortTeamsForExplorer(TEAM_POOL);
  selectedTeamName = filteredTeams[0]?.name || null;
  renderRankedList();
  renderTeamDetail();
}

function onSearchTeams() {
  const query = els.teamSearch.value.trim().toLowerCase();
  filteredTeams = TEAM_POOL
    .filter((team) => {
      if (!query) {
        return true;
      }
      return (
        team.name.toLowerCase().includes(query) ||
        team.group.toLowerCase().includes(query) ||
        team.confed.toLowerCase().includes(query) ||
        String(team.rank).includes(query) ||
        formatOdds(team).toLowerCase().includes(query)
      );
    })
    .sort(compareTeamsForExplorer);

  if (!filteredTeams.find((team) => team.name === selectedTeamName)) {
    selectedTeamName = filteredTeams[0]?.name || null;
  }

  renderRankedList();
  renderTeamDetail();
}

function renderRankedList() {
  if (!filteredTeams.length) {
    els.rankedTeamList.innerHTML = "<p class=\"hint\">No teams matched your search.</p>";
    return;
  }

  els.rankedTeamList.innerHTML = filteredTeams
    .map((team) => {
      const active = team.name === selectedTeamName ? "active" : "";
      return `
        <button class="rank-item ${active}" data-team-name="${escapeAttribute(team.name)}" type="button">
          <strong>${formatOdds(team)}</strong> ${team.name}
          <div class="mini">FIFA #${team.rank} | Group ${team.group} | ${team.confed}</div>
        </button>
      `;
    })
    .join("");

  els.rankedTeamList.querySelectorAll(".rank-item").forEach((button) => {
    button.addEventListener("click", () => {
      selectedTeamName = button.dataset.teamName;
      renderRankedList();
      renderTeamDetail();
    });
  });
}

function renderTeamDetail() {
  const team = TEAM_POOL.find((item) => item.name === selectedTeamName);
  if (!team) {
    els.teamDetail.innerHTML = "<p class=\"hint\">Pick a team from the ranking list to see full details.</p>";
    return;
  }
  const groupTeams = TEAM_POOL
    .filter((item) => item.group === team.group)
    .sort((a, b) => a.rank - b.rank)
    .map((item) => {
      const active = item.name === team.name ? "active" : "";
      return `<span class="group-team-chip ${active}">${item.name} <small>(#${item.rank})</small></span>`;
    })
    .join("");

  els.teamDetail.innerHTML = `
    <div class="team-head">
      <img class="team-flag" src="https://flagcdn.com/w160/${team.flagCode}.png" alt="Flag of ${team.name}" loading="lazy" />
      <div class="team-head-copy">
        <h4>${team.name}</h4>
        <p class="team-meta-line">Group ${team.group} | FIFA rank #${team.rank} (${team.points.toFixed(2)} pts) | ${team.confed}</p>
        <span class="odds-pill">Title odds: ${formatOdds(team)}</span>
      </div>
    </div>

    <div class="detail-grid">
      <div class="summary-panel">
        <h4>Team Snapshot</h4>
        <p><strong>Confederation:</strong> ${team.confed}</p>
        <p><strong>Group:</strong> ${team.group}</p>
        <p><strong>FIFA ranking:</strong> #${team.rank}</p>
        <p><strong>Betting market:</strong> ${formatOdds(team)}</p>
      </div>

      <div class="group-panel">
        <h4>Group ${team.group}</h4>
        <p>The other countries drawn with ${team.name} are shown below.</p>
        <div class="group-teams">${groupTeams}</div>
      </div>
    </div>
  `;
}

function getTeamOdds(team) {
  return TITLE_ODDS_BY_TEAM[team.name] ?? -1;
}

function formatOdds(team) {
  const odds = getTeamOdds(team);
  if (odds < 0) {
    return "No quote";
  }
  if (odds === 0.99) {
    return "<1%";
  }
  return `${odds.toFixed(1)}%`;
}

function compareTeamsForExplorer(left, right) {
  const oddsGap = getTeamOdds(right) - getTeamOdds(left);
  if (oddsGap !== 0) {
    return oddsGap;
  }
  return left.rank - right.rank;
}

function sortTeamsForExplorer(teams) {
  return [...teams].sort(compareTeamsForExplorer);
}

function onAddParticipant(event) {
  event.preventDefault();
  const name = els.nameInput.value.trim();

  if (!name) {
    return;
  }

  if (state.participants.length >= TEAM_POOL.length) {
    window.alert("Maximum reached: 48 participants (one per team).");
    return;
  }

  state.participants.push({
    id: crypto.randomUUID(),
    name,
    paid: false,
    teams: []
  });

  saveState();
  renderParticipants();
  updatePot();

  els.nameInput.value = "";
}

function togglePaid(id) {
  const participant = state.participants.find((p) => p.id === id);
  if (!participant) {
    return;
  }

  participant.paid = !participant.paid;
  saveState();
  renderParticipants();
  updatePot();
}

function removeParticipant(id) {
  state.participants = state.participants.filter((p) => p.id !== id);
  saveState();
  renderParticipants();
  updatePot();
}

function assignTeamsToParticipant(id) {
  const { confirmedParticipants } = getParticipantBuckets(state.participants);
  const isConfirmed = confirmedParticipants.some((participant) => participant.id === id);
  if (!isConfirmed) {
    window.alert("This participant is pending. Assign teams once the next threshold is reached.");
    return;
  }

  const participant = state.participants.find((p) => p.id === id);
  if (!participant) {
    return;
  }

  const otherParticipants = state.participants.filter((p) => p.id !== id);
  const takenByOthers = new Set(otherParticipants.flatMap((p) => p.teams));

  const input = window.prompt(
    "Assign teams to " + participant.name + " using comma-separated names. Leave blank to clear assignments.",
    participant.teams.join(", ")
  );

  if (input === null) {
    return;
  }

  const rawTeams = input
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  const normalizedToCanonical = new Map(TEAM_POOL.map((team) => [team.name.toLowerCase(), team.name]));
  const canonicalTeams = rawTeams.map((name) => normalizedToCanonical.get(name.toLowerCase()) || name);

  const duplicateTeams = canonicalTeams.filter((team, index) => canonicalTeams.indexOf(team) !== index);
  if (duplicateTeams.length) {
    window.alert("Duplicate teams found: " + [...new Set(duplicateTeams)].join(", "));
    return;
  }

  const unknownTeams = canonicalTeams.filter((team) => !TEAM_POOL.some((entry) => entry.name === team));
  if (unknownTeams.length) {
    window.alert("Unknown team names: " + unknownTeams.join(", "));
    return;
  }

  const conflicts = canonicalTeams.filter((team) => takenByOthers.has(team));
  if (conflicts.length) {
    window.alert("These teams are already assigned to other participants: " + conflicts.join(", "));
    return;
  }

  participant.teams = canonicalTeams.sort((a, b) => {
    const rankA = TEAM_POOL.find((team) => team.name === a)?.rank ?? 999;
    const rankB = TEAM_POOL.find((team) => team.name === b)?.rank ?? 999;
    return rankA - rankB;
  });

  saveState();
  renderParticipants();
}

function renderParticipants() {
  const { confirmedParticipants, pendingParticipants, teamsPerParticipant, nextTarget } = getParticipantBuckets(state.participants);

  if (!state.participants.length) {
    els.participantStatusSummary.textContent = "No participants yet. Add names to build toward the first threshold of 16.";
  } else if (nextTarget === null) {
    els.participantStatusSummary.textContent = `All ${state.participants.length} participants are in at 1 team each.`;
  } else if (!pendingParticipants.length) {
    els.participantStatusSummary.textContent = `${confirmedParticipants.length} confirmed. If more join, the next confirmation threshold is ${nextTarget}.`;
  } else {
    const needed = nextTarget - state.participants.length;
    els.participantStatusSummary.textContent = `${confirmedParticipants.length} confirmed (${teamsPerParticipant} teams each). ${pendingParticipants.length} pending. Need ${needed} more participant${needed === 1 ? "" : "s"} to reach ${nextTarget}.`;
  }

  els.rowsIn.innerHTML = renderParticipantRows(confirmedParticipants, true) || `
    <tr>
      <td colspan="4">No confirmed participants in this threshold yet.</td>
    </tr>
  `;

  els.rowsPending.innerHTML = renderParticipantRows(pendingParticipants, false) || `
    <tr>
      <td colspan="4">No pending participants.</td>
    </tr>
  `;
}

function renderParticipantRows(participants, canAssign) {
  return participants
    .map((participant) => {
      const teamsHtml = participant.teams.length
        ? participant.teams
          .map((teamName) => `<span class="team-chip">${teamName}</span>`)
          .join("")
        : '<span class="hint">Not assigned yet</span>';

      return `
        <tr>
          <td>${participant.name}</td>
          <td>
            <button class="ghost-btn" data-action="toggle-paid" data-id="${participant.id}" type="button">
              ${participant.paid ? "Paid" : "Unpaid"}
            </button>
          </td>
          <td>${teamsHtml}</td>
          <td>
            <button class="ghost-btn" data-action="remove" data-id="${participant.id}" type="button">Remove</button>
          </td>
        </tr>
      `;
    })
    .join("");
}

function getParticipantBuckets(participants) {
  const total = participants.length;

  if (total < 16) {
    return {
      confirmedParticipants: [],
      pendingParticipants: participants,
      teamsPerParticipant: 3,
      nextTarget: 16
    };
  }

  if (total === 16) {
    return {
      confirmedParticipants: participants,
      pendingParticipants: [],
      teamsPerParticipant: 3,
      nextTarget: 24
    };
  }

  if (total < 24) {
    return {
      confirmedParticipants: participants.slice(0, 16),
      pendingParticipants: participants.slice(16),
      teamsPerParticipant: 3,
      nextTarget: 24
    };
  }

  if (total === 24) {
    return {
      confirmedParticipants: participants,
      pendingParticipants: [],
      teamsPerParticipant: 2,
      nextTarget: 48
    };
  }

  if (total < 48) {
    return {
      confirmedParticipants: participants.slice(0, 24),
      pendingParticipants: participants.slice(24),
      teamsPerParticipant: 2,
      nextTarget: 48
    };
  }

  return {
    confirmedParticipants: participants.slice(0, 48),
    pendingParticipants: participants.slice(48),
    teamsPerParticipant: 1,
    nextTarget: null
  };
}

function updatePot() {
  const paidCount = state.participants.filter((p) => p.paid).length;
  const total = paidCount * 5;
  els.paidCount.textContent = String(paidCount);
  els.potTotal.textContent = `A$${total.toFixed(2)}`;
}

function setupCountdown() {
  function tick() {
    const target = getNextThursdayAt3pm();
    const now = new Date();
    const diffMs = target.getTime() - now.getTime();

    if (diffMs <= 0) {
      els.days.textContent = "0";
      els.hours.textContent = "0";
      els.minutes.textContent = "0";
      els.seconds.textContent = "0";
      els.countdownTarget.textContent = "It is meeting time. Run the random selector and record the assigned teams.";
      return;
    }

    const totalSeconds = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    els.days.textContent = String(days);
    els.hours.textContent = String(hours).padStart(2, "0");
    els.minutes.textContent = String(minutes).padStart(2, "0");
    els.seconds.textContent = String(seconds).padStart(2, "0");
    els.countdownTarget.textContent = `Target: ${target.toLocaleString()}`;
  }

  tick();
  setInterval(tick, 1000);
}

function getNextThursdayAt3pm() {
  const now = new Date();
  const currentDay = now.getDay();
  const thursday = 4;

  let daysUntil = (thursday - currentDay + 7) % 7;
  const candidate = new Date(now);
  candidate.setHours(15, 0, 0, 0);

  if (daysUntil === 0 && now >= candidate) {
    daysUntil = 7;
  } else if (daysUntil === 0) {
    daysUntil = 0;
  }

  const target = new Date(now);
  target.setDate(now.getDate() + daysUntil);
  target.setHours(15, 0, 0, 0);
  return target;
}

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
