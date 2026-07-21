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
/* ===================================
   RESULTS
=================================== */

.results-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.result-card{
    background:white;
    padding:35px;
    border-radius:15px;
    text-align:center;
    box-shadow:0 10px 25px rgba(0,0,0,.08);
    transition:.3s;
}

.result-card:hover{
    transform:translateY(-8px);
}

.result-card h3{
    color:#0B3D2E;
    margin-bottom:20px;
}

.result-card p{
    color:#666;
    font-size:17px;
}
