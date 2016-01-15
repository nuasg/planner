var mongoose = require("mongoose");
var School = require("../models/school");

module.exports.findBySchool = function (req, res) {
	School.find({
		name: req.params.school_name
	}, function(err, major) {
		res.json(major);
	});
}