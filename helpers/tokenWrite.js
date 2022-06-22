const fs = require('fs').promises;
// const fs = require('fs/promises');

async function tokenWrite(content) {
  try {
    await fs.writeFile('./ middlewares/token.json', JSON.stringify(content));
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = tokenWrite;