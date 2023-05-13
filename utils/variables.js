const { createAudioPlayer } = require('@discordjs/voice');
const audioPlayer = {
	_musicStream: createAudioPlayer(),
	_connection: null,
	_connectionId: null,
	get musicStream() {
		return this._musicStream;
	},
	set musicStream(newMusicStream) {
		this._musicStream = newMusicStream;
	},
	get connection() {
		return this._connection;
	},
	set connection(newConnection) {
		this._connection = newConnection;
	},
	get connectionId() {
		return this._connectionId;
	},
	set connectionId(newConnectionId) {
		this._connectionId = newConnectionId;
	},
};

const lastActivityTimestamp = {
	_value: null,
	get value() {
		return this._value;
	},
	set value(newValue) {
		this._value = newValue;
	},
};

module.exports = {
	audioPlayer, lastActivityTimestamp,
};