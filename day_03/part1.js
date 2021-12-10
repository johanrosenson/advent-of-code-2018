const fs = require('fs');

const inputs = fs.readFileSync('input.txt', 'utf8').trim()
    .split('\n');

const grid = new Map;

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

    for (let y = yoffset, ymax = yoffset + height; y < ymax; y++) {
        for (let x = xoffset, xmax = xoffset + width; x < xmax; x++) {
            const key = y+'x'+x;
            const value = grid.has(key)
                ? grid.get(key) + 1
                : 1;

            grid.set(key, value);
        }
    }
});

const answer = Array.from(grid.values())
    .filter(v => v >= 2)
    .length;

console.log(answer);
