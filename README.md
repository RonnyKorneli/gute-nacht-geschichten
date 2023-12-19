### Next worksteps....

- Dockerize Application with DB
- [x] Dockerize backend
- Dockerize Frontend
- [x] Install Docker on on EC2 for Backend
- Install Docker on on EC2 for Frontend
- [x] Make Frontpage load the 9 first stories from Backend
- Read about find out out Next.js to production
- Find out if I should use Lambda or EC2 for frontend
- Set up Git hub actions
- Make 40 Stories
- [ ] Create I am Julian Page
- Make Blog space with 9 entries.
- Datenschutz
- Google Adsense
- Impressum
- SEO Text underneath stories on front-page
- Make update stories layout different per
- Finish the login topic
- Create a component that shows all images in the s3 bucket
- This component should be able to delete images
- Make an E mail call to action thing
- Mobile burger menu
- Check general responsiveness
- Buy GHerman Domain
- Buy Norwegian domain
- Check prizing in AWS
- Work on List of Julian’s books

####################

### AWS EC2 INSTANCE

Assuming you choose a t3a.micro instance for simplicity, which is a cost-effective option.
Monthly cost: $0.0108 per hour _ 24 hours/day _ 30 days/month = $7.776.

### Data Transfer OUT to Internet:

AWS offers 100GB of data transfer out to the internet for free each month.
For simplicity, let's assume your blog generates 10GB of additional data transfer out per month.
Monthly cost: (10GB - 100GB free) \* $0.09 per GB = $0.90.

### Total Estimated Monthly Cost:

EC2 Instance Cost + Data Transfer Cost = $7.776 + $0.90 = $8.676.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Color Scheme

- blue: #7071E8,
- purple: #C683D7,
- pink: #ED9ED6,
- peach: #FFC7C7
