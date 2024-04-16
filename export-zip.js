import { createRequire } from "module";
import { fileURLToPath } from 'url';
import path from 'path';
import { parseDocument } from "yaml";

const require = createRequire(import.meta.url);

const fs = require('fs');
const archiver = require('archiver');

const __filename = fileURLToPath(import.meta.url);
const homedir = path.dirname(__filename);;
const mode = process.env.NODE_ENV || 'dev';

const filename = mode === 'prod' ? 'halo-theme-kwin' : 'halo-theme-kwin-dev';

const yamlContent = fs.readFileSync('theme.yaml', 'utf8');
const config = parseDocument(yamlContent);

const outputName = filename + '.' + config.getIn(['spec','version']) + '.zip';
const output = fs.createWriteStream(homedir + '/' + outputName);
const archive = archiver('zip', {
  zlib: {level: 9} // 设置压缩级别
});

archive.on('error', function (err) {
  throw err;
});

output.on('close', function () {
  console.log(`
     --------- ---------压缩完毕--------- ---------
        ${homedir}\\${outputName} - ${(archive.pointer() / 1024 / 1024).toFixed(1)}MB
     --------- -------------------------- ---------
     `);
});

archive.pipe(output);
archive.directory('i18n/', true);
archive.directory('templates/', true);
archive.file('settings.yaml', {name: 'settings.yaml'});
archive.file('annotation-setting.yaml', {name: 'annotation-setting.yaml'});
archive.file('theme.yaml', {name: 'theme.yaml'});
archive.finalize();
