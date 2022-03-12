const noticeController = (req, res) => {
  res.render("notice");
};

const contactController = (req, res) => {
  res.render("contact");
};

const boardControllers = {
  noticeController,
  contactController,
};

module.exports = boardControllers;
