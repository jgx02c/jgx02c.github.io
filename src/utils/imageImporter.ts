import project2PNG from '../assets/emberlight.png';
import project4PNG from '../assets/Dialogica/dialogica-demo.png';
import project5PNG from '../assets/login.png';
import project8PNG from '../assets/wildfire-active-map-tracker-features.jpeg';
import project9PNG from '../assets/gpt2hpccpp.png';
import scopePNG from '../assets/scope.png';
import fitHealthPNG from '../assets/fitness.png';
import vaultwrapPNG from '../assets/vaultwrap.png';
import npmrchPNG from '../assets/npm-rch.png';
import dialogicaMainPNG from '../assets/dialogicaMain.png';
import dialogicaAssistantPNG from '../assets/Dialogica/dialogica-assistant.png';
import breadboardsPNG from '../assets/breadboards.png';

interface ImageMap {
  [key: string]: string;
}

// Define fallback image (optional)
const fallbackImage = '';

const imageMap: ImageMap = {

  '../assets/emberlight.png': project2PNG,
  '../assets/Dialogica/dialogica-demo.png': project4PNG,
  '../assets/login.png': project5PNG,
  '../assets/wildfire-active-map-tracker-features.jpeg': project8PNG,
  '../assets/gpt2hpccpp.png': project9PNG,
  '../assets/scope.png': scopePNG,

  '../assets/fitness.png': fitHealthPNG,
  '../assets/vaultwrap.png': vaultwrapPNG,
  '../assets/npm-rch.png': npmrchPNG,
  '../assets/dialogicaMain.png': dialogicaMainPNG,
  '../assets/Dialogica/dialogica-assistant.png': dialogicaAssistantPNG,
  '../assets/breadboards.png': breadboardsPNG,
};

export const getProjectImage = (imagePath: string): string => {
  if (!imagePath) return fallbackImage;
  if (imageMap[imagePath]) return imageMap[imagePath];

  // Fall back to matching by filename when the path prefix differs.
  const fileName = imagePath.split('/').pop();
  const alternateKey = Object.keys(imageMap).find((key) => key.includes(fileName || ''));
  return alternateKey ? imageMap[alternateKey] : fallbackImage;
};

export default getProjectImage; 