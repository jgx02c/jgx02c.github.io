
import project2PNG from '../assets/emberlight.png';
import project4PNG from '../assets/Dialogica/dialogica-demo.png';
import project5PNG from '../assets/login.png';
import project8PNG from '../assets/wildfire-active-map-tracker-features.jpeg';
import project9PNG from '../assets/gpt2hpccpp.png';
import scopePNG from '../assets/scope.png';
import fitHealthPNG from '../assets/fitness.png';
import vaultwrapPNG from '../assets/vaultwrap.png';
import npmrchPNG from '../assets/npm-rch.png';
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
  '../assets/npm-rch.png': npmrchPNG
};

export const getProjectImage = (imagePath: string): string => {
  try {
    if (!imagePath) {
      console.warn('Empty image path provided to getProjectImage');
      return fallbackImage;
    }

    // Log all available keys for debugging
    console.log('Available image paths:', Object.keys(imageMap).join(', '));
    console.log('Requested image path:', imagePath);

    // Check if the image path exists in our map
    if (imageMap[imagePath]) {
      return imageMap[imagePath];
    }

    // Try alternate paths if the exact path isn't found
    const fileName = imagePath.split('/').pop();
    const alternateKeys = Object.keys(imageMap).filter(key => key.includes(fileName || ''));
    
    if (alternateKeys.length > 0) {
      console.log(`Using alternate image path: ${alternateKeys[0]} for ${imagePath}`);
      return imageMap[alternateKeys[0]];
    }

    console.warn(`Image not found: ${imagePath}`);
    return fallbackImage;
  } catch (error) {
    console.error('Error in getProjectImage:', error);
    return fallbackImage;
  }
};

export default getProjectImage; 