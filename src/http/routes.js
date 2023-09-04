const categories = require('../services/mysql');
const db = require('../services/mysql');

// db.categories().save(name);
// db.categories().update(id, name);
// db.categories().delete();

const routes = (server) => {
  server.get('/categoria', (req, res, next) => {
    db.categories()
      .all()
      .then((categories) => {
        console.log(categories);
        res.send(categories);
        next();
      })
      .catch((error) => console.log(error));
  });
  server.post('/categoria', (req, res, next) => {
    const { name } = req.params;
    res.send(name);
    next();
  });
  // server.put('categoria', (req, res, next)=>{
  //   res.send();
  //   next();
  // });
  // server.delete('categoria', (req, res, next)=>{
  //   res.send();
  //   next();
  // });

  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence. Again...');
    next();
  });
};

module.exports = routes;
