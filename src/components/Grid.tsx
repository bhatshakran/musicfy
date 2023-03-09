import Card from './Card';

const Grid = ({ tracks, nested = false, type, more = false }: any) => {
  if (type === 'playlists') {
    tracks.map((el: any) => console.log(el));
  }
  function conditionalRender() {
    if (type === 'playlists') {
      return tracks.map((playlist: any, id: number) => {
        return <Card data={playlist} key={id} type={type} />;
      });
    } else {
      return tracks.map((track: any, id: number) => {
        if (!more) {
          if (id < 7) {
            if (nested)
              return <Card key={track.track.key} data={track.track} />;
            else return <Card key={id} data={track} />;
          } else return null;
        } else {
          if (nested) return <Card key={track.track.key} data={track.track} />;
          else return <Card key={id} data={track} />;
        }
      });
    }
  }

  return (
    <div className=' py-4 px-5 w-100 '>
      <div className='row row-cols-6  justify-content-center justify-content-lg-start align-items-start gap-2 w-100'>
        {conditionalRender()}
      </div>
    </div>
  );
};

export default Grid;
