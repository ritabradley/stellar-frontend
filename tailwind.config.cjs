/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'main-gradient':
                    'linear-gradient(to right bottom, #cb6bd1, #c569d4, #be67d7, #b666db, #ae65de, #a56ae3, #9b6fe8, #9173ed, #847df2, #7785f7, #6b8df9, #5f95fb);',
            },
            fontFamily: {
                mono: ['"Space Mono"', 'monospace'],
            },
        },
    },
    plugins: [],
};
