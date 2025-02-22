import { useEffect, useState } from "react";
import '../assets/styles/album.css';
const Albums = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const url = 'https://spotify23.p.rapidapi.com/browse_all/';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '1e0dfa81c4msh42df3c008404da0p106772jsne52629fd5bb4',
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
      }
    };

    const getMusic = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        // console.log(result.data.browseStart.sections.items[0].sectionItems.items.content.data.data.cardRepresentation.artwork.sources[0].url);
        setData(result.data.browseStart.sections.items[0].sectionItems.items);
      } catch (error) {
        console.log(error);
      }
    }
    getMusic();
  }, [])

  return (
    <div>
      <h1>Albums</h1>
      <div className="audio-album">
        {!data? 'Loading...' : data.map((item, index) => {
          return (
            <img key={index} src={item.content.data.data?.cardRepresentation.artwork.sources[0].url} alt="music" />
          )
        })}
      </div>
    </div>
  );
}

export default Albums;
