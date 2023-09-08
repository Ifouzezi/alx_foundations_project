function fakeFacebookLogin() {
    alert("Simulating Facebook login...");
}

function fakeGoogleLogin() {
    alert("Simulating Google login...");
}

function clearPlaceholder(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.value === inputElement.defaultValue) {
        inputElement.value = "";
    }
}

function restorePlaceholder(inputId) {
    const inputElement = document.getElementById(inputId);
    if (inputElement.value === "") {
        inputElement.value = inputElement.defaultValue;
    }
}

   // Function to perform the search
   function performSearch() {
    // Get the search input value
    const searchInput = document.querySelector('.search-input').value.toLowerCase();
    // Get the container where search results will be displayed
    const searchResultsContainer = document.getElementById('search-results');

    // Perform your search logic here (e.g., search through your music data)
    // You can use an array or data structure to store your music data
    // For demonstration, let's assume you have an array of songs as follows:
    const songs = [
        { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
        { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
        // Add more songs here
    ];

    // Filter the songs based on the search input
    const searchResults = songs.filter(song => {
        return song.title.toLowerCase().includes(searchInput) ||
            song.artist.toLowerCase().includes(searchInput) ||
            song.album.toLowerCase().includes(searchInput);
    });

    // Display search results
    if (searchResults.length > 0) {
        searchResultsContainer.innerHTML = ''; // Clear previous results
        searchResults.forEach(song => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result-item');
            resultItem.innerHTML = `
                <div class="result-title">${song.title}</div>
                <div class="result-artist">${song.artist}</div>
                <div class="result-album">${song.album}</div>
            `;
            searchResultsContainer.appendChild(resultItem);
        });
    } else {
        searchResultsContainer.innerHTML = '<div class="no-results">No results found</div>';
    }
}

// Add an event listener to trigger the search when the user presses Enter
document.querySelector('.search-input').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

 // Function to handle mood selection
 function selectMood(mood) {
    // Hide all content sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected mood's content
    const selectedSection = document.getElementById(`${mood}-section`);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Add event listeners to each mood option
const moodOptions = document.querySelectorAll('.mood-option');
moodOptions.forEach(option => {
    option.addEventListener('click', function () {
        const selectedMood = option.textContent;
        selectMood(selectedMood);
    });
});

// Function to handle the click on a section item
function handleSectionItemClick(item) {
    // Get the details of the clicked item
    const title = item.querySelector('.section-item-title').textContent;
    const artist = item.querySelector('.section-item-artist').textContent;
    const album = item.querySelector('.section-item-album').textContent;

    // You can perform actions here, such as playing the song or displaying more details
    // For demonstration, we'll show an alert with the item details
    alert(`Title: ${title}\nArtist: ${artist}\nAlbum: ${album}`);
}

// Add click event listeners to all section items
const sectionItems = document.querySelectorAll('.section-item');
sectionItems.forEach(item => {
    item.addEventListener('click', function () {
        handleSectionItemClick(item);
    });
});

const audio = document.getElementById("music-player");
    const playButton = document.getElementById("play-button");
    const pauseButton = document.getElementById("pause-button");

    playButton.addEventListener("click", () => {
        audio.play();
        playButton.style.display = "none";
        pauseButton.style.display = "block";
    });

    pauseButton.addEventListener("click", () => {
        audio.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    });

    const fileInput = document.getElementById('file-input');
    const profilePicture = document.getElementById('profile-picture');

    fileInput.addEventListener('change', function () {
        const selectedFile = fileInput.files[0];

        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            profilePicture.src = objectURL;
        }
    });