(function () {
	const imgPath = "/assets/images/album-thumbs/";
	const audioPath = "https://olafur-arnalds.s3-eu-west-1.amazonaws.com/audio/";
	const playerEl = { jPlayer: "#audio-player", cssSelectorAncestor: ".audio-player" };
	const playlist = [
		{
			'title' : 'Unfold',
			'album' : "re:member",
			'mp3': audioPath + 'unfold.mp3',
			'poster': imgPath + 'remember.jpg'
		},
		{
			'title' : '3055',
			'album' : "Eulogy for Evolution 2017",
			'mp3': audioPath + '3055-2017.mp3',
			'poster': imgPath + 'efe_2017.jpg'
		},
		{
			'title' : 'Doria',
			'album' : 'Island Songs',
			'mp3': audioPath + 'doria.mp3',
			'poster': imgPath + 'island_songs.jpg'
		},
		{
			'title' : 'For Now I am Winter',
			'album' : 'For Now I am Winter',
			'mp3': audioPath + 'fniaw.mp3',
			'poster': imgPath + 'fniaw.jpg'
		},
		{
			'title' : 'Only The Winds',
			'album' : 'For Now I am Winter',
			'mp3': audioPath + 'only-the-winds.mp3',
			'poster': imgPath + 'fniaw.jpg'
		},
		{
			'title' : 'Old Skin',
			'album' : 'For Now I am Winter',
			'mp3': audioPath + 'old-skin.mp3',
			'poster': imgPath + 'fniaw.jpg'
		},
		{
			'title' : 'This Place Was a Shelter',
			'album' : 'For Now I am Winter',
			'mp3': audioPath + 'this-place-was-a-shelter.mp3',
			'poster': imgPath + 'fniaw.jpg'
		},
		{
			'title' : 'Fyrsta',
			'album' : 'Living Room Songs',
			'mp3': audioPath + 'fyrsta.mp3',
			'poster': imgPath + 'lrs.jpg'
		},
		{
			'title' : 'Near Light',
			'album' : 'Living Room Songs',
			'mp3': audioPath + 'near-light.mp3',
			'poster': imgPath + 'lrs.jpg'
		},
		{
			'title' : 'Þú Ert Sólin',
			'album' : '...And They Have Escaped the Weight of Darkness',
			'mp3': audioPath + 'thu-ert-solin.mp3',
			'poster': imgPath + 'athewd.jpg'
		},
		{
			'title' : 'Hægt, Kemur Ljósið',
			'album' : '...And They Have Escaped the Weight of Darkness',
			'mp3': audioPath + 'haegt-kemur-ljosid.mp3',
			'poster': imgPath + 'athewd.jpg'
		},
		{
			'title' : 'Allt Varð Hljótt',
			'album' : 'Found Songs',
			'mp3': audioPath + 'allt-vard-hljott.mp3',
			'poster': imgPath + 'fs.jpg'
		},
		{
			'title' : 'Ljósið',
			'album' : 'Found Songs',
			'mp3': audioPath + 'ljosid.mp3',
			'poster': imgPath + 'fs.jpg'
		},
		{
			'title' : 'Fok',
			'album' : 'Variations of Static',
			'mp3': audioPath + 'fok.mp3',
			'poster': imgPath + 'vos.jpg'
    },
    {
      'title' : '3055',
      'album' : "Eulogy for Evolution",
      'mp3': audioPath + '3055.mp3',
      'poster': imgPath + 'efe.jpg'
    },
		{
			'title' : 'Blurred',
			'album' : 'Blurred',
			'mp3': audioPath + 'blurred.mp3',
			'poster': imgPath + 'blurred.jpg'
		},
		{
			'title' : '20:17',
			'album' : 'Trance Friendz',
			'mp3': audioPath + '20_17.mp3',
			'poster': imgPath + 'trance_frendz.jpg'
		},
		{
			'title' : 'Verses',
			'album' : 'The Chopin Project',
			'mp3': audioPath + 'verses.mp3',
			'poster': imgPath + 'tcp.jpg'
		},
		{
			'title' : 'Reminiscence',
			'album' :  'The Chopin Project',
			'mp3': audioPath + 'reminiscence.mp3',
			'poster': imgPath + 'tcp.jpg'
		},
		{
			'title' : 'Life Story',
			'album' : 'Life Story Love and Glory',
			'mp3': audioPath + 'life-story.mp3',
			'poster': imgPath + 'lslg.jpg'
		},
		{
			'title' : 'Four',
			'album' : 'Loon',
			'mp3': audioPath + 'four.mp3',
			'poster': imgPath + 'loon.jpg'
		},
		{
			'title' : 'Held',
			'album' : 'Kiasmos',
			'mp3': audioPath + 'held.mp3',
			'poster': imgPath + 'kiasmos.jpg'
		},
		{
			'title' : 'Burnt',
			'album' : 'Kiasmos',
			'mp3': audioPath + 'burnt.mp3',
			'poster': imgPath + 'kiasmos.jpg'
		},
		{
			'title' : 'A2',
			'album' : 'Stare',
			'mp3': audioPath + 'a2.mp3',
			'poster': imgPath + 'stare.jpg'
		},
		{
			'title' : 'Take My Leave of You (feat. Arnor Dan)',
			'album' : 'Broadchurch - The Final Chapter',
			'mp3': audioPath + 'take-my-leave-of-you.mp3',
			'poster': imgPath + 'bfc.jpg'
		},
		{
			'title' : 'So Close',
			'album' : 'Broadchurch',
			'mp3': audioPath + 'so-close.mp3',
			'poster': imgPath + 'broadchurch.jpg'
		},
		{
			'title' : 'So Far',
			'album' : 'Broadchurch',
			'mp3': audioPath + 'so-far.mp3',
			'poster': imgPath + 'broadchurch.jpg'
		},
		{
			'title' : 'Beth’s Theme',
			'album' : 'Broadchurch',
			'mp3': audioPath + 'beths-theme.mp3',
			'poster': imgPath + 'broadchurch.jpg'
		},
		{
			'title' : 'The Apple of my Eye',
			'album' : 'Gimme Shelter OST',
			'mp3': audioPath + 'apple-of-my-eye.mp3',
			'poster': imgPath + 'gs.jpg'
		},
		{
			'title' : 'Someday',
			'album' : 'Gimme Shelter OST',
			'mp3': audioPath + 'someday.mp3',
			'poster': imgPath + 'gs.jpg'
		},
		{
			'title' : 'Lynn’s Theme',
			'album' : 'Another Happy Day OST',
			'mp3': audioPath + 'lynns-theme.mp3',
			'poster': imgPath + 'ahd.jpg'
		},
		{
			'title' : 'Poland',
			'album' : 'Another Happy Day OST',
			'mp3': audioPath + 'poland.mp3',
			'poster': imgPath + 'ahd.jpg'
		},
		{
			'title' : 'Brotsjór',
			'album' : 'Dyad 1909',
			'mp3': audioPath + 'brotsjor.mp3',
			'poster': imgPath + 'dyad.jpg'
		},
		{
			'title' : 'Og lengra',
			'album' : 'Dyad 1909',
			'mp3': audioPath + 'og-lengra.mp3',
			'poster': imgPath + 'dyad.jpg'
		}

	];

	const options = {
		swfPath: audioPath,
		supplied: "mp3",
		loop: true,
		playlistOptions: {loopOnPrevious: true},
		useStateClassSkin: true,
		autoBlur: false,
		smoothPlayBar: true,
		keyEnabled: true
	};

	const mediaPlayer = new jPlayerPlaylist(playerEl, playlist, options);

	// check which track is playing & update button 
	$(playerEl.jPlayer).on($.jPlayer.event.playing, function() {
		if (!mediaPlayer && !mediaPlayer.current) {
			return;
		}

		$('.works-playlist__play-button').removeClass('active');
		$('.works-playlist__play-button').eq(mediaPlayer.current).addClass('active');
		
	});

		$(playerEl.jPlayer).on($.jPlayer.event.pause, function() {
		if (!mediaPlayer && !mediaPlayer.current) {
			return;
		}

		$('.works-playlist__play-button').removeClass('active');
		
	});


	$('.works-playlist__play-button').on('click', function() {
		
		// get index of all play buttons
		const i = $('.works-playlist__play-button').index(this);

		if ($(this).hasClass('active')) {
			mediaPlayer.pause();
			$(this).removeClass('active');
		} else {
			mediaPlayer.current === i ? mediaPlayer.play() : mediaPlayer.play(i);
		}

		$('.audio-player').addClass('active');
	})

	$('.audio-player__close').on('click', function() {
		$('.audio-player').removeClass('active');
		mediaPlayer.pause();
	});

	Draggable.create('.jp-audio', {
		bounds: document.querySelector('.main-app'),
	});

})();