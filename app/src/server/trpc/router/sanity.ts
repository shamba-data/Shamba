import { z } from "zod";
import client from "../../../../client";
import { router, publicProcedure } from "../trpc";
import groq from "groq";
import { createRouter } from "../context";
// import client, {previewClient} from "../../../utils/sanity"

// export const sanityRouter = router({
//     getReports: publicProcedure
//         // .input(z.object({query: z.string().nullish(), preview: z.boolean()}))
//         .input(z.string().nullish())
//         .query(({ input }) => {
//             const data = client.fetch(input);
//             return data;
//     })
// })


export const sanityRouter = router({
    getReports: publicProcedure.input(z.object({slug: z.string()}))
        .query(
        async ({ctx, input}) => {
             ctx.client.fetch(
            groq`*[_type == "post" && slug.current == $slug][0] {
            author->{slug{current}},
            categories[]->{title},
            country[]->{title},
            body,
            title,
            
            }`, 
                 {
                     slug: input.slug,
                 }
    );


        }
    ),
    
   
})

// export const sanityRouter = createRouter().query("home", {
//   async resolve() {
//     const projects = await client.fetch(
//       groq`*[_type == "post"]|[0..1] {
//             mainImage{asset{_ref}},
//             _createdAt,
//             excerpt,
//             title,
//             slug{current},
//             categories[]->{title},
//             }`
//     );

//     return projects;
//   },
// }).query('all', {
//   async resolve() {
//     const projects = await client.fetch(
//       groq`*[_type == "post"]|[0..6] {
//             mainImage{asset{_ref}},
//             _createdAt,
//             excerpt,
//             title,
//             slug{current},
//             categories[]->{title},
//             }`
//     );

//     return projects;
//   }
// });
