import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        NEXT_PUBLIC_SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET,
    },
    images:{
        domains: ['cdn.sanity.io'],
    }
};

export default nextConfig;
