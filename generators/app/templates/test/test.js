import fs from 'fs';
import test from 'ava';
import marked from 'marked';
import cheerio from 'cheerio';
import <%=pluginname%> from '../dist/<%=name%>';

const md = fs.readFileSync(`${__dirname}/fixtures.md`, 'utf-8');

test.todo('todo');
