import { defineField, defineType } from "sanity";

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier (e.g., "kasa-smart-plug")',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }), 
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      description: 'This image will be displayed on the product grid',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      description: 'Additional product images',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({
      name: 'stock',
      title: 'Stock',
      type: 'number',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
    }),
    defineField({
      name: 'isArchived',
      title: 'Is Archived',
      type: 'boolean',
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'date',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'updatedAt',
      title: 'Updated At',
      type: 'date',
    }),
  ],
});
