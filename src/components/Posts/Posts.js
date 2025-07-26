import Post from "../Post/Post";
import "./Posts.css";

const postsList = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg",
    title: "Snowy Mountains",
    desc: `The crisp mountain air fills your lungs as you gaze upon endless snow-covered trees.
A gentle breeze carries the scent of pine and fresh snow.
The landscape is quiet, untouched, and breathtakingly serene.
Perfect for winter hiking or just escaping the chaos of city life.
A postcard-perfect moment captured in real life.`
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/358574/pexels-photo-358574.jpeg",
    title: "City Lights",
    desc: `The city never sleeps — neon signs flicker and reflect on wet pavements.
Skyscrapers glow like digital towers in the night.
Buzzing streets are filled with life, music, and endless energy.
You can feel stories unfolding at every corner.
A modern jungle that pulses with creativity and dreams.`
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/34950/pexels-photo.jpg",
    title: "Beach Vibes",
    desc: `Golden sand warms your feet as waves kiss the shore.
Seagulls call overhead while children play and laugh.
Palm trees sway to the rhythm of the wind.
Time seems to pause under the sun’s golden rays.
The perfect escape from a busy life.`
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/709552/pexels-photo-709552.jpeg",
    title: "Books & Coffee",
    desc: `A vintage armchair, a warm latte, and a stack of worn books await.
The smell of coffee and paper fills the air.
Each page turns into an adventure as rain taps gently on the window.
It’s the perfect spot for thinkers and dreamers alike.
Unwind, unplug, and lose yourself in a story.`
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg",
    title: "Creative Workspace",
    desc: `An organized desk sparks a day full of productivity.
Sketches, sticky notes, and coffee fuel the imagination.
Natural light pours in, casting inspiration on every surface.
Tech meets art in a space designed for thinkers.
Where ideas are born, refined, and brought to life.`
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1704120/pexels-photo-1704120.jpeg",
    title: "Forest Walk",
    desc: `The soft crunch of leaves underfoot marks your path forward.
Tall trees stretch toward the sky like nature’s cathedral.
Filtered sunlight dances across the trail ahead.
Birdsong surrounds you with peace and calm.
Every step brings a breath of fresh clarity.`
  }
];


export default function Posts() {
  return (
    <div className="posts">
      {postsList.map(post => (
        <Post key={post.id} img={post.img} title={post.title} desc={post.desc} />
      ))}
    </div>
  );
}
