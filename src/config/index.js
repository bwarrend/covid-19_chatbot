export default {
    endpoint_test: 'https://fortesting-iubj.core.ushaflow.io', // <- enter your gateway URL here
    endpoint: 'https://applied-might-293623.core.ushaflow.io',
    muted: false, // <- mute microphone at start
    start_suggestions: [], // <- array of suggestions, displayed at the start screen
    fallback_lang: 'en', // <- fallback language code, if history mode or network is unavailable
    voice: 'native', // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
    codecs: { // <- tells browser the mime types of audio in Dialogflow
        OUTPUT_AUDIO_ENCODING_UNSPECIFIED: 'audio/wav',
        OUTPUT_AUDIO_ENCODING_LINEAR_16: 'audio/wav',
        OUTPUT_AUDIO_ENCODING_MP3: 'audio/mpeg',
        OUTPUT_AUDIO_ENCODING_OGG_OPUS: 'audio/ogg'
    }
}
