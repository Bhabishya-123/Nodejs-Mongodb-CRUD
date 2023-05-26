const error = (err, req, res, next) => {
  res.status(500).send(err || 'Something went wrong');
};
module.exports = error;
