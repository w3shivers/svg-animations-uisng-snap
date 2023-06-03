var phone_group = Snap.select( "#phone_group" );
var pink_chat_group = Snap.select( "#pink_chat_group" );
var aqua_chat_group = Snap.select( "#aqua_chat_group" );
var yellow_chat_group = Snap.select( "#yellow_chat_group" );
var hover_bot_group = Snap.select( "#hover_bot_group" );
var bot_icon = Snap.select( "#bot_icon" );
var bot_flames = Snap.select( "#bot_flames" );
var phone_chats = Snap.select( "#phone_chats" );

function startAnimation() {
    phone_group.animate( { opacity: 1 }, 1200 );
    getBotIcon();
}

function getBotIcon() {
    bot_icon.animate( { opacity: 1 }, 1000, flickerBotIcon() );	 
}

function flickerBotIcon( x = 1 ) {
    let is_odd = x % 2;
    let value = ( is_odd ) ? 0.3 : 1;
    bot_icon.animate( { opacity: value }, 800, mina.bounce );
    if ( x < 8 ) {
        setTimeout( function() {
            flickerBotIcon( x );
        },1000 );
    }
    if ( x == 3 ) {
        hover_bot_group.attr( { transform: "matrix(0, 0, 0, 0, 170, 430)", opacity: 1 } );
        getHoverBot();
    }
    x++;
}

function getHoverBot() {
    hover_bot_group.animate( { transform: "matrix(1, 0, 0, 1, 0, 0)" }, 1000 );
    setTimeout( function() {
        animateHoverBot();
        getPhoneChats();	
    }, 1000 );
}

function animateHoverBot( count = 1 ){
    let is_odd = count % 2;
    if ( is_odd ) {
        bot_flames.animate( { opacity: 0.3 }, 800, mina.bounce );
        hover_bot_group.animate( { transform: "t0, 10" }, 800 );	
    } else {
        bot_flames.animate( { opacity: 1 }, 800, mina.bounce );
        hover_bot_group.animate( { transform: "t0, 0" }, 800 );
    }
    count++;
    setTimeout( function() {
        animateHoverBot( count );
    }, 1000 );
}

function getPhoneChats() {
    phone_chats.animate( { opacity: 1 }, 1200, pinkChat() );
}

function pinkChat() {
    pink_chat_group.attr( { opacity: 0, transform: "matrix(0.7, 0.1, 0.2, 0.7, -45, 30)" } );
    setTimeout( function() {
        pink_chat_group.animate( { opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }, 800, aquaChat() );
    }, 2000 );
}

function aquaChat() {
    aqua_chat_group.attr( { opacity: 0, transform: "matrix(0.6, 0.1, 0.2, 0.6, -115, 120)" } );
    setTimeout( function() {
        aqua_chat_group.animate( { opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }, 800, yellowChat() );
    }, 1000 );
}

function yellowChat() {
    yellow_chat_group.attr( { opacity: 0, transform: "matrix(0.7, 0.02, 0.17, 0.7, -95, 130)" } );
    setTimeout( function() {
        yellow_chat_group.animate( { opacity: 1, transform: "matrix(1, 0, 0, 1, 0, 0)" }, 800 );
        setTimeout( function() {
            destroyChats();
        }, 2000 );
    }, 1500 );
}

function destroyChats() {
    phone_chats.animate( { opacity: 0 }, 1000);
    pink_chat_group.animate( { opacity: 0, transform: "t0, 100" }, 800 );
    aqua_chat_group.animate( { opacity: 0, transform: "t0, 100" }, 1300 );
    yellow_chat_group.animate( { opacity: 0, transform: "t0, 100" }, 1000 );
    setTimeout( function() {
        getPhoneChats();
    }, 2200 );
}