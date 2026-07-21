// ======================================
// GAFF GOLFING SOCIETY
// script.js
// ======================================

// ---------- PLAYERS ----------

const players = [
    {
        name: "Anrich",
        played: 1,
        wins: 1,
        losses: 0,
        points: 50
    },
    {
        name: "Chad",
        played: 2,
        wins: 1,
        losses: 1,
        points: 50
    },
    {
        name: "Langes",
        played: 2,
        wins: 1,
        losses: 1,
        points: 45
    }

    // Add the rest of your players here
];

// ---------- ELEMENTS ----------

const tableBody = document.querySelector("#leagueTable tbody");
const search = document.getElementById("search");

// ---------- DISPLAY TABLE ----------

function displayPlayers(playerList) {

    tableBody.innerHTML = "";

    const sortedPlayers = [...playerList].sort((a, b) => {

        if (b.points !== a.points) {
            return b.points - a.points;
        }

        return b.wins - a.wins;

    });

    sortedPlayers.forEach((player, index) => {

        let medal = "";

        if (index === 0) medal = "🥇";
        else if (index === 1) medal = "🥈";
        else if (index === 2) medal = "🥉";

        tableBody.innerHTML += `
            <tr>
                <td>${medal} ${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.played}</td>
                <td>${player.wins}</td>
                <td>${player.losses}</td>
                <td>${player.points}</td>
            </tr>
        `;

    });

}

// ---------- SEARCH ----------

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(value)
    );

    displayPlayers(filteredPlayers);

});

// ---------- STATISTICS ----------

function updateStatistics() {

    const sorted = [...players].sort((a, b) => b.points - a.points);

    const leader = document.getElementById("leader");
    const rounds = document.getElementById("roundsPlayed");

    if (leader) {
        leader.textContent = sorted[0]?.name || "-";
    }

    if (rounds) {

        const maxRounds = Math.max(...players.map(player => player.played));

        rounds.textContent = maxRounds;

    }

}

// ---------- LOAD PAGE ----------

displayPlayers(players);
updateStatistics();
