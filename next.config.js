const path = require('path');

const withPurgeCSSModules = require('next-purge-css-modules');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'api.sadaivsatya.com',
            },
        ],
    },
};

/** @type {import('next-purge-css-modules').PurgeConfig} */
const purgeConfig = {
    content: path.join(__dirname, 'src/**/*.{js,jsx,ts,tsx}'),
    enableDevPurge: true,
    safelist: ['body', 'html'],
};

module.exports = withPurgeCSSModules(purgeConfig, nextConfig);