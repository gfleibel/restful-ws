const test = require('ava');
const { connection, errorHandler } = require('./setup');
const categories = require('../categories')({ connection, errorHandler });

const create = () => categories.save('category-test');
const update = () => categories.update(1, 'category-test-updated');
const remove = () => categories.del(1);

test.beforeEach((t) => connection.query('TRUNCATE TABLE categories'));
test.after.always((t) => connection.query('TRUNCATE TABLE categories'));

test('Criação de categoria', async (t) => {
  const result = await create();
  t.is(result.categories.name, 'category-test');
});

test('Atualização de categoria', async (t) => {
  await create();
  const updated = await update();
  console.log(updated.affectedRows);
  t.is(updated.categories.name, 'category-test-updated');
  t.is(updated.affectedRows, 1);
});

test('Remoção de categoria', async (t) => {
  await create();
  const removed = await remove();
  t.is(removed.affectedRows, 1);
});
