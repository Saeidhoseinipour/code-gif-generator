import fs = require('fs');
import path = require('path');
import generateGif from '../src/index';

const createReadmeGif = async () => {
  const readmeContent = await fs.promises.readFile(path.resolve(__dirname, '../README.md'), 'utf8');
  const gif = await generateGif(readmeContent, {
    preset: 'smooth',
    mode: 'markdown',
    theme: 'monokai',
    lineNumbers: false,
  });
  await gif.save('readme-content', path.resolve(__dirname, '../docs/img'));
};

createReadmeGif();
