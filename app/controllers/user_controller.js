module.exports = {

  login: {
    page: function(req, res) {
      res.render('user/login');
    },
    service: function(req, res) {

    }
  },

  signup: {
    page: function(req, res) {
      res.render('user/signup');
    },
    service: function(req, res) {

    }
  }

};
