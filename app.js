document.getElementById('uploadForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const photoInput = document.getElementById('photoInput');
    const thoughtsInput = document.getElementById('thoughtsInput');
    const journalEntries = document.getElementById('journalEntries');

    if (photoInput.files.length === 0) {
        alert('Please select a photo to upload.');
        return;
    }

    const file = photoInput.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const entry = document.createElement('div');
        entry.classList.add('entry');

        const img = document.createElement('img');
        img.src = event.target.result;
        
        const thoughts = document.createElement('p');
        thoughts.textContent = thoughtsInput.value;

        entry.appendChild(img);
        entry.appendChild(thoughts);

        journalEntries.prepend(entry);

        photoInput.value = '';
        thoughtsInput.value = '';
    };

    reader.readAsDataURL(file);
});
