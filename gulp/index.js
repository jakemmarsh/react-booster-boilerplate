'use strict';

import fs          from 'fs';
import onlyScripts from './utils/script_filter';

const tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach((task) => {
  require('./tasks/' + task);
});
