# text-based-audio test app

dev setup
```
yarn install
```

running the app (with dev serve that rebuilds automatically when files change)
```
cd _website
yarn parcel index.html
```

in browser, go to: http://localhost:1234

## Goal 

Using source text, audio and timestamp.json, create HTML user experience
that allows 
* text selection at word boundaries 
* playback of audio for selected text
* for text selection, determine 
  * selected html
  * audio start/end
  * word timestamps 

Note: For this test app, timestamp data is embedded in javascript code,
in the source file `word_timestamps.js`

## Workflow

1) Read aloud source text to generate raw audio file
2) Edit in Descript (trim pauses at start / end, remove extra words + restarts)
3) export audio file
4) download timestamp.json in [transcript json format](https://github.com/Podcastindex-org/podcast-namespace/blob/main/transcripts/transcripts.md#json)

Note: whisper could also be used to get word start/end timestamps

## Timestamp data from Descript
Descript web interface here:
https://share.descript.com/view/oWvAEnuZlRu

Documentation on how to get data for an integration:
https://help.descript.com/hc/en-us/articles/10255610365837-Becoming-a-supported-content-hosting-partner

Transcript and timestamp json here:
https://descriptusercontent.com/published/ce198d39-479a-4d16-b612-fe48f3b47268/transcript.json