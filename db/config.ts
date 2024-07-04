import { defineDb, defineTable, column } from 'astro:db';

const Author = defineTable({
  columns: {
    id: column.number(),
    name: column.text(),
  }
});

const Comment = defineTable({
  columns: {
    authorId: column.number(),
    body: column.text(),
  }
});
export default defineDb({
  tables: { Comment, Author },
})