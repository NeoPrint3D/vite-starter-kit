const sharp = require('sharp');
const fs = require('fs');
const outFiles = fs.readdirSync('./dist');
const images = fs.readdirSync('./public/images');
const pages = outFiles.filter(file => file.endsWith('.html'));
images.forEach(async (image) => {
    const cleanName = image.split('.')[0];
    const imageSizeInKb = fs.statSync(`./public/images/${image}`).size / 1024
    const quality = imageSizeInKb < 25 ? 1 : 70
    fs.unlinkSync(`./out/images/${image}`);
    await sharp(`./public/images/${image}`).
        webp({ quality }).
        toFile(`./out/images/${cleanName}.webp`);
    const newFileSizeInKb = fs.statSync(`./out/images/${cleanName}.webp`).size / 1024
    console.log("\x1b[36m%s\x1b[0m", ` ${cleanName} ${imageSizeInKb}kb -> ${newFileSizeInKb}kb`);
    pages.forEach(page => {
        const html = fs.readFileSync(`./out/${page}`, 'utf8');
        const newHtml = html.replace(`/images/${image}`, `/images/${cleanName}.webp`);
        fs.writeFileSync(`./out/${page}`, newHtml);
    })
})