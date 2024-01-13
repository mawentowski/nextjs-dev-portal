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
            white: '#FFFFFF',
            textprimary: '#003366',
            textaccent: '#0F172A',
            graylight: '#F3F4F6',
            graymedium: '#E5E7EB',
            graydark: '#6B7280',
            bluelight: '#ABD6FF',
            bluemedium: '#004D99',
            // need to add this as a variable
            bluedark: '#0066cc',
            blueextradark: '#003366',
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
