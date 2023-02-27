import Card from './Card';

const Grid = ({ tracks, nested = false, type }: any) => {
  function conditionalRender() {
    if (type === 'favourites') {
      return tracks.map((track: any, id: number) => {
        if (id < 7) {
          if (nested) return <Card key={track.track.key} data={track.track} />;
          else return <Card key={id} data={track} />;
        } else return null;
      });
    } else {
      return tracks.map((track: any, id: number) => {
        if (id < 7) {
          if (nested) return <Card key={track.track.key} data={track.track} />;
          else return <Card key={id} data={track} />;
        } else return null;
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
