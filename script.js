
/* ======================================
   GAFF GOLFING SOCIETY
   Original league table + player profiles
   ====================================== */

// ---------- PLAYERS ----------
// Original league statistics are preserved.
// New profile statistics are separate placeholders.

const players = [
    { name: "Anrich", played: 1, wins: 1, losses: 0, points: 50 },
    { name: "Chad S", played: 6, wins: 2, losses: 4, points: 100 },
    { name: "Langes", played: 6, wins: 4, losses: 1, points: 175 },
    { name: "Gus", played: 3, wins: 3, losses: 0, points: 95 },
    { name: "Angelo", played: 4, wins: 1, losses: 3, points: 45 },
    { name: "Mick", played: 2, wins: 2, losses: 0, points: 40 },
    { name: "Imi", played: 6, wins: 1, losses: 5, points: 50 },
    { name: "Cole", played: 6, wins: 1, losses: 4, points: 120 },
    { name: "Jade", played: 6, wins: 3, losses: 3, points: 155 },
    { name: "Julian", played: 1, wins: 0, losses: 0, points: 25 },
    { name: "Liam", played: 6, wins: 2, losses: 4, points: 70 },
    { name: "Mark S", played: 6, wins: 3, losses: 3, points: 95 },
    { name: "Small", played: 5, wins: 1, losses: 4, points: 45 },
    { name: "Andy", played: 3, wins: 1, losses: 1, points: 20 },
    { name: "Bumrah", played: 6, wins: 3, losses: 3, points: 80 },
    { name: "Backpack", played: 5, wins: 2, losses: 3, points: 75 },
    { name: "Bruce", played: 4, wins: 2, losses: 2, points: 45 },
    { name: "Bryce", played: 6, wins: 4, losses: 2, points: 95 },
    { name: "Choppo", played: 6, wins: 1, losses: 5, points: 35 },
    { name: "Kareem", played: 4, wins: 0, losses: 4, points: 20 },
    { name: "Jayden", played: 6, wins: 3, losses: 3, points: 85 },
    { name: "M Roy", played: 1, wins: 1, losses: 0, points: 10 },
    { name: "Sanu", played: 6, wins: 1, losses: 5, points: 35 },
    { name: "Shaq", played: 5, wins: 2, losses: 3, points: 30 },
    { name: "Siraj", played: 6, wins: 2, losses: 4, points: 60 },
    { name: "Usaamah", played: 6, wins: 2, losses: 4, points: 95 },
    { name: "Yuven", played: 6, wins: 0, losses: 6, points: 30 },
    { name: "Zeke", played: 6, wins: 1, losses: 5, points: 60 },
    { name: "Bird", played: 3, wins: 2, losses: 1, points: 70 },
    { name: "Connor", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Dan", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Darren", played: 2, wins: 0, losses: 1, points: 35 },
    { name: "Lance", played: 4, wins: 2, losses: 2, points: 40 },
    { name: "Mark", played: 3, wins: 0, losses: 3, points: 15 },
    { name: "Martin", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Miyaaz", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Mo", played: 3, wins: 1, losses: 2, points: 45 },
    { name: "Ross", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Thaakira", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Wayne", played: 2, wins: 1, losses: 1, points: 30 },
    { name: "Ian", played: 1, wins: 1, losses: 0, points: 20 },
    { name: "Matt R", played: 2, wins: 1, losses: 1, points: 25 },
    { name: "Shark", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Marnu", played: 2, wins: 0, losses: 2, points: 10 },
    { name: "Matt S", played: 4, wins: 3, losses: 0, points: 75 },
    { name: "Hayden", played: 1, wins: 1, losses: 0, points: 30 },
    { name: "Bena B", played: 3, wins: 0, losses: 3, points: 15 },
    { name: "Ricky", played: 3, wins: 1, losses: 2, points: 45 },
    { name: "Bradley", played: 2, wins: 0, losses: 2, points: 25 },
    { name: "Gerrick", played: 1, wins: 1, losses: 0, points: 5 },
    { name: "Ejaaz", played: 1, wins: 1, losses: 0, points: 60 },
    { name: "Beninho", played: 1, wins: 1, losses: 0, points: 35 },
    { name: "Virgil", played: 2, wins: 0, losses: 2, points: 10 },
    { name: "Chad C", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Tyler", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Estaban", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Aaron", played: 1, wins: 1, losses: 0, points: 30 },
    { name: "Khalo", played: 1, wins: 1, losses: 0, points: 20 },
    { name: "Ryan", played: 1, wins: 1, losses: 0, points: 20 }
].map(player => ({
    ...player,
    nickname: "",
    dob: "",
    handicap: "",
    homeCourse: "",
    bio: "",
    photo: "",
    firstPlaceFinishes: 0,
    podiumFinishes: 0,
    longestDriveAwards: 0,
    closestToPinAwards: 0,
    personalBest: "",
    seasonNote: ""
}));

const playerProfileUpdates = {
    "Bird": { dob: "2001-08-28", handicap: "16", firstPlaceFinishes: 1, podiumFinishes: 1, longestDriveAwards: 0, closestToPinAwards: 0, personalBest: "89 - Humewood" },
    "Backpack": { dob: "2003-08-18", handicap: "22", firstPlaceFinishes: 1, podiumFinishes: 1, personalBest: "89 - Little Walmer" },
    "Ejaaz": { dob: "2000-06-14", handicap: "12", firstPlaceFinishes: 0, podiumFinishes: 1, closestToPinAwards: 1, personalBest: "Wedgewood" },
    "Gus": { dob: "1996-12-12", handicap: "7", firstPlaceFinishes: 1, podiumFinishes: 2, longestDriveAwards: 1, personalBest: "76 - Uitenhage" },
    "Matt S": { dob: "1999-03-19", handicap: "18", firstPlaceFinishes: 1, podiumFinishes: 1, longestDriveAwards: 1, personalBest: "85 - Hankey" },
    "Angelo": { dob: "1992-03-10", handicap: "24.3", firstPlaceFinishes: 1, podiumFinishes: 1, personalBest: "Wedgewood" },
    "Sanu": { dob: "1990-08-08", handicap: "21", personalBest: "Unsure" },
    "Lance": { handicap: "17", podiumFinishes: 1, personalBest: "83 - Sards" },
    "Zeke": { dob: "2005-08-04", handicap: "N/A", podiumFinishes: 1, closestToPinAwards: 1, personalBest: "95 - Humewood" },
    "Bumrah": { dob: "2003-12-05", handicap: "26", firstPlaceFinishes: 3, personalBest: "86 - Sards" },
    "Shaq": { dob: "2001-03-08", handicap: "18", firstPlaceFinishes: 2, personalBest: "98 - Humewood" },
    "Jayden": { dob: "2001-06-28", handicap: "21.3", firstPlaceFinishes: 3, podiumFinishes: 1, personalBest: "N/A" },
    "Virgil": { dob: "1989-05-09", handicap: "18", personalBest: "85 - PEGC" },
    "Miyaaz": { dob: "2008-08-19", handicap: "18.9", personalBest: "90 - Walmer" },
    "Imi": { dob: "2000-01-16", handicap: "18", firstPlaceFinishes: 1, podiumFinishes: 1, personalBest: "78 - Sards" },
    "Liam": { handicap: "17", firstPlaceFinishes: 1, podiumFinishes: 2, personalBest: "88 - Kragga Karma" },
    "Bryce": { dob: "2000-10-17", handicap: "N/A", podiumFinishes: 3, personalBest: "87" },
    "Siraj": { dob: "1963-09-04", handicap: "24.6", firstPlaceFinishes: 1, podiumFinishes: 2, personalBest: "85 - Royal Port Alfred" },
    "Choppo": { dob: "2001-04-22", handicap: "N/A", personalBest: "All of them" },
    "Kareem": { dob: "1995-11-24", handicap: "18", personalBest: "Humewood" },
    "Chad S": { dob: "1996-08-13", handicap: "16", firstPlaceFinishes: 2, podiumFinishes: 2, longestDriveAwards: 1, personalBest: "81" },
    "Ricky": { dob: "1999-11-07", handicap: "N/A", firstPlaceFinishes: 1, personalBest: "112 - Sards" },
    "Small": { dob: "1999-04-24", handicap: "19", podiumFinishes: 1, personalBest: "Humewood" },
    "Cole": { dob: "2000-06-28", handicap: "N/A", podiumFinishes: 1, closestToPinAwards: 2, personalBest: "92 - PEGC" },
    "Langes": { dob: "1997-01-30", handicap: "8.8 index", firstPlaceFinishes: 4, podiumFinishes: 3, longestDriveAwards: 1, closestToPinAwards: 2, personalBest: "80 - Humewood" },
    "Jade": { dob: "1996-04-08", handicap: "14", firstPlaceFinishes: 1, podiumFinishes: 3, longestDriveAwards: 2, closestToPinAwards: 1, personalBest: "85 - Humewood" },
    "Khalo": { dob: "2005-08-22", handicap: "N/A", podiumFinishes: 1, personalBest: "Wedgewood" },
    "Ryan": { dob: "2001-06-04", handicap: "9", podiumFinishes: 1, personalBest: "72 - Royal Port Alfred" },
    "Gerrick": { dob: "2003-10-03", handicap: "N/A", firstPlaceFinishes: 1, personalBest: "N/A" }
};

players.forEach(player => {
    const details = playerProfileUpdates[player.name];
    if (details) Object.assign(player, details);
});

// ---------- ELEMENTS ----------

const tableBody = document.querySelector("#leagueTable tbody");
const search = document.getElementById("search");

// ---------- HELPERS ----------

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
    })[char]);
}

function calculateAge(dob) {
    if (!dob) return "Not added yet";

    const birthDate = new Date(`${dob}T00:00:00`);
    if (Number.isNaN(birthDate.getTime())) return "Not added yet";

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (
        today.getMonth() < birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() &&
         today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    return age >= 0 ? age : "Not added yet";
}

function profileValue(value) {
    return value !== undefined && value !== null &&
        String(value).trim() !== ""
        ? escapeHTML(value)
        : "Not added yet";
}

// ---------- ORIGINAL LEAGUE TABLE ----------
// Same columns, same medals, same ranking logic.
// Player names are now clickable.

function displayPlayers(playerList) {
    if (!tableBody) return;

    tableBody.innerHTML = "";

    const sortedPlayers = [...playerList].sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        if (b.wins !== a.wins) return b.wins - a.wins;
        return a.name.localeCompare(b.name);
    });

    sortedPlayers.forEach((player, index) => {
        let medal = "";

        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${medal} ${index + 1}</td>
            <td>
                <button
                    type="button"
                    class="gaff-player-link"
                    data-player-name="${escapeHTML(player.name)}"
                    aria-label="View ${escapeHTML(player.name)}'s profile">
                    ${escapeHTML(player.name)}
                </button>
            </td>
            <td>${player.played}</td>
            <td>${player.wins}</td>
            <td>${player.losses}</td>
            <td><strong>${player.points}</strong></td>
        `;

        tableBody.appendChild(row);
    });
}

// ---------- ORIGINAL SEARCH ----------

if (search) {
    search.addEventListener("keyup", () => {
        const value = search.value.toLowerCase();

        const filteredPlayers = players.filter(player =>
            player.name.toLowerCase().includes(value)
        );

        displayPlayers(filteredPlayers);
    });
}

// ---------- ORIGINAL STATISTICS ----------

function updateStatistics() {
    const sorted = [...players].sort((a, b) => b.points - a.points);

    const leader = document.getElementById("leader");
    const rounds = document.getElementById("roundsPlayed");

    if (leader && sorted.length) {
        leader.textContent = sorted[0].name;
    }

    if (rounds) {
        rounds.textContent = Math.max(...players.map(player => player.played));
    }
}

// ---------- ACHIEVEMENT BADGES ----------

const achievementBadges = [
    {
        name: "First Place Finisher",
        icon: "🏆",
        description: "Record a verified first-place finish.",
        earned: player => player.firstPlaceFinishes >= 1
    },
    {
        name: "Podium Finisher",
        icon: "🥇",
        description: "Record a verified podium finish.",
        earned: player => player.podiumFinishes >= 1
    },
    {
        name: "Society Regular",
        icon: "⛳",
        description: "Play at least five recorded games.",
        earned: player => player.played >= 5
    },
    {
        name: "Points Collector",
        icon: "💎",
        description: "Reach 100 or more verified points.",
        earned: player => player.points >= 100
    },
    {
        name: "Longest Drive",
        icon: "🚀",
        description: "Win a verified Longest Drive award.",
        earned: player => player.longestDriveAwards >= 1
    },
    {
        name: "Closest to Pin",
        icon: "🎯",
        description: "Win a verified Closest to Pin award.",
        earned: player => player.closestToPinAwards >= 1
    }
];

// ---------- PROFILE POP-UP ----------

function addProfileStyles() {
    if (document.getElementById("gaff-profile-styles")) return;

    const style = document.createElement("style");
    style.id = "gaff-profile-styles";

    style.textContent = `
        .gaff-player-link {
            appearance: none;
            border: 0;
            padding: 0;
            background: transparent;
            color: inherit;
            font: inherit;
            text-align: left;
            cursor: pointer;
            text-decoration: underline;
            text-decoration-color: transparent;
            text-underline-offset: 4px;
            transition: color .2s, text-decoration-color .2s;
        }

        .gaff-player-link:hover,
        .gaff-player-link:focus-visible {
            color: #C5A45D;
            text-decoration-color: currentColor;
            outline-offset: 3px;
        }

        .gaff-profile-modal {
            display: none;
            position: fixed;
            inset: 0;
            z-index: 99999;
            padding: 20px;
            align-items: center;
            justify-content: center;
            font-family: Arial, sans-serif;
        }

        .gaff-profile-modal.is-open {
            display: flex;
        }

        .gaff-profile-backdrop {
            position: absolute;
            inset: 0;
            background: rgba(4, 20, 14, .78);
            backdrop-filter: blur(5px);
        }

        .gaff-profile-dialog {
            position: relative;
            z-index: 1;
            width: min(760px, 100%);
            max-height: 90vh;
            overflow-y: auto;
            background: #F5F2E8;
            color: #18392B;
            border: 1px solid #C5A45D;
            border-radius: 18px;
            padding: clamp(20px, 4vw, 36px);
            box-shadow: 0 24px 80px rgba(0, 0, 0, .3);
        }

        .gaff-profile-close {
            position: absolute;
            top: 12px;
            right: 16px;
            width: 40px;
            height: 40px;
            border: 0;
            border-radius: 50%;
            background: #E8E2D2;
            color: #18392B;
            font-size: 28px;
            cursor: pointer;
        }

        .gaff-profile-head {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 8px 42px 24px 0;
            border-bottom: 1px solid #D8D0BB;
        }

        .gaff-profile-avatar {
            flex: 0 0 94px;
            width: 94px;
            height: 94px;
            border-radius: 50%;
            object-fit: cover;
            display: grid;
            place-items: center;
            background: #0B3D2E;
            color: #E1CC91;
            border: 3px solid #C5A45D;
            font-size: 28px;
            font-weight: bold;
        }

        .gaff-profile-eyebrow {
            margin: 0 0 5px;
            color: #8A7136;
            font-size: 11px;
            font-weight: bold;
            letter-spacing: 2px;
        }

        .gaff-profile-heading h2 {
            margin: 0;
            color: #0B3D2E;
            font-size: clamp(25px, 5vw, 36px);
        }

        .gaff-profile-subtitle {
            margin: 5px 0 0;
            color: #657268;
            font-size: 14px;
        }

        .gaff-profile-bio {
            margin: 20px 0 0;
            line-height: 1.7;
        }

        .gaff-profile-section {
            margin-top: 26px;
        }

        .gaff-profile-section h3 {
            margin: 0 0 14px;
            color: #0B3D2E;
            font-size: 18px;
        }

        .gaff-profile-detail-grid,
        .gaff-profile-stat-grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .gaff-profile-detail,
        .gaff-profile-stat {
            min-width: 0;
            padding: 14px;
            border: 1px solid #DED7C6;
            border-radius: 10px;
            background: #FBFAF5;
        }

        .gaff-profile-detail span,
        .gaff-profile-stat span {
            display: block;
            margin-bottom: 5px;
            color: #68756B;
            font-size: 12px;
        }

        .gaff-profile-detail strong,
        .gaff-profile-stat strong {
            display: block;
            overflow-wrap: anywhere;
            color: #18392B;
            font-size: 16px;
        }

        .gaff-profile-stat strong {
            font-size: 23px;
        }

        .gaff-profile-note {
            margin-top: 12px;
            color: #68756B;
            font-size: 12px;
            line-height: 1.6;
        }

        .gaff-profile-badges {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
        }

        .gaff-profile-badge {
            padding: 14px;
            border: 1px solid #DED7C6;
            border-radius: 10px;
            background: #FBFAF5;
        }

        .gaff-profile-badge.is-earned {
            border-color: #C5A45D;
            background: #F0E8D1;
        }

        .gaff-profile-badge-icon {
            display: block;
            margin-bottom: 7px;
            font-size: 25px;
        }

        .gaff-profile-badge strong {
            display: block;
            margin-bottom: 5px;
            font-size: 14px;
        }

        .gaff-profile-badge p {
            margin: 0;
            color: #68756B;
            font-size: 12px;
            line-height: 1.5;
        }

        .gaff-profile-badge small {
            display: inline-block;
            margin-top: 8px;
            color: #68756B;
            font-weight: bold;
        }

        .gaff-profile-badge.is-earned small {
            color: #276044;
        }

        body.gaff-profile-open {
            overflow: hidden;
        }

        @media (max-width: 480px) {
            .gaff-profile-modal {
                padding: 10px;
            }

            .gaff-profile-dialog {
                max-height: 94vh;
                padding: 20px 16px;
            }

            .gaff-profile-head {
                gap: 13px;
            }

            .gaff-profile-avatar {
                flex-basis: 68px;
                width: 68px;
                height: 68px;
                font-size: 22px;
            }

            .gaff-profile-detail-grid,
            .gaff-profile-stat-grid,
            .gaff-profile-badges {
                grid-template-columns: 1fr 1fr;
            }
        }
    `;

    document.head.appendChild(style);
}

function createProfileModal() {
    const modal = document.createElement("div");

    modal.className = "gaff-profile-modal";
    modal.id = "gaffPlayerProfile";
    modal.setAttribute("aria-hidden", "true");

    modal.innerHTML = `
        <div class="gaff-profile-backdrop" data-profile-close></div>

        <section
            class="gaff-profile-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="gaffProfileTitle"
            tabindex="-1">

            <button
                type="button"
                class="gaff-profile-close"
                aria-label="Close profile"
                data-profile-close>&times;</button>

            <div class="gaff-profile-content"></div>
        </section>
    `;

    document.body.appendChild(modal);
    return modal;
}

addProfileStyles();

const profileModal = createProfileModal();
const profileContent = profileModal.querySelector(".gaff-profile-content");
const profileDialog = profileModal.querySelector(".gaff-profile-dialog");

let lastProfileTrigger = null;

function getInitials(name) {
    return name.trim()
        .split(/\s+/)
        .slice(0, 2)
        .map(part => part[0])
        .join("")
        .toUpperCase();
}


function buildPlayerProfile(player) {
    const showValue = value =>
        value !== undefined && value !== null && String(value).trim() !== ""
            ? escapeHTML(String(value))
            : "Not added yet";

    const badgesHTML = achievementBadges.map(badge => {
        const earned = badge.earned(player);

        return `
            <article class="gaff-profile-badge ${earned ? "is-earned" : ""}">
                <span class="gaff-profile-badge-icon">${badge.icon}</span>
                <strong>${escapeHTML(badge.name)}</strong>
                <p>${escapeHTML(badge.description)}</p>
                <small>${earned ? "✓ Earned" : "Not yet earned"}</small>
            </article>
        `;
    }).join("");

    const avatarHTML = player.photo
        ? `<img class="gaff-profile-avatar"
                src="${escapeHTML(player.photo)}"
                alt="Photo of ${escapeHTML(player.name)}">`
        : `<div class="gaff-profile-avatar" aria-hidden="true">
                ${escapeHTML(getInitials(player.name))}
           </div>`;

    profileContent.innerHTML = `
        <header class="gaff-profile-head">
            ${avatarHTML}
            <div class="gaff-profile-heading">
                <p class="gaff-profile-eyebrow">GAFF GOLFING SOCIETY</p>
                <h2 id="gaffProfileTitle">${escapeHTML(player.name)}</h2>
                <p class="gaff-profile-subtitle">
                    ${player.nickname
                        ? `“${escapeHTML(player.nickname)}” · `
                        : ""}
                    Player Profile
                </p>
            </div>
        </header>

        ${player.bio
            ? `<p class="gaff-profile-bio">${escapeHTML(player.bio)}</p>`
            : ""}

        <section class="gaff-profile-section">
            <h3>Player Information</h3>
            <div class="gaff-profile-detail-grid">
                <div class="gaff-profile-detail">
                    <span>Date of birth</span>
                    <strong>${showValue(player.dob)}</strong>
                </div>
                <div class="gaff-profile-detail">
                    <span>Age</span>
                    <strong>${calculateAge(player.dob)}</strong>
                </div>
                <div class="gaff-profile-detail">
                    <span>Handicap</span>
                    <strong>${showValue(player.handicap)}</strong>
                </div>
                <div class="gaff-profile-detail">
                    <span>Games played</span>
                    <strong>${showValue(player.played)}</strong>
                </div>
                <div class="gaff-profile-detail">
                    <span>Personal best</span>
                    <strong>${showValue(player.personalBest)}</strong>
                </div>
            </div>
        </section>

        <section class="gaff-profile-section">
            <h3>Performance & Achievements</h3>
            <div class="gaff-profile-stat-grid">
                <div class="gaff-profile-stat">
                    <span>League wins</span>
                    <strong>${showValue(player.wins)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>1st Place Finishes</span>
                    <strong>${showValue(player.firstPlaceFinishes)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>Podium Finishes</span>
                    <strong>${showValue(player.podiumFinishes)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>Losses</span>
                    <strong>${showValue(player.losses)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>League points</span>
                    <strong>${showValue(player.points)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>Longest Drive Awards</span>
                    <strong>${showValue(player.longestDriveAwards)}</strong>
                </div>
                <div class="gaff-profile-stat">
                    <span>Closest to Pin Awards</span>
                    <strong>${showValue(player.closestToPinAwards)}</strong>
                </div>
            </div>

            <p class="gaff-profile-note">
                League statistics are kept separate from achievement
                records. Missing information is shown as not added yet.
            </p>
        </section>

        <section class="gaff-profile-section">
            <h3>Achievement Badges</h3>
            <div class="gaff-profile-badges">${badgesHTML}</div>
        </section>

        ${player.seasonNote
            ? `<section class="gaff-profile-section">
                   <h3>Season Notes</h3>
                   <p>${escapeHTML(player.seasonNote)}</p>
               </section>`
            : ""}
    `;
}


function openPlayerProfile(player, trigger) {
    lastProfileTrigger = trigger;
    buildPlayerProfile(player);

    profileModal.classList.add("is-open");
    profileModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gaff-profile-open");

    profileModal.querySelector(".gaff-profile-close").focus();
}

function closePlayerProfile() {
    profileModal.classList.remove("is-open");
    profileModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gaff-profile-open");

    if (lastProfileTrigger) {
        lastProfileTrigger.focus();
    }
}

// Click a player name to open their profile.
if (tableBody) {
    tableBody.addEventListener("click", event => {
        const button = event.target.closest(".gaff-player-link");
        if (!button) return;

        const player = players.find(
            entry => entry.name === button.dataset.playerName
        );

        if (player) openPlayerProfile(player, button);
    });
}

// Close using the X or by clicking the dark background.
profileModal.addEventListener("click", event => {
    if (event.target.closest("[data-profile-close]")) {
        closePlayerProfile();
    }
});

// Close using Escape.
document.addEventListener("keydown", event => {
    if (
        event.key === "Escape" &&
        profileModal.classList.contains("is-open")
    ) {
        closePlayerProfile();
    }
});

// ---------- LOAD PAGE ----------

displayPlayers(players);
updateStatistics();
