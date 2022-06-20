const fs = require('fs').promises;
// const fs = require('fs/promises');

async function write(content) {
  try {
    await fs.writeFile('talker.json', JSON.stringify(content));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = write;