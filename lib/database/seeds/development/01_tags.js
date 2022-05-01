const tags = [
    {
        id: '237c5d0b-8925-4388-9e62-a0faf8812de9',
        name: 'test'
    }
];

exports.seed = knex => {
    const tableName = 'tag';
    console.log(`- seeding table "${tableName}" (${tags.length})`);
    return knex(tableName).insert(tags);
};
