
exports.up = function(knex) {
  return knex.schema.createTable("users", tbl => {
      tbl.increments("user_id")
      tbl.string("name", 40).notNullable()
      tbl.string("email", 150).notNullable()
      tbl.string("password").notNullable()
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
