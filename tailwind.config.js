/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        screens: {
            // Need to do max-width 575
            xs: { max: '575px' },
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            xxl: '1400px',
        },
        colors: {
            transparent: 'transparent',
            // current: 'currentColor',
            // purple_dark: '#8685EF',
            // purple_med: '#8685ef70',
            // purple_light: '#8685ef20',
            // gray_dark: '#E6E6E6',
            // gray_med: '#E6E6E670',
            // gray_light: '#e6e6e620',
            // text: '#334155',
            codeblockheader_dark: '#192652',
            codeblockheaderfont_dark: '#a3acb9',
            codeblockbody_dark: '#202e63',
        },
        fontFamily: {
            // sans: ['Graphik', 'sans-serif'],
            // serif: ['Merriweather', 'serif'],
            // main: ['Questrial', 'sans-serif'],
        },
        extend: {
            spacing: {
                128: '32rem',
                144: '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
        minWidth: {
            gutter: '80%',
        },
    },
    plugins: [],
};
