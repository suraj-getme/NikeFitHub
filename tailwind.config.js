// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           50: '#f0fdfa',
//           100: '#ccfbf1',
//           200: '#99f6e4',
//           300: '#5eead4',
//           400: '#2dd4bf',
//           500: '#14b8a6',
//           600: '#0d9488',
//           700: '#0f766e',
//           800: '#115e59',
//           900: '#134e4a',
//         },
//         secondary: {
//           50: '#fdf2f8',
//           100: '#fce7f3',
//           200: '#fbcfe8',
//           300: '#f9a8d4',
//           400: '#f472b6',
//           500: '#ec4899',
//           600: '#db2777',
//           700: '#be185d',
//           800: '#9d174d',
//           900: '#831843',
//         },
//         accent: {
//           50: '#fffbeb',
//           100: '#fef3c7',
//           200: '#fde68a',
//           300: '#fcd34d',
//           400: '#fbbf24',
//           500: '#f59e0b',
//           600: '#d97706',
//           700: '#b45309',
//           800: '#92400e',
//           900: '#78350f',
//         },
//       },
//     },
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   darkMode: 'class',
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           light: '#6366f1',
//           dark: '#4f46e5',
//         },
//         secondary: {
//           light: '#f43f5e',
//           dark: '#e11d48',
//         },
//         background: {
//           light: '#ffffff',
//           dark: '#1f2937',
//         },
//         text: {
//           light: '#1f2937',
//           dark: '#f3f4f6',
//         },
//       },
//       animation: {
//         'bounce-slow': 'bounce 3s infinite',
//         'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
//       },
//     },
//   },
//   plugins: [],
// }


const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1',
          dark: '#4f46e5',
        },
        secondary: {
          light: '#f43f5e',
          dark: '#e11d48',
        },
        background: {
          light: '#ffffff',
          dark: '#1f2937',
        },
        text: {
          light: '#1f2937',
          dark: '#f3f4f6',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

