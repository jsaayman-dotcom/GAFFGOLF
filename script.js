// ======================================
// GAFF GOLFING SOCIETY
// script.js
// ======================================

// ---------- PLAYERS ----------

const players = [
    { name: "Anrich", played: 1, wins: 1, losses: 0, points: 50 },
    { name: "Chad", played: 3, wins: 2, losses: 1, points: 85 },
    { name: "Langes", played: 3, wins: 2, losses: 0, points: 55 },
    { name: "Gus", played: 2, wins: 2, losses: 0, points: 60 },
    { name: "Angelo", played: 3, wins: 1, losses: 1, points: 40 },
    { name: "Mick", played: 2, wins: 1, losses: 0, points: 35 },
    { name: "Imi", played: 3, wins: 1, losses: 1, points: 35 },
    { name: "Cole", played: 3, wins: 0, losses: 2, points: 50 },
    { name: "Jade", played: 3, wins: 1, losses: 1, points: 55 },
    { name: "Julian", played: 1, wins: 0, losses: 0, points: 25 },
    { name: "Liam", played: 3, wins: 1, losses: 1, points: 30 },
    { name: "Mark S", played: 3, wins: 1, losses: 1, points: 30 },
    { name: "Small", played: 3, wins: 1, losses: 1, points: 35 },
    { name: "Andy", played: 2, wins: 1, losses: 0, points: 15 },
    { name: "Bumrah", played: 3, wins: 2, losses: 0, points: 35 },
    { name: "Backpack", played: 2, wins: 1, losses: 1, points: 15 },
    { name: "Bruce", played: 2, wins: 1, losses: 1, points: 15 },
    { name: "Bryce", played: 3, wins: 1, losses: 1, points: 25 },
    { name: "Choppo", played: 3, wins: 1, losses: 1, points: 20 },
    { name: "Kareem", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Jayden", played: 3, wins: 1, losses: 1, points: 35 },
    { name: "M Roy", played: 1, wins: 1, losses: 0, points: 10 },
    { name: "Sanu", played: 3, wins: 1, losses: 1, points: 20 },
    { name: "Shaq", played: 3, wins: 2, losses: 1, points: 20 },
    { name: "Siraj", played: 1, wins: 1, losses: 0, points: 10 },
    { name: "Usaamah", played: 3, wins: 0, losses: 2, points: 15 },
    { name: "Yuven", played: 3, wins: 0, losses: 2, points: 15 },
    { name: "Zeke", played: 3, wins: 0, losses: 2, points: 15 },
    { name: "Bird", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Connor", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Dan", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Darren", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Lance", played: 2, wins: 1, losses: 0, points: 15 },
    { name: "Mark", played: 2, wins: 0, losses: 2, points: 10 },
    { name: "Martin", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Miyaaz", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Mo", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Ross", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Thaakira", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Wayne", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Ian", played: 1, wins: 1, losses: 0, points: 20 },
    { name: "Matt", played: 1, wins: 1, losses: 0, points: 20 }
];

// ---------- ELEMENTS ----------

const tableBody = document.querySelector("#leagueTable tbody");
const search = document.getElementById("search");

// ---------- DISPLAY TABLE ----------

function displayPlayers(playerList) {

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

        tableBody.innerHTML += `
            <tr>
                <td>${medal} ${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.played}</td>
                <td>${player.wins}</td>
                <td>${player.losses}</td>
                <td><strong>${player.points}</strong></td>
            </tr>
        `;

    });

}

// ---------- SEARCH ----------

search.addEventListener("keyup", () => {

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
        leader.textContent = sorted[0].name;
    }

    if (rounds) {
        rounds.textContent = Math.max(...players.map(player => player.played));
    }

}

// ---------- LOAD PAGE ----------

displayPlayers(players);
updateStatistics();
