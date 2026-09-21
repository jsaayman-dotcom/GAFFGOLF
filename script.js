// ======================================
// GAFF GOLFING SOCIETY
// script.js
// ======================================

// ---------- PLAYERS ----------

const players = [
    { name: "Anrich", played: 1, wins: 1, losses: 0, points: 50 },
    { name: "Chad", played: 5, wins: 2, losses: 3, points: 95 },
    { name: "Langes", played: 5, wins: 4, losses: 0, points: 170 },
    { name: "Gus", played: 3, wins: 3, losses: 0, points: 95 },
    { name: "Angelo", played: 3, wins: 1, losses: 1, points: 40 },
    { name: "Mick", played: 2, wins: 2, losses: 0, points: 40 },
    { name: "Imi", played: 5, wins: 1, losses: 4, points: 45 },
    { name: "Cole", played: 5, wins: 1, losses: 3, points: 90 },
    { name: "Jade", played: 4, wins: 2, losses: 1, points: 95 },
    { name: "Julian", played: 1, wins: 0, losses: 0, points: 25 },
    { name: "Liam", played: 5, wins: 1, losses: 3, points: 40 },
    { name: "Mark S", played: 5, wins: 2, losses: 2, points: 70 },
    { name: "Small", played: 4, wins: 1, losses: 2, points: 40 },
    { name: "Andy", played: 3, wins: 1, losses: 1, points: 20 },
    { name: "Bumrah", played: 5, wins: 3, losses: 2, points: 75 },
    { name: "Backpack", played: 4, wins: 2, losses: 2, points: 100 },
    { name: "Bruce", played: 3, wins: 1, losses: 2, points: 20 },
    { name: "Bryce", played: 5, wins: 3, losses: 1, points: 70 },
    { name: "Choppo", played: 5, wins: 1, losses: 4, points: 30 },
    { name: "Kareem", played: 3, wins: 0, losses: 3, points: 15 },
    { name: "Jayden", played: 5, wins: 3, losses: 1, points: 80 },
    { name: "M Roy", played: 1, wins: 1, losses: 0, points: 10 },
    { name: "Sanu", played: 5, wins: 1, losses: 4, points: 30 },
    { name: "Shaq", played: 4, wins: 2, losses: 2, points: 25 },
    { name: "Siraj", played: 5, wins: 2, losses: 2, points: 55 },
    { name: "Usaamah", played: 4, wins: 1, losses: 2, points: 55 },
    { name: "Yuven", played: 5, wins: 0, losses: 5, points: 25 },
    { name: "Zeke", played: 4, wins: 0, losses: 4, points: 40 },
    { name: "Bird", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Connor", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Dan", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Darren", played: 2, wins: 0, losses: 1, points: 35 },
    { name: "Lance", played: 3, wins: 1, losses: 2, points: 20 },
    { name: "Mark", played: 3, wins: 0, losses: 3, points: 15 },
    { name: "Martin", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Miyaaz", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Mo", played: 3, wins: 1, losses: 2, points: 45 },
    { name: "Ross", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Thaakira", played: 1, wins: 0, losses: 0, points: 5 },
    { name: "Wayne", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Ian", played: 1, wins: 1, losses: 0, points: 20 },
    { name: "Matt R", played: 2, wins: 1, losses: 1, points: 25 },
    { name: "Shark", played: 1, wins: 0, losses: 1, points: 5 },
    { name: "Marnu", played: 2, wins: 0, losses: 2, points: 10 },
    { name: "Matt S", played: 3, wins: 2, losses: 0, points: 100 },
    { name: "Hayden", played: 1, wins: 1, losses: 0, points: 30 },
    { name: "Bena B", played: 2, wins: 0, losses: 2, points: 10 },
    { name: "Ricky", played: 2, wins: 1, losses: 1, points: 40 },
    { name: "Bradley", played: 2, wins: 0, losses: 2, points: 25 },
    { name: "Gerrick", played: 1, wins: 1, losses: 0, points: 5 },
    { name: "Ejaaz", played: 1, wins: 1, losses: 0, points: 60 },
    { name: "Beninho", played: 1, wins: 1, losses: 0, points: 35 },
    { name: "Virgil", played: 1, wins: 0, losses: 1, points: 5 },
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
