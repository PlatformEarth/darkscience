function homepageHeights(){

	var windowHeight = jQuery(window).height(),
		headerHeight = jQuery(".homepage #header-wrapper .wrapper-fixed").height(),
		headerPadding = (windowHeight - headerHeight) / 2;

	jQuery(".homepage #header-wrapper, .homepage #video-wrapper, .homepage #node-map-wrapper, #video-embed .iframe-wrapper iframe").css("height", windowHeight);	

	jQuery(".homepage #header-wrapper-inner")
		.css("padding-top", headerPadding)
		.css("padding-bottom", headerPadding);	

}

function initVideo(){

	jQuery("#video-wrapper-play").each(function(){
		jQuery(this).click(function(){
			jQuery("#video-wrapper #video-embed").css("display","block");
			jQuery("#video-wrapper").css("background-image","none");
			jQuery("#video-wrapper-play, #video-wrapper > img").css("display","none");
			jQuery("#video-embed iframe").attr("src","https://player.vimeo.com/video/342290292?title=0&byline=0&portrait=0&autoplay=1");
		});
	});

}

function homepageScroll(){

	jQuery(".section-next").each(function(){
		jQuery(this).click(function(){

			var thisTarget = jQuery(this).attr("data-target");

			if(thisTarget === '#node-map-wrapper'){
				jQuery("#video-embed iframe").attr("src","https://player.vimeo.com/video/342290292?title=0&byline=0&portrait=0&autoplay=0");
			}

			jQuery('html, body').animate({
		        scrollTop: jQuery(thisTarget).offset().top
		    }, 1000);

		});
	});

}

function initMap(){

	var map = L.map('map').setView([30, 30], 3);

	map.scrollWheelZoom.disable();
    
    var gl = L.mapboxGL({
        attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        accessToken: 'not-needed',
        style: 'https://api.maptiler.com/maps/positron/style.json?key=OrAV11LkyLYnd61RnuAW'
    }).addTo(map);

    var thisIcon = new L.Icon({
	    iconUrl: 'http://staging.oaklandcreative.co.uk/DarkScience/img/icon-radio.png',
	    iconAnchor: new L.Point(16, 16),
	});

    L.marker([51.5253691, -0.2173256], {icon: thisIcon, title: 'SPID Theatre'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/spid-theatre/') });
    L.marker([16.974952, 95.970126], {icon: thisIcon, title: 'Khayae FM 104.8 MHz'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/khayae-fm-104-8-mhz/') });
    L.marker([16.9037733, 96.0294235], {icon: thisIcon, title: 'BBC MA Myanmar'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/bbc-ma-myanmar/') });
    L.marker([51.6259922, -0.7750664], {icon: thisIcon,title: 'Awaaz Radio'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/awaaz-radio/') });
    L.marker([51.5432598, -0.1539611], {icon: thisIcon, title: 'Roundhouse Radio'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/roundhouse-radio/') });
    L.marker([6.5810543, 10.6759212], {icon: thisIcon, title: 'Millennium TV'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/millenium-tv/') });
    L.marker([6.17776928, 31.53121012], {icon: thisIcon, title: 'Radio Mingkaman'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/radio-mingkaman/') });
    L.marker([3.734957, 115.479278], {icon: thisIcon, title: 'Radio Bario'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/radio-bario/') });
    L.marker([-24.297154, 28.115194], {icon: thisIcon, title: 'Waterberg Waves'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/waterberg-waves/') });
    L.marker([6.224485, 10.675977], {icon: thisIcon, title: 'Bui Community Radio'}).addTo(map).on('click', function(){ window.open('https://radioactive.org.uk/projects/bui-community-radio/') });

    L.marker([33.7232536, -95.3318325], {icon: thisIcon, title: 'Example 1'}).addTo(map).on('click', function(){ window.open('https://google.com') });
    L.marker([38.0872678,-79.5214502], {icon: thisIcon, title: 'Example 2'}).addTo(map).on('click', function(){ window.open('https://google.com') });
 
    // L.marker([0, 0], {icon: thisIcon, title: ''}).addTo(map).on('click', function(){ window.open('') });
    

}

function responsiveVimeo(){

	jQuery("#page-content iframe").each(function(){
		jQuery(this).wrap('<div class="iframe-wrapper"></div>');
	});

}

jQuery(document).ready(function(){

	homepageHeights();
	initVideo();
	homepageScroll();
	responsiveVimeo();

});

jQuery(window).load(function(){

	homepageHeights();
	initMap();

	jQuery(window).resize(function(){
		homepageHeights();
	});

});