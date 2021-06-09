module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;

    const Article = app.model.define('article', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        img: STRING,
        title: STRING,
        summary: STRING,
        title: STRING,
        content: DATE,
    });

    return Article;
};