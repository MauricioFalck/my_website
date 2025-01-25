export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customHeaderText: '#F3F4F6',        // Gray 100 equivalent for headers
        customSubtitleText: '#3B82F6',      // Gray 200 equivalent for subtitles
        customBodyText: '#D1D5DB',          // Gray 300 equivalent for body text
        customNavText: '#E5E7EB',           // Gray 200 equivalent for navigation text
        customNavHoverText: '#3B82F6',      // Blue 400 equivalent for navigation hover text
        customFooterText: '#9CA3AF',        // Gray 400 equivalent for footer text
        buttonText: '#FFFFFF',              // White for primary button text
        primaryButtonBg: '#2563EB',         // Blue 600 for primary button background
        primaryButtonHoverBg: '#1D4ED8',    // Blue 700 for primary button hover background
        secondaryButtonBg: '#4B5563',       // Gray 700 for secondary button background
        secondaryButtonHoverBg: '#374151',  // Gray 800 for secondary button hover background
      },
    },
  },
  plugins: [],
}

