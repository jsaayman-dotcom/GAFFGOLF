// ======================================
// GAFF GOLFING SOCIETY
// script.js
// ======================================

// ---------- PLAYERS ----------

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
    { name: "Ryan", played: 1, wins: 1, losses: 0, points: 20 },
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
