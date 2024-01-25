import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Add this line if you are using .jsx files
      include: '**/*.jsx',
      // Or this line if you are using .tsx files
      // include: "**/*.tsx",
    }),
  ],
});
