/* Tailwind theme: University of Cincinnati-inspired palette.
   Load AFTER the Tailwind CDN script on every page. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        uc: {
          red: '#E00122',      // primary accent
          deep: '#9B0C1F',     // hover and headings accent
          charcoal: '#2B2B2E', // text and header
          slate: '#F4F5F7'     // page background
        }
      }
    }
  }
};
