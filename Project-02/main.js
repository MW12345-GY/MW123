const mainContent = document.getElementById('main-content');
const overview = document.getElementById('overview');
const imageGallery = document.getElementById('image-gallery');

const imageSets = {
  confusion: [
    { url: 'Photo/confused1.jpg', description: 'Blade Runner (1982)' },
    { url: 'Photo/confused2.jpg', description: 'Whiplash (2014)' },
    { url: 'Photo/confused3.jpg', description: 'Sicario (2015)' },
    { url: 'Photo/confused4.jpg', description: 'Parasite (2019)' },
    { url: 'Photo/confused5.jpg', description: 'Blade Runner 2049 (2017)' },
    { url: 'Photo/confused6.jpg', description: 'In The Mood For Love (2000)' },
    { url: 'Photo/confused7.jpg', description: 'Oppenheimer (2023)' },
    { url: 'Photo/confused8.jpg', description: 'Good Time (2017)' },
    { url: 'Photo/confused9.jpg', description: 'Memories of Murder (2003)' },
  ],
  joy: [
    { url: 'Photo/joy1.jpg', description: 'Past Lives (2023)' },
    { url: 'Photo/joy2.jpg', description: '3 Idiots (2009)' },
    { url: 'Photo/joy3.jpg', description: 'Intouchable (2011)' },
    { url: 'Photo/joy4.jpg', description: 'Green Book (2018)' },
    { url: 'Photo/joy5.jpg', description: 'Big Fish (2003)' },
    { url: 'Photo/joy6.jpg', description: 'The Great Gatsby (2013)' },
    { url: 'Photo/joy7.jpg', description: 'Flipped (2010)' },
    { url: 'Photo/joy8.jpg', description: 'The Notebook (2004)' },
    { url: 'Photo/joy9.jpg', description: 'Once Upon a Time in America (1984)' },
  ],
  sadness: [
    { url: 'Photo/sadness1.jpg', description: 'Inception (2010)' },
    { url: 'Photo/sadness2.jpg', description: 'Interstellar (2014)' },
    { url: 'Photo/sadness3.jpg', description: 'The Pianist (2002)' },
    { url: 'Photo/sadness4.jpg', description: 'Detachment (2011)' },
    { url: 'Photo/sadness5.jpg', description: 'Manchester by the Sea (2016)' },
    { url: 'Photo/sadness6.jpg', description: 'Jagten (2012)' },
    { url: 'Photo/sadness7.jpg', description: 'Midsommar (2019)' },
    { url: 'Photo/sadness8.jpg', description: 'I Am Legend (2007)' },
    { url: 'Photo/sadness9.jpg', description: 'A Better Tommorrow (1986)' },

  ],
  thrill: [
    { url: 'Photo/thrill1.jpg', description: 'The Dark Knight (2008)' },
    { url: 'Photo/thrill2.jpg', description: 'A Clockwork Orange (1971)' },
    { url: 'Photo/thrill3.jpg', description: 'Kill Bill (2003)' },
    { url: 'Photo/thrill4.jpg', description: 'Black Swan (2010)' },
    { url: 'Photo/thrill5.jpg', description: 'Dune: Part Two (2024)' },
    { url: 'Photo/thrill6.jpg', description: 'The Shining (1980)' },
    { url: 'Photo/thrill7.jpg', description: 'American Psycho (2000)' },
    { url: 'Photo/thrill8.jpg', description: 'Get out (2017)' },
    { url: 'Photo/thrill9.jpg', description: 'Psycho (1960)' },
  ],
  anger: [
    { url: 'Photo/anger1.jpg', description: 'John Wick (2014)' },
    { url: 'Photo/anger2.jpg', description: 'The Equalizer (2014)' },
    { url: 'Photo/anger3.jpg', description: 'Raging Bull (1980)' },
    { url: 'Photo/anger4.jpg', description: 'Django Unchained (2012)' },
    { url: 'Photo/anger5.jpg', description: 'La Haine (1995)' },
    { url: 'Photo/anger6.jpg', description: 'Kill Bill (2003)' },
    { url: 'Photo/anger7.jpg', description: 'Joker (2019)' },
    { url: 'Photo/anger8.jpg', description: 'Pulp Fiction (1994)' },
    { url: 'Photo/anger9.jpg', description: 'Fight Club (1999)' },
  ],
};

// Function to show the overview section
function showOverview() {
  imageGallery.style.display = 'none';
  overview.style.display = 'block';
}

// Function to show images for a selected emotion
function showImages(emotion) {
  overview.style.display = 'none';
  imageGallery.style.display = 'grid';
  const images = imageSets[emotion];
  imageGallery.innerHTML = images
    .map(
      (image) =>
        `<img src="${image.url}" alt="${emotion}" onclick="showOverlay('${image.description}')">`
    )
    .join('');
}
// Function to show an overlay with the image description
function showOverlay(description) {
    const overlay = document.createElement('div');
    overlay.className = 'image-overlay';
    overlay.innerHTML = `<p>${description}</p>`;
    overlay.onclick = () => document.body.removeChild(overlay);
    document.body.appendChild(overlay);
  }