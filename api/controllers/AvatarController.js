/**
 * AvatarController
 *
 * @description :: Server-side logic for managing Avatars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  upload: function(req, res) {
    var parametros = req.allParams();
    console.log('parametros', parametros);

    req.file('file')
      .upload({
        maxBytes: 1000000
      }, function whenDone(err, uploadedFiles) {
        if (err) return res.serverError(err);
        else {
          console.log('imagen ok');
          return res.json({
            files: uploadedFiles,
            textParams: req.params.all()
          })
        };
      });
  }
};
