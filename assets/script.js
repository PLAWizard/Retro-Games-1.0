// Games List with Categories
const games = [
    { name: "Twitch", url: "https://dexter.is.sigma.df.webconstructions.co.uk/uv/service/hvtrs8%2F-wuw%2Ctuivcj.vv-", category: "apps" },
    { name: "Fortnite", url: "https://dexter.is.sigma.df.webconstructions.co.uk/uv/service/hvtrs8%2F-pna%7B.eedopcgnmw%2Ccmm-mcln%2F!%2Ffegpnilk%3Dgcmg-kd%3F44bda%6004-f844%2F445f-%3Be76%2F2f9g47cfeg0c", category: "action" },
    { name: "Pokemon", url: "https://skys.follobusiness.com/semag/pokemon/index.html", category: "apps" },
    { name: "YouTube", url: "https://dexter.is.sigma.df.webconstructions.co.uk/uv/service/hvtrs8%2F-wuw%2Cymuvu%60e%2Ccmm-", category: "apps" },
    { name: "ROBLOX", url: "https://dexter.is.sigma.df.webconstructions.co.uk/uv/service/hvtrs8%2F-rgnfepiqgcy%2Colrgnfep.aoo%2F", category: "apps" },
    { name: "1v1.lol", url: "https://skys.follobusiness.com/semag/1v1lol/index.html", category: "action" },
    { name: "Amazing Rope Police", url: "https://skys.follobusiness.com/semag/amazing-rope-police/index.html", category: "puzzle" },
    { name: "Basketball Stars", url: "https://skys.follobusiness.com/semag/basketball-stars/index.html", category: "sports" },
    { name: "Bitlife", url: "https://skys.follobusiness.com/semag/bitlife/index.html", category: "puzzle" },
    { name: "Cookie Clicker", url: "https://skys.follobusiness.com/semag/cookieclicker/index.html", category: "puzzle" },
    { name: "Drift Hunters", url: "https://skys.follobusiness.com/semag/drifthunters/index.html", category: "sports" },
    { name: "Drive Mad", url: "https://skys.follobusiness.com/semag/drivemad/index.html", category: "action" },
    { name: "StackTris", url: "https://dexter.is.sigma.df.webconstructions.co.uk/data/g/stacktris/", category: "puzzle" },
    { name: "TABS", url: "https://skys.follobusiness.com/semag/tabs/index.html", category: "action" },
    { name: "Gladihoppers", url: "https://skys.follobusiness.com/semag/gladihoppers/index.html", category: "action" },
    { name: "Ocarina of Time", url: "https://skys.follobusiness.com/semag/ocarinaoftime/index.html", category: "action" },
    { name: "Eaglercraft", url: "https://skys.follobusiness.com/semag/eaglercraft/index.html", category: "action" },
    { name: "OVO", url: "https://skys.follobusiness.com/semag/ovo/index.html", category: "puzzle" },
    { name: "Poly Track", url: "https://skys.follobusiness.com/semag/polytrack/index.html", category: "sports" },
    { name: "Monkey Mart", url: "https://skys.follobusiness.com/semag/monkeymart/index.html", category: "puzzle" },
    { name: "Paper.io", url: "https://skys.follobusiness.com/semag/paperio/index.html", category: "action" },
    { name: "Snow Rider 3D", url: "https://skys.follobusiness.com/semag/snowrider3d/index.html", category: "sports" },
    { name: "Windows 11", url: "https://skys.follobusiness.com/sppa/11/index.html", category: "puzzle" },
    { name: "Stickman Climb", url: "https://skys.follobusiness.com/semag/stickmanclimb/index.html", category: "action" },
    { name: "Madalin Cars", url: "https://skys.follobusiness.com/semag/madalincars/index.html", category: "sports" },
    { name: "Drift Boss", url: "https://skys.follobusiness.com/semag/drift-boss/index.html", category: "sports" },
    { name: "Age Of War", url: "https://skys.follobusiness.com/semag/ageofwar/index.html", category: "action" },
    { name: "Kick That Buddy", url: "https://skys.follobusiness.com/semag/kickthatbuddy/index.html", category: "action" },
    { name: "MajorasMask", url: "https://skys.follobusiness.com/semag/majorasmask/index.html", category: "action" },
    { name: "Rooftop Snipers 2", url: "https://skys.follobusiness.com/semag/rooftopsnipers2/index.html", category: "sports" },
    { name: "RandomFacts", url: "https://plawizard.github.io/RandomFactsGenerator/", category: "puzzle" },
    { name: "Jetpack Joyride", url: "https://skys.follobusiness.com/semag/jetpackjoyride/index.html", category: "puzzle" },
    { name: "Rocket League", url: "https://skys.follobusiness.com/semag/2drocketleague/index.html", category: "sports" },
    { name: "Retro Bowl", url: "https://skys.follobusiness.com/semag/retrobowl/index.html", category: "sports" },
    { name: "Retro Bowl College", url: "https://skys.follobusiness.com/semag/retrobowlcollege/index.html", category: "sports" },
    { name: "Fancy Pants 2", url: "https://skys.follobusiness.com/semag/fancypantsadventures2/index.html", category: "sports" },
    { name: "Just Fall.lol", url: "https://skys.follobusiness.com/semag/justfalllol/index.html", category: "sports" },
    { name: "fnaf", url: "https://skys.follobusiness.com/semag/fnaf/index.html", category: "horror" },
    { name: "fnaf 2", url: "https://skys.follobusiness.com/semag/fnaf2/index.html", category: "horror" },
    { name: "fnaf 3", url: "https://skys.follobusiness.com/semag/fnaf3/index.html", category: "horror" },
    { name: "fnaf 4", url: "https://skys.follobusiness.com/semag/fnaf4/index.html", category: "horror" },
    { name: "FunnyShooter1", url: "https://skys.follobusiness.com/semag/funnyshooter/index.html", category: "shooting" },
    { name: "FunnyShooter2", url: "https://skys.follobusiness.com/semag/funnyshooter2/index.html", category: "shooting" },
    { name: "StackTris", url: "https://artedu1808.github.io/g6/stacktris/", category: "puzzle" },
    { name: "8-Ball-Pool", url: "https://artedu1808.github.io/g8/8-ball-pool/", category: "sports" },
    { name: "Bullet Force", url: "https://artedu1808.github.io/g7/bullet-force/", category: "shooting" },
    { name: "Offroader-V5", url: "https://artedu1808.github.io/g5/offroader-v5/", category: "cars" },
];

// Changelog Data
const changelog = [
    "2024-12-14: Initial release of Retro Unblocked.",
    "2025-1-02: Added Dark Mode / Light Mode Toggle.",
    "2025-1-03: Added Random Game Button.",
    "2025-2-04: Organized games into categories (Action, Puzzle, Sports).",
    "2025-2-04: Improved animations and transitions.",
    "2025-2-11: Added more color options to Settings.",
    "2025-2-13: Fixed Random Game Button functionality.",
    "2025-2-14: Updated changelog to include all changes and additions.",
    "2025-2-16: Started work on the 1.1 upcoming update.",
    "2025-2-19: Added a new category *Horror* and added some new games like FNAF 1 through 4.",
];

// Show Content Function
function showContent(section) {
    let content = document.getElementById('content');
    content.style.opacity = 0; // Fade out
    setTimeout(() => {
        if (section === 'games') {
            content.innerHTML = `<h2>Games</h2>
            <div class="game-grid" id="gameGrid">
                ${games.map(game => `<button onclick="openGame('${game.url}')">${game.name}</button>`).join('')}
            </div>`;
            document.getElementById('searchContainer').style.display = 'block';
            document.getElementById('categoryButtons').style.display = 'flex';
            document.getElementById('randomGameButton').style.display = 'block'; // Show Random Game Button
        } else if (section === 'changelog') {
            content.innerHTML = `<h2>Changelog</h2>
            <ul>
                ${changelog.map(entry => `<li>${entry}</li>`).join('')}
            </ul>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        } else if (section === 'request') {
            content.innerHTML = `<h2>Request a Game</h2>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScSAzH0fxhqhj2s_sypXYFnCp6Ugnuhk4Wb2PLA3ZR9fkNe9A/viewform?embedded=true" width="640" height="430" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        } else if (section === 'settings') {
            content.innerHTML = `<h2>Settings</h2>
            <div class="color-options">
                <button onclick="changeColors('#1a1a2e', '#0ff')">Default</button>
                <button onclick="changeColors('#000', '#fff')">Black & White</button>
                <button onclick="changeColors('#4B0082', '#FFD700')">Purple & Gold</button>
                <button onclick="changeColors('#FF4500', '#000')">Orange & Black</button>
                <button onclick="changeColors('#FF69B4', '#000')">Pink & Black</button>
                <button onclick="changeColors('#00FF7F', '#000')">Green & Black</button>
                <button onclick="changeColors('#00BFFF', '#000')">Blue & Black</button>
                <button onclick="changeColors('#FFD700', '#000')">Gold & Black</button>
                <button onclick="changeColors('#8A2BE2', '#FFD700')">Violet & Gold</button>
                <button onclick="changeColors('#FF6347', '#000')">Tomato & Black</button>
                <button onclick="changeColors('#20B2AA', '#000')">Light Sea Green & Black</button>
                <button onclick="changeColors('#FFA500', '#000')">Orange & Black</button>
            </div>`;
            document.getElementById('searchContainer').style.display = 'none';
            document.getElementById('categoryButtons').style.display = 'none';
            document.getElementById('randomGameButton').style.display = 'none'; // Hide Random Game Button
        }
        content.style.opacity = 1; // Fade in
    }, 300);
}

// Open Game Function
function openGame(url) {
    window.location.href = url; // Replace the current page
}

// Random Game Function (Fixed)
function openRandomGame() {
    const randomGame = games[Math.floor(Math.random() * games.length)];
    window.location.href = randomGame.url; // Replace the current page
}

// Filter Games by Category
function filterGames(category) {
    const gameGrid = document.getElementById('gameGrid');
    if (category === 'all') {
        gameGrid.innerHTML = games.map(game => `<button onclick="openGame('${game.url}')">${game.name}</button>`).join('');
    } else {
        const filteredGames = games.filter(game => game.category === category);
        gameGrid.innerHTML = filteredGames.map(game => `<button onclick="openGame('${game.url}')">${game.name}</button>`).join('');
    }
}

// Change Colors Function
function changeColors(background, textColor) {
    document.body.style.background = background;
    document.body.style.color = textColor;
    document.querySelectorAll("button").forEach(btn => {
        btn.style.backgroundColor = background;
        btn.style.color = textColor;
    });
    document.getElementById('search').style.backgroundColor = background;
    document.getElementById('search').style.color = textColor;
}

// Search Games Function
function searchGames() {
    const query = document.getElementById('search').value.toLowerCase();
    const gameButtons = document.querySelectorAll('.game-grid button');
    gameButtons.forEach(button => {
        const gameName = button.innerText.toLowerCase();
        if (gameName.includes(query)) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    });
}
