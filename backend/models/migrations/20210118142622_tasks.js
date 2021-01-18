
exports.up = function(knex) {
    return knex.schema.createTable("tasks", tbl => {
        tbl.increments("task_id")
        tbl.string("title", 100).notNullable()
        tbl.string("description")
        tbl.boolean("status").notNullable()
        tbl.integer("user_author").unsigned().notNullable()
  
        tbl.foreign("user_author").references("user_id").inTable("users")
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("tasks")
};
