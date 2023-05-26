const about = (req, res) => {
  res.render('about', { title: 'About' });
};

module.exports = { about };
