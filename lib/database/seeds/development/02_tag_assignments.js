const tagAssignments = [
    {
        id: 'f0317cdd-7615-4fa5-b75c-bfd32638518a',
        tag_id: '237c5d0b-8925-4388-9e62-a0faf8812de9',
        // parent_type: 'post' // default
        parent_id: '6fc3ad7d-2f82-4ea3-be01-92ccdd995741',
    }
];

exports.seed = knex => {
    const tableName = 'tag_assignment';
    console.log(`- seeding table "${tableName}" (${tagAssignments.length})`);
    return knex(tableName).insert(tagAssignments);
};
