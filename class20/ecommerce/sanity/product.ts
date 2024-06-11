import { defineType,defineField } from "sanity";

export const product  = defineType({
    name: "product", /// file name
    title: "Product", // title
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string"
        }),
        defineField({
            name: "price",
            title: "Price",
            type: "number"
        }),
        defineField({
            name: "quantity",
            title: "Quantity",
            type: "number"
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "string"
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                    type: "category",
                }
            ]
        }),
        defineField({
            name: "subcat",
            title: "Sub Category",
            type: "string"
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
        defineField({
            name: "productcare",
            title: "Product Care",
            type: "array",
            of:[
                {
                    name: "carelist",
                    type: "string",
                    title: "Handle with Care"
                }
            ]
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "array",
            of: [
               {
                 name: "img",
                type: "image",
                title: "Image",
                options:{
                    hotspot :true
                }
               }
            ]
        })
    ]
})