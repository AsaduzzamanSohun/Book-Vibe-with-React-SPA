// rollup.config.js

export default {
    input: './src/main.jsx',
    output: {
      dir: './dist',
      format: 'es',
    },
    plugins: [],
    build: {
      chunkSizeWarningLimit: 1000, // Adjust if necessary
      rollupOptions: {
        output: {
          manualChunks(id) {
            // Example manualChunks configuration
            if (id.includes('node_modules')) {
              return 'vendor'; // Group all node_modules into a single chunk
            }
            // Add more conditions as needed for other modules
          },
        },
      },
    },
  };
  