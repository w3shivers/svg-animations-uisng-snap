var floor_shadow_group = Snap.select( '#svg-group-floorShadow' );
var floor_group = Snap.select( '#svg-group-floor' );
var wall_group = Snap.select( '#svg-group-wall' );
var lamp_marker_group = Snap.select( '#svg-group-lampMarker' );
var couch_marker_group = Snap.select( '#svg-group-couchMarker' );
var foot_stool_marker_group = Snap.select( '#svg-group-footStoolMarker' );
var tv_unit_marker_group = Snap.select( '#svg-group-tvUnitMarker' );
var bottom_speaker_marker_group = Snap.select( '#svg-group-bottomSpeakerMarker' );
var foot_stool_group = Snap.select( '#svg-group-footStool' );
var tv_unit_group = Snap.select( '#svg-group-tvUnit' );
var tv_group = Snap.select( '#svg-group-tv' );
var top_speaker_group = Snap.select( '#svg-group-topSpeaker' );
var bottom_speaker_group = Snap.select( '#svg-group-bottomSpeaker' );
var paintings_group = Snap.select( '#svg-group-paintings' );
var couch_group = Snap.select( '#svg-group-couch' );
var lamp_group = Snap.select( '#svg-group-lamp' );
var top_speaker_marker_group = Snap.select( '#svg-group-topSpeakerMarker' );
var paintings_marker_group = Snap.select( '#svg-group-paintingsMarker' );
var tv_marker_group = Snap.select( '#svg-group-tvMarker' );
var human_group = Snap.select( '#svg-group-human' );
var top_speaker_pop_out_group = Snap.select( '#svg-group-topSpeakerPopOut' );
var paintings_pop_out_group = Snap.select( '#svg-group-paintingsPopOut' );
var foot_stool_pop_out_group = Snap.select( '#svg-group-footStoolPopOut' );
var bottom_speaker_pop_out_group = Snap.select( '#svg-group-bottomSpeakerPopOut' );
var tv_pop_out_group = Snap.select( '#svg-group-tvPopOut' );
var screen_group = Snap.select( '#svg-group-screen' );
var plant_marker_group = Snap.select( '#svg-group-plantMarker' );
var plant_group = Snap.select( '#svg-group-plant' );

function startAnimation() {
    floor_group.attr({ transform: 't0, 30' });
    floor_shadow_group.animate( { opacity: 0.5 }, 1000 );
    floor_group.animate( { opacity: 1, transform: 't0, 0' }, 800 );
    setTimeout( function() {
        wall_group.animate({opacity:1}, 1000);
        // Lamp
        setTimeout( function() {
            lamp_group.attr({ transform: 'matrix(0, 0, 0, 0, 445, 285)', opacity: 1 });
            lamp_marker_group.animate( { opacity: 1 } , 300, function() {
                lamp_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    lamp_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 300 );
        //COUCH
        setTimeout( function() {
            couch_group.attr({ transform: 'matrix(0, 0, 0, 0, 330, 230)', opacity: 1 });
            couch_marker_group.animate( { opacity: 1 }, 300, function() {
                couch_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    couch_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 600 );
        //FOOT STOOL
        setTimeout( function() {

            foot_stool_group.attr({ transform: 'matrix(0, 0, 0, 0, 280, 360)', opacity: 1 });
            foot_stool_marker_group.animate( { opacity: 1 }, 300, function() {
                foot_stool_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    foot_stool_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 900 );
        //TV UNIT
        setTimeout( function() {
            tv_unit_group.attr({ transform: 'matrix(0, 0, 0, 0, 170, 215)', opacity: 1 });
            tv_unit_marker_group.animate( { opacity: 1 }, 300, function() {
                tv_unit_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    tv_unit_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 1200 );
        //TV UNIT
        setTimeout( function() {
            tv_unit_group.attr({ transform: 'matrix(0, 0, 0, 0, 170, 215)', opacity: 1 });
            tv_unit_marker_group.animate( { opacity: 1 }, 300, function() {
                tv_unit_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    tv_unit_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 1500 );
        //BOTTOM SPEAKER
        setTimeout( function() {
            bottom_speaker_group.attr({ transform: 'matrix(0, 0, 0, 0, 150, 330)', opacity: 1 });
            bottom_speaker_marker_group.animate({ opacity: 1 }, 300, function() {
                bottom_speaker_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    bottom_speaker_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );

            });
        }, 1800 );
        //TOP SPEAKER
        setTimeout( function() {    
            top_speaker_group.attr({ transform: 'matrix(0, 0, 0, 0, 225, 170)', opacity: 1 });
            top_speaker_marker_group.animate( {opacity: 1 }, 300, function() {
                top_speaker_group.animate( { transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce );
                setTimeout( function() {
                    top_speaker_marker_group.animate( { opacity: 0 }, 300 );
                }, 1500 );
            });
        }, 2100 );
        //PAINTINGS
        setTimeout(function() {

        paintings_group.attr({transform: 'matrix(0, 0, 0, 0, 370, 120)', opacity:1});

        paintings_marker_group.animate({opacity:1}, 300, function(){

            paintings_group.animate({ transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce);

            setTimeout(function() {
            paintings_marker_group.animate({opacity:0}, 300);
            }, 1500);

        });
        }, 2400);

        //TV
        setTimeout(function() {

        tv_group.attr({transform: 'matrix(0, 0, 0, 0, 150, 180)', opacity:1});

        tv_marker_group.animate({opacity:1}, 300, function(){

            tv_group.animate({ transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce);

            setTimeout(function() {
            tv_marker_group.animate({opacity:0}, 300);
            }, 1500);

        });
        }, 2700);

        //TV
        setTimeout(function() {

        plant_group.attr({transform: 'matrix(0, 0, 0, 0, 65, 285)', opacity:1});

        plant_marker_group.animate({opacity:1}, 300, function(){

            plant_group.animate({ transform: 'matrix(1, 0, 0, 1, 0, 0)' }, 800, mina.bounce);

            setTimeout(function() {
            plant_marker_group.animate({opacity:0}, 300);
            repeatMarkerPopOut();
            }, 1500);

        });
        }, 3000);

        //HUMAN
        setTimeout(function() {
        human_group.animate({opacity:1}, 1500, mina.bounce);
        }, 3300);

        //SCREEN
        setTimeout(function() {
        screen_group.attr({transform: 'matrix(0, 0, 0, 0, 255, 205)', opacity:0});

        screen_group.animate({transform: 'matrix(1, 0, 0, 1, 0, 0)', opacity:1}, 1500, mina.bounce);

        setTimeout(function() {
            repeatColorChange();
        }, 1500);

        }, 4800);

    }, 800);
}

function repeatMarkerPopOut(){

  //TOP SPEAKER
  setTimeout(function() {

    top_speaker_marker_group.animate({opacity:1}, 300, function(){
      top_speaker_pop_out_group.animate({opacity:1}, 800, mina.bouce);
    });
    setTimeout(function() {
      top_speaker_pop_out_group.animate({opacity:0}, 800, function (){
        top_speaker_marker_group.animate({opacity:0}, 300);
      });
    }, 2600);

  }, 1);

  //PAINTINGS
  setTimeout(function() {

    paintings_marker_group.animate({opacity:1}, 300, function(){
      paintings_pop_out_group.animate({opacity:1}, 800, mina.bouce);
    });
    setTimeout(function() {
      paintings_pop_out_group.animate({opacity:0}, 800, function (){
        paintings_marker_group.animate({opacity:0}, 300);
      });
    }, 2600);

  }, 5001);

  //FOOT STOOL
  setTimeout(function() {

    foot_stool_marker_group.animate({opacity:1}, 300, function(){
      foot_stool_pop_out_group.animate({opacity:1}, 800, mina.bouce);
    });
    setTimeout(function() {
      foot_stool_pop_out_group.animate({opacity:0}, 800, function (){
        foot_stool_marker_group.animate({opacity:0}, 300);
      });
    }, 2600);

  }, 10001);

  //BOTTOM SPEAKER
  setTimeout(function() {

    bottom_speaker_marker_group.animate({opacity:1}, 300, function(){
      bottom_speaker_pop_out_group.animate({opacity:1}, 800, mina.bouce);
    });
    setTimeout(function() {
      bottom_speaker_pop_out_group.animate({opacity:0}, 800, function (){
        bottom_speaker_marker_group.animate({opacity:0}, 300);
      });
    }, 2600);

  }, 15001);

  //TV
  setTimeout(function() {

    tv_marker_group.animate({opacity:1}, 300, function(){
      tv_pop_out_group.animate({opacity:1}, 800, mina.bouce);
    });
    setTimeout(function() {
      tv_pop_out_group.animate({opacity:0}, 800, function (){
        tv_marker_group.animate({opacity:0}, 300);
      });
    }, 2600);

  }, 20001);

  //REPEAT
  setTimeout(function() {
    repeatMarkerPopOut();
  }, 25001);
}

//FOOT STOOL COLORS
var FS_light = Snap.select('#FS_light');
var FS_dark = Snap.select('#FS_dark');
var FS_medium = Snap.select('#FS_medium');

//TV UNIT COLORS
var TU_light_1 = Snap.select('#TU_light_1');
var TU_light_2 = Snap.select('#TU_light_2');
var TU_dark_1 = Snap.select('#TU_dark_1');
var TU_dark_2 = Snap.select('#TU_dark_2');
var TU_dark_3 = Snap.select('#TU_dark_3');
var TU_dark_4 = Snap.select('#TU_dark_4');
var TU_dark_5 = Snap.select('#TU_dark_5');
var TU_dark_6 = Snap.select('#TU_dark_6');
var TU_medium_1 = Snap.select('#TU_medium_1');
var TU_medium_2 = Snap.select('#TU_medium_2');
var TU_medium_3 = Snap.select('#TU_medium_3');

//COUCH COLORS
var C_light_1 = Snap.select('#C_light_1');
var C_light_2 = Snap.select('#C_light_2');
var C_light_3 = Snap.select('#C_light_3');
var C_light_4 = Snap.select('#C_light_4');
var C_light_5 = Snap.select('#C_light_5');
var C_dark_1 = Snap.select('#C_dark_1');
var C_dark_2 = Snap.select('#C_dark_2');
var C_dark_3 = Snap.select('#C_dark_3');
var C_dark_4 = Snap.select('#C_dark_4');
var C_dark_5 = Snap.select('#C_dark_5');
var C_medium_1 = Snap.select('#C_medium_1');
var C_medium_2 = Snap.select('#C_medium_2');
var C_medium_3 = Snap.select('#C_medium_3');
var C_medium_4 = Snap.select('#C_medium_4');

function repeatColorChange(){
  //BROWN
  setTimeout(function() {
    //FOOT STOOL
    FS_light.animate({fill: '#D0825A'}, 400);
    FS_dark.animate({fill: '#BB6A4F'}, 400);
    FS_medium.animate({fill: '#c47257'}, 400);

    //TV UNIT
    TU_light_1.animate({fill: '#D0825A'}, 400);
    TU_light_2.animate({fill: '#D0825A'}, 400);
    TU_dark_1.animate({fill: '#BB6A4F'}, 400);
    TU_dark_2.animate({fill: '#BB6A4F'}, 400);
    TU_dark_3.animate({fill: '#BB6A4F'}, 400);
    TU_dark_4.animate({fill: '#BB6A4F'}, 400);
    TU_dark_5.animate({fill: '#BB6A4F'}, 400);
    TU_dark_6.animate({fill: '#BB6A4F'}, 400);
    TU_medium_1.animate({fill: '#c47257'}, 400);
    TU_medium_2.animate({fill: '#c47257'}, 400);
    TU_medium_3.animate({fill: '#c47257'}, 400);

    //COUCH
    C_light_1.animate({fill: '#D0825A'}, 400);
    C_light_2.animate({fill: '#D0825A'}, 400);
    C_light_3.animate({fill: '#D0825A'}, 400);
    C_light_4.animate({fill: '#D0825A'}, 400);
    C_light_5.animate({fill: '#D0825A'}, 400);
    C_dark_1.animate({fill: '#BB6A4F'}, 400);
    C_dark_2.animate({fill: '#BB6A4F'}, 400);
    C_dark_3.animate({fill: '#BB6A4F'}, 400);
    C_dark_4.animate({fill: '#BB6A4F'}, 400);
    C_dark_5.animate({fill: '#BB6A4F'}, 400);
    C_medium_1.animate({fill: '#c47257'}, 400);
    C_medium_2.animate({fill: '#c47257'}, 400);
    C_medium_3.animate({fill: '#c47257'}, 400);
    C_medium_4.animate({fill: '#c47257'}, 400);
  },1);

  //BLACK
  setTimeout(function() {
    //FOOT STOOL
    FS_light.animate({fill: '#44403F'}, 400);
    FS_dark.animate({fill: '#383534'}, 400);
    FS_medium.animate({fill: '#413d3c'}, 400);

    //TV UNIT
    TU_light_1.animate({fill: '#44403F'}, 400);
    TU_light_2.animate({fill: '#44403F'}, 400);
    TU_dark_1.animate({fill: '#383534'}, 400);
    TU_dark_2.animate({fill: '#383534'}, 400);
    TU_dark_3.animate({fill: '#383534'}, 400);
    TU_dark_4.animate({fill: '#383534'}, 400);
    TU_dark_5.animate({fill: '#383534'}, 400);
    TU_dark_6.animate({fill: '#383534'}, 400);
    TU_medium_1.animate({fill: '#413d3c'}, 400);
    TU_medium_2.animate({fill: '#413d3c'}, 400);
    TU_medium_3.animate({fill: '#413d3c'}, 400);

    //COUCH
    C_light_1.animate({fill: '#44403F'}, 400);
    C_light_2.animate({fill: '#44403F'}, 400);
    C_light_3.animate({fill: '#44403F'}, 400);
    C_light_4.animate({fill: '#44403F'}, 400);
    C_light_5.animate({fill: '#44403F'}, 400);
    C_dark_1.animate({fill: '#383534'}, 400);
    C_dark_2.animate({fill: '#383534'}, 400);
    C_dark_3.animate({fill: '#383534'}, 400);
    C_dark_4.animate({fill: '#383534'}, 400);
    C_dark_5.animate({fill: '#383534'}, 400);
    C_medium_1.animate({fill: '#413d3c'}, 400);
    C_medium_2.animate({fill: '#413d3c'}, 400);
    C_medium_3.animate({fill: '#413d3c'}, 400);
    C_medium_4.animate({fill: '#413d3c'}, 400);
  },5001);

  //WHITE
  setTimeout(function() {
    //FOOT STOOL
    FS_light.animate({fill: '#FFFBE9'}, 400);
    FS_dark.animate({fill: '#CFC4A7'}, 400);
    FS_medium.animate({fill: '#E0DBC3'}, 400);

    //TV UNIT
    TU_light_1.animate({fill: '#FFFBE9'}, 400);
    TU_light_2.animate({fill: '#FFFBE9'}, 400);
    TU_dark_1.animate({fill: '#CFC4A7'}, 400);
    TU_dark_2.animate({fill: '#CFC4A7'}, 400);
    TU_dark_3.animate({fill: '#CFC4A7'}, 400);
    TU_dark_4.animate({fill: '#CFC4A7'}, 400);
    TU_dark_5.animate({fill: '#CFC4A7'}, 400);
    TU_dark_6.animate({fill: '#CFC4A7'}, 400);
    TU_medium_1.animate({fill: '#E0DBC3'}, 400);
    TU_medium_2.animate({fill: '#E0DBC3'}, 400);
    TU_medium_3.animate({fill: '#E0DBC3'}, 400);

    //COUCH
    C_light_1.animate({fill: '#FFFBE9'}, 400);
    C_light_2.animate({fill: '#FFFBE9'}, 400);
    C_light_3.animate({fill: '#FFFBE9'}, 400);
    C_light_4.animate({fill: '#FFFBE9'}, 400);
    C_light_5.animate({fill: '#FFFBE9'}, 400);
    C_dark_1.animate({fill: '#CFC4A7'}, 400);
    C_dark_2.animate({fill: '#CFC4A7'}, 400);
    C_dark_3.animate({fill: '#CFC4A7'}, 400);
    C_dark_4.animate({fill: '#CFC4A7'}, 400);
    C_dark_5.animate({fill: '#CFC4A7'}, 400);
    C_medium_1.animate({fill: '#E0DBC3'}, 400);
    C_medium_2.animate({fill: '#E0DBC3'}, 400);
    C_medium_3.animate({fill: '#E0DBC3'}, 400);
    C_medium_4.animate({fill: '#E0DBC3'}, 400);
  },10001);

  //REPEAT
  setTimeout(function() {
    repeatColorChange();
  }, 15001);
}