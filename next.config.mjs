/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            protocol:"https",
            hostname:"cdn.dummyjson.com",
            pathname:"/recipe-images/**",
            port:"",
            search:""


        }]
    }
};

export default nextConfig;
