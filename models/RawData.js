const {mongoose} = require('../server/config.js');

const rawDataSchema = mongoose.Schema({
	_id: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    breed: {type: String, required: true},
    weight: {type: Number, required: true},
    visits: {
        screening: { type: Date },
        day0: { type: Date },
        day30: { type: Date },
        day90: { type: Date },
        day180: { type: Date },
    },
	group: { type: String, required: true },
	joints: {
		j1: { type: String, required: true },
		j2: { type: String, required: true },
	},
	cbpi: {
		pain: {
			screening: { type: Number },
			day0: { type: Number },
			day30: { type: Number },
			day90: { type: Number },
			day180: { type: Number },
		},
		function: {
			screening: { type: Number },
			day0: { type: Number },
			day30: { type: Number },
			day90: { type: Number },
			day180: { type: Number },
		},
		qol: {
			screening: { type: String },
			day0: { type: String },
			day30: { type: String },
			day90: { type: String },
			day180: { type: String },
		},
	},
	vetAssessment: {
		j1: {
			screening: { type: String },
			day0: { type: String },
			day30: { type: String },
			day90: { type: String },
			day180: { type: String },
		},
		j2: {
			screening: { type: String },
			day0: { type: String },
			day30: { type: String },
			day90: { type: String },
			day180: { type: String },
		},
    },
    ownerOverallAssessment: {
        day30: { type: String },
        day90: { type: String },
        day180: { type: String },
    }
});

const RawData = mongoose.model('RawData', rawDataSchema);

module.exports = RawData;