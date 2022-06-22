const fs = require('fs').promises;
// const fs = require('fs/promises');

async function tokenRead() {
  try {
    const result = await fs.readFile('./ middlewares/token.json', { encoding: 'utf8' });
    return JSON.parse(result);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = tokenRead;