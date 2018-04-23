require.config({
    // baseUrl: './js/comment',
    paths: {
        'jq': './lib/jquery-1.8.3.min',
        'hand': './lib/handlebars-v4.0.11',
        'tab': './comment/main'
    }
})

require(['tab'], function(tab1) {
    tab1.newA();
})