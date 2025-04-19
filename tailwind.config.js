/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html", 
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Inter is the default font, works
        serif: ['Georgia', 'serif'],   // Georgia is the default font, works
        Roboto: ['Roboto'], // not working
      },

      screens: {
        'custom-md': '700px',   // breakpoint: change nav-bar, blog-body reach max-width
        // 'custom-lg-1': '899px',   //breakpoint: setting main-middle part
        'custom-lg': '900px',   // breakpoint: show sidebar(fixed width w-80) on the right
        'custom-lg-rs': '1023px',   // breakpoint: show sidebar(fixed width w-80) on the right
        'custom-xl': '1100px',  // breakpoint: show sidebar(fixed width w-80) on the left, both sidebar's width grows equally
        'custom-2xl':'1340px',  // breakpoint: both sidebar's widths grow equally
        'custom-3xl': '1500px',  // breakpoint: both sidebar's widths reach max-width, main-middle part stays in the middle but grows in both margins
        'custom-4xl': '1920px',  // breakpoint: both sidebar's widths reach max-width
      },

      spacing: {
        'screen-minus-14': 'calc(100vh - 3.5rem)', // Assuming h-14 is 3.5rem
      },
    },
  },
  plugins: [],
}

