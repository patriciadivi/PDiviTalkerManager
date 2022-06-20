const fs = require('fs').promises;
// const fs = require('fs/promises');

async function read() {
  try {
    const result = await fs.readFile('talker.json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = read;