use('nomeDoBanco');

// Create a new collection.
// db.carros.find();

// db.carros.find({ preco: { $gt: 0.499 } });

// db.products.find();

// db.nomeDaColecao.find();

// db.carros.find({ _id: 8 }, { name: 1 });

// db.carros.find({ _id: 8 }, { name: 1, _id: 0, birth: 1 });

// db.carros.find({ 'name.first': 'John' }).pretty();

// db.bios.find().skip(5).limit(2);

// db.books.count();

// db.books.find({ status: 'PUBLISH' }).count();

// db.books.find({}, { title: 1, _id: 0, isbn: 1, pageCount: 1 }).limit(3);

// db.books.find({ status: 'MEAP' }, { title: 1, authors: 1, status: 1 }).limit(10);


// db.books.find({ $or: [{ status: { $ne: "PUBLISH" } }, { publishedDate: { $exists: false } }] }).sort({ pageCount: -1, title: 1 });

// db.books.find().skip(20);
db.books.find({ categories: { $size: 2 } });
