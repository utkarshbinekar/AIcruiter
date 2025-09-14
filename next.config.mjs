/** @type {import('next').NextConfig} */
const nextConfig = {
  images:{
      domains:[
        'lh3.googleusercontent.com',
        // Add any other domains you use for images below:
        // Example: Supabase Storage public bucket
        'tnnwzzjuzkueeohpidkj.supabase.co',
        // Example: jsdelivr CDN
        'cdn.jsdelivr.net'
      ]
  }
};

export default nextConfig;
