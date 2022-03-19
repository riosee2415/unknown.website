const db = require("../db");

const noticeController = (req, res) => {
  const selectQuery = `
  SELECT	id,
          title,
          author,
          DATE_FORMAT(createdAt, "%Y.%m.%d") 	AS createdAt
    FROM	notice
   ORDER  BY  createdAt DESC
  `;

  try {
    db.query(selectQuery, (error, rows) => {
      if (error) {
        console.log(" -- 데이터베이스 쿼리 실행 오류 --");
        console.error(error);
      }

      res.render("notice", { potato: rows });
    });
  } catch (error) {
    console.error(error);
    res.render("index");
  }
};

const contactController = (req, res) => {
  res.render("contact");
};

const writeScreenController = (req, res) => {
  res.render("write");
};

const writePostController = (req, res) => {
  const insertQuery = `
    INSERT INTO notice 
    (
      title,
      content,
      author,
      createdAt
    ) VALUES 
    (
      "${req.body.title}",
      "${req.body.content}",
      "${req.body.author}",
      now()
    )
  `;

  try {
    db.query(insertQuery, (error, rows) => {
      if (error) {
        console.error(error);
        throw "데이터베이스 에러 발생!";
      }

      res.redirect("/b/notice");
    });
  } catch (error) {
    console.error(error);
    res.render("index");
  }
};

const boardControllers = {
  noticeController,
  contactController,
  writeScreenController,
  writePostController,
};

module.exports = boardControllers;
