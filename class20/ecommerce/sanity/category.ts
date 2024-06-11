import { defineType,defineField } from "sanity";

export default defineType({
    name:"category",
    type:"document",
    title:"Category",
    fields : [
        defineField({
            name: "name",
            type: "string",
            title: "Category Name",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options:{
                source:"name",
                maxLength:96,
            }
        }),
    ]
})