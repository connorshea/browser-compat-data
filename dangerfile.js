const {danger, warn} = require('danger')

const modified = danger.git.modified_files;
const newFiles = danger.git.created_files;

message(modified.toString());
