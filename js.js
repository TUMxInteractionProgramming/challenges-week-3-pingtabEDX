
console.log("App is alive");


function switchChannel(channelName) {

    console.log("Tuning in to channel", channelName);
    document.getElementById('channel-name').innerHTML = channelName;
    document.getElementById('channel-location').innerHTML = 'by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>';
    $('#channel-star').attr('src', 'img/star-o.png');
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName + ')').addClass('selected');
}

function star() {
    $('#channel-star').attr('src', 'img/star.png');
}

function selectTab(tabId) {
    $('#tab-bar button').removeClass('selected');
    console.log('Changing to tab', tabId);
    $(tabId).addClass('selected');
}


function toggleEmojis() {

    $('#emojis').toggle(); 
}
