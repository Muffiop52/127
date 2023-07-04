song_1 = "";
song_2 = "";

function preload()
{
          song_1 = loadSound(Fark_nai_padta.mp3);
          song_2 = loadSound(Sab_farzi.mp3);
}

function setup()
{
          canvas = createCanvas(600,500);
          canvas.center();

          video = createCapture(VIDEO);
          video.hide();
}

function draw()
{
          Image(video,0,0,600,500);
}