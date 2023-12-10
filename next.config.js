/** @type {import('next').NextConfig} */

    module.exports = {
      
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'gute-nacht-geschichte-images.s3.eu-central-1.amazonaws.com',
              port: '',
              pathname: '/**',
            },
          ],
        },
      };


  

      