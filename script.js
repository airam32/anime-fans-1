const animeList = [
    {
        title: "Naruto",
        video: "https://www.youtube.com/embed/2upuBiEiXDk", // Video de opening de Naruto
        description: "Naruto Uzumaki, un joven ninja con grandes sueños de convertirse en Hokage, el líder de su aldea.",
        lore: "Naruto es un anime que sigue las aventuras de Naruto Uzumaki, un joven ninja que busca cumplir su sueño de ser el Hokage de su aldea. Durante su viaje, enfrenta diversos enemigos y desafíos mientras busca aceptación y una familia.",
        category: "acción",
        comments: [],
        rating: 4.5
    },
    {
        title: "One Piece",
        video: "https://youtu.be/Oo52vQyAR6w?si=2cvjKknOzLDzgeSv", // Video de opening de One Piece
        description: "Monkey D. Luffy busca convertirse en el Rey de los Piratas y encontrar el legendario tesoro conocido como One Piece.",
        lore: "One Piece cuenta la historia de Monkey D. Luffy, un joven que decide convertirse en el Rey de los Piratas. Luffy recluta a una tripulación que lo acompaña en su búsqueda del tesoro más grande del mundo, conocido como One Piece.",
        category: "aventura",
        comments: [],
        rating: 4.8
    },
    {
        title: "Attack on Titan",
        video: "https://www.youtube.com/embed/MGRM4t-0f3s", // Video de opening de Attack on Titan
        description: "En un mundo donde la humanidad está al borde de la extinción, los humanos luchan contra gigantes devoradores de personas.",
        lore: "Attack on Titan sigue a Eren Yeager, quien busca venganza después de que su ciudad fuera destruida por los gigantes. A medida que avanza la historia, descubre los oscuros secretos detrás de los titanes y la humanidad.",
        category: "acción",
        comments: [],
        rating: 4.7
    },
    {
        title: "Dragon Ball Z",
        video: "https://www.youtube.com/embed/xyHf58Rsc9I", // Video de opening de Dragon Ball Z
        description: "Goku, un guerrero con poderes extraordinarios, defiende la Tierra de poderosos enemigos.",
        lore: "Dragon Ball Z sigue las aventuras de Goku y sus amigos mientras protegen la Tierra de villanos poderosos. Con cada batalla, Goku y sus amigos se enfrentan a amenazas cada vez más grandes, desde los androides hasta los dioses.",
        category: "acción",
        comments: [],
        rating: 5
    },
    {
        title: "My Hero Academia",
        video: "https://www.youtube.com/embed/CkX9Ak9l4Xo", // Video de opening de My Hero Academia
        description: "Izuku Midoriya vive en un mundo donde casi todos tienen superpoderes, pero él nació sin ellos. A pesar de eso, quiere convertirse en un héroe.",
        lore: "My Hero Academia sigue a Izuku Midoriya, un niño sin poderes que quiere ser un héroe. A pesar de la discriminación, encuentra la oportunidad de estudiar en una escuela para héroes, donde aprende lecciones de valentía, sacrificio y trabajo en equipo.",
        category: "acción",
        comments: [],
        rating: 4.6
    },
    {
        title: "Fullmetal Alchemist: Brotherhood",
        video: "https://www.youtube.com/embed/6gK6J6exH_w", // Video de opening de Fullmetal Alchemist: Brotherhood
        description: "Edward y Alphonse Elric buscan la piedra filosofal para recuperar lo que perdieron.",
        lore: "Fullmetal Alchemist: Brotherhood sigue la historia de dos hermanos, Edward y Alphonse, que usan alquimia en su búsqueda para recuperar sus cuerpos después de un fallido experimento. La serie trata sobre sacrificio, la naturaleza humana y la moralidad.",
        category: "aventura",
        comments: [],
        rating: 4.9
    },
    {
        title: "Death Note",
        video: "https://www.youtube.com/embed/yIghF1jbfK0", // Video de opening de Death Note
        description: "Un joven obtiene un cuaderno que le permite matar a cualquier persona cuyo nombre escriba en él.",
        lore: "Death Note sigue a Light Yagami, quien encuentra un cuaderno con el poder de matar a cualquier persona cuyo nombre sea escrito en él. A medida que Light usa el cuaderno para eliminar a criminales, se enfrenta a L, un detective que busca detenerlo.",
        category: "suspenso",
        comments: [],
        rating: 4.8
    },
    {
        title: "Tokyo Ghoul",
        video: "https://www.youtube.com/embed/9ipX4XzOgPQ", // Video de opening de Tokyo Ghoul
        description: "Un joven es atacado por un ghoul, y su vida cambia al convertirse en un híbrido entre humano y ghoul.",
        lore: "Tokyo Ghoul sigue la historia de Ken Kaneki, quien tras un ataque de un ghoul, se convierte en un híbrido entre humano y ghoul. A medida que lucha por sobrevivir, Ken debe enfrentarse a las luchas internas de su nueva identidad y los ghouls que lo rodean.",
        category: "acción",
        comments: [],
        rating: 4.7
    },
    {
        title: "Demon Slayer",
        video: "https://www.youtube.com/embed/fJ1cCGc1-xk", // Video de opening de Demon Slayer
        description: "Tanjiro Kamado lucha contra demonios después de que su familia sea asesinada por uno de ellos.",
        lore: "Demon Slayer sigue a Tanjiro Kamado, un joven que se convierte en un cazador de demonios después de que su familia fuera asesinada por uno de ellos. A lo largo de su viaje, Tanjiro busca venganza mientras protege a su hermana Nezuko, quien fue transformada en demonio.",
        category: "acción",
        comments: [],
        rating: 4.9
    },
    {
        title: "Neon Genesis Evangelion",
        video: "https://www.youtube.com/embed/7cHrw66uETw", // Video de opening de Neon Genesis Evangelion
        description: "Un grupo de jóvenes debe pilotar mechas gigantes para proteger la Tierra de criaturas misteriosas.",
        lore: "Neon Genesis Evangelion sigue a Shinji Ikari, quien es reclutado para pilotar un mecha gigante para luchar contra criaturas llamadas Ángeles. A medida que la serie avanza, Shinji y sus compañeros se enfrentan no solo a enemigos externos, sino también a sus propios demonios internos.",
        category: "suspenso",
        comments: [],
        rating: 4.7
    },
    {
        title: "Sword Art Online",
        video: "https://www.youtube.com/embed/7P2f2DPmWXM", // Video de opening de Sword Art Online
        description: "Jugadores quedan atrapados en un videojuego de realidad virtual, y su única forma de salir es derrotar el juego.",
        lore: "Sword Art Online sigue a Kirito, un jugador atrapado en un videojuego de realidad virtual donde los jugadores no pueden desconectarse. Si mueren en el juego, mueren en la vida real. Kirito debe enfrentarse a este peligro mientras forma lazos con otros jugadores.",
        category: "aventura",
        comments: [],
        rating: 4.6
    }
];

// Función para mostrar los animes
function displayAnimes() {
    const animeListElement = document.getElementById("animeList");
    const categoryFilter = document.getElementById("categoryFilter").value;

    const filteredAnimes = categoryFilter ? animeList.filter(anime => anime.category === categoryFilter) : animeList;

    animeListElement.innerHTML = "";
    filteredAnimes.forEach(anime => {
        const animeDiv = document.createElement("div");
        animeDiv.classList.add("anime");
        animeDiv.onclick = () => showDetails(anime);
        animeDiv.innerHTML = `
            <h2>${anime.title}</h2>
            <p>${anime.description.slice(0, 60)}...</p>
        `;
        animeListElement.appendChild(animeDiv);
    });
}

// Función para mostrar detalles del anime
function showDetails(anime) {
    document.getElementById("animeTitle").innerText = anime.title;
    document.getElementById("animeVideo").innerHTML = `<iframe width="560" height="315" src="${anime.video}" frameborder="0" allowfullscreen></iframe>`;
    document.getElementById("animeDescription").innerText = anime.description;
    document.getElementById("animeLore").innerText = anime.lore;
    document.getElementById("ratingDisplay").innerText = `Puntuación: ${anime.rating} / 5`;

    // Mostrar los comentarios
    const commentsSection = document.getElementById("commentsSection");
    commentsSection.innerHTML = "";
    anime.comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.innerText = comment;
        commentsSection.appendChild(commentDiv);
    });

    document.getElementById("animeDetails").style.display = "block";
}

// Función para cerrar los detalles
function closeDetails() {
    document.getElementById("animeDetails").style.display = "none";
}

// Función para enviar puntuación
function submitRating() {
    const rating = document.getElementById("ratingInput").value;
    if (rating >= 1 && rating <= 5) {
        const animeTitle = document.getElementById("animeTitle").innerText;
        const anime = animeList.find(anime => anime.title === animeTitle);
        anime.rating = rating;
        displayAnimes();
        alert("¡Gracias por tu puntuación!");
    } else {
        alert("Por favor, ingresa una puntuación entre 1 y 5.");
    }
}

// Función para enviar comentario
function submitComment() {
    const comment = document.getElementById("commentInput").value;
    if (comment) {
        const animeTitle = document.getElementById("animeTitle").innerText;
        const anime = animeList.find(anime => anime.title === animeTitle);
        anime.comments.push(comment);
        displayAnimes();
        alert("¡Comentario enviado!");
    } else {
        alert("Por favor, escribe un comentario.");
    }
}

// Función de búsqueda
document.getElementById("searchBar").addEventListener("input", function () {
    displayAnimes();
});

// Función de filtro por categoría
document.getElementById("categoryFilter").addEventListener("change", function () {
    displayAnimes();
});

// Mostrar los animes inicialmente
displayAnimes();