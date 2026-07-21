// ==========================
// GAFF League Data
// ==========================

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
];

// ==========================
// Build League Table
// ==========================

const tableBody = document.querySelector("#leagueTable tbody");

function displayPlayers(playerList) {

    tableBody.innerHTML = "";

    playerList.forEach((player, index) => {

        tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${player.name}</td>
                <td>${player.played}</td>
                <td>${player.wins}</td>
                <td>${player.losses}</td>
                <td>${player.points}</td>
            </tr>
        `;

    });

}

displayPlayers(players);

// ==========================
// Search Players
// ==========================

const search = document.getElementById("search");

search.addEventListener("keyup", () => {

    const value = search.value.toLowerCase();

    const filtered = players.filter(player =>
        player.name.toLowerCase().includes(value)
    );

    displayPlayers(filtered);

});
