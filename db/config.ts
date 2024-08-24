import { defineDb, defineTable, column } from 'astro:db';

const StandardAction = defineTable({
  columns: {
    Id: column.number(),
    created_at: column.date(),
    title: column.text(),
    phase_number: column.text(),
    phase_name: column.text(),
    standard_action_description: column.text(),
    modifier: column.text(),
    standard_action_condition: column.text(),
    description_phase_title: column.text(),
    standard_action_tag: column.text(),
    spending_cost: column.text(),
    limiter_description: column.text(),
    ability_parameter: column.text(),
    footer_specifier: column.text(),
  }
});
export default defineDb({
  tables: { StandardAction },
})