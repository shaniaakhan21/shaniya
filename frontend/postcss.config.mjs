import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

const postcssConfig = {
  plugins: [
    tailwindcss('./tailwind.config.js'),
    autoprefixer,
  ],
};

export default postcssConfig;
