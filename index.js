const stream = require('youtube-audio-stream')
const url = process.argv[2]
const decoder = require('lame').Decoder
const speaker = require('speaker')

stream(url)
.pipe(decoder())
.pipe(new speaker())
