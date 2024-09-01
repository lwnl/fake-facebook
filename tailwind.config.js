/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",  // 确保包括你的 HTML 文件
    "./src/**/*.{js,jsx,ts,tsx}"  // 如果你的项目文件在 src 目录下，确保包括这些文件
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
        Roboto: ['Roboto'], // 确保 Roboto 字体可用
      },
      screens: {
        'custom-md': '700px',
        'custom-lg-1': '899px',
        'custom-lg': '900px',
        'custom-xl': '1100px',
        'custom-2xl': '1340px',
        'custom-3xl': '1500px',
        'custom-4xl': '1920px',
      },
      spacing: {
        'screen-minus-14': 'calc(100vh - 3.5rem)',
      },
    },
  },
  plugins: [],
}