const fs = require('fs');

const inputs = fs.readFileSync('input.txt', 'utf8').trim()
    .split('\n');

const grid = new Map;
const sizes = new Map;

inputs.forEach(function (input) {
    // #123 @ 3,2: 5x4
    const match = input.match(/^#(?<id>\d+)\s@\s(?<xoffset>\d+),(?<yoffset>\d+):\s(?<width>\d+)x(?<height>\d+)/);

    const [id, xoffset, yoffset, width, height] = [
        match.groups.id,
        match.groups.xoffset,
        match.groups.yoffset,
        match.groups.width,
        match.groups.height,
    ].map(n => parseInt(n));

    sizes.set(id, width * height);

    for (let y = yoffset, ymax = yoffset + height; y < ymax; y++) {
        for (let x = xoffset, xmax = xoffset + width; x < xmax; x++) {
            const key = y+'x'+x;
            const value = ! grid.has(key)
                ? id
                : null;

            grid.set(key, value);
        }
    }
});

for (const [key, value] of sizes) {
    const realSize = Array.from(grid.values())
        .filter(v => v === key)
        .length;

    if (realSize === value) {
        console.log({key, value});
    }
}
