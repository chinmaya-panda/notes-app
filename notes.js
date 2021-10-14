const fs = require('fs');

const readNotes = () => {
    const f_text = fs.readFileSync('notes.txt')
    return f_text.toString()
};

module.exports = readNotes;
