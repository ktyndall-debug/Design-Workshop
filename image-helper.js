// Image Replacement Helper Script
// Run this in the browser console to help you replace placeholder images with your actual screenshots

console.log('🎨 Kyle\'s Design Workshop - Image Replacement Helper');
console.log('=====================================');

// Define the images that need to be replaced
const imagesToReplace = [
    {
        id: 'portfolio1-light',
        description: 'Finsweet Business Site - Light Version',
        filename: 'portfolio1-light.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        id: 'portfolio1-dark', 
        description: 'Finsweet Business Site - Dark Version',
        filename: 'portfolio1-dark.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        selector: '.portfolio-item:nth-child(1) img',
        description: 'Finsweet Thumbnail',
        filename: 'portfolio1-thumb.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        selector: '.portfolio-item:nth-child(2) img',
        description: 'Church Website Thumbnail', 
        filename: 'portfolio2-thumb.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        selector: '.portfolio-item:nth-child(3) img',
        description: 'Media Production Thumbnail',
        filename: 'portfolio3-thumb.jpg', 
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        selector: '#modal2 .modal-image',
        description: 'Church Website Full Size',
        filename: 'portfolio2.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    },
    {
        selector: '#modal3 .modal-image',
        description: 'Media Production Full Size',
        filename: 'portfolio3.jpg',
        currentSrc: 'data:image/svg+xml;base64...' // placeholder
    }
];

// Function to replace an image
function replaceImage(selector, newSrc) {
    const img = document.querySelector(selector);
    if (img) {
        img.src = newSrc;
        console.log(`✅ Replaced image: ${selector}`);
        return true;
    } else {
        console.log(`❌ Could not find image: ${selector}`);
        return false;
    }
}

// Function to replace all images at once (if you have them in the same folder)
function replaceAllImages() {
    console.log('🔄 Attempting to replace all placeholder images...');
    
    imagesToReplace.forEach(img => {
        const selector = img.id ? `#${img.id}` : img.selector;
        const newSrc = img.filename; // assuming images are in the same folder
        
        if (replaceImage(selector, newSrc)) {
            console.log(`   📁 Looking for: ${img.filename}`);
            console.log(`   📝 Description: ${img.description}`);
        }
    });
    
    console.log('✨ Image replacement complete!');
    console.log('📋 Make sure your image files are in the same folder as index.html');
}

// Function to show what images need to be added
function showImageList() {
    console.log('📋 Images you need to add to your project folder:');
    console.log('===============================================');
    
    imagesToReplace.forEach((img, index) => {
        console.log(`${index + 1}. ${img.filename}`);
        console.log(`   Description: ${img.description}`);
        console.log(`   Usage: ${img.id ? 'Modal full-size image' : 'Thumbnail image'}`);
        console.log('');
    });
    
    console.log('💡 Instructions:');
    console.log('1. Save your screenshot images with the exact filenames listed above');
    console.log('2. Place them in the same folder as index.html');
    console.log('3. Run replaceAllImages() in the console, or refresh the page');
}

// Export functions to global scope
window.replaceAllImages = replaceAllImages;
window.replaceImage = replaceImage;
window.showImageList = showImageList;

// Show the image list by default
showImageList();