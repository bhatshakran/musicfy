import Card from './Card';

const Grid = ({ tracks, nested = false }: any) => {
  return (
    <div className='container py-4 overflow-auto  ' style={{ height: '450px' }}>
      <div className='row  row-cols-xs-2 row-cols-sm-3 row-cols-lg-6 justify-content-center gy-5'>
        {tracks &&
          tracks.map((track: any) => {
            if (nested)
              return <Card key={track.track.key} data={track.track} />;
            else return <Card key={track.key} data={track} />;
          })}
      </div>
    </div>
  );
};

export default Grid;
