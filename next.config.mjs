/** @type {import('next').NextConfig} */
import path from "path"
import { dirname } from 'path';
import { fileURLToPath } from 'url';
    
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log("Dirname is ",path.join(__dirname, '/app/styles'))
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, '/app/styles')],
        prependData: `@import "variables.module.scss";`,
    },
};

export default nextConfig;
