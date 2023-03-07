import plhd from '../../images/plhd.webp';

const PlaylistCard = ({ data }: any) => {
  return (
    <div className='card p-0 ' style={{ border: 'none', width: '120px' }}>
      <div className='position-relative '>
        <img src={plhd} className='card-img-top' alt='...' />
        <div className='card-body p-1'>
          <h5 className='card-title fs-6 w-100 '>{data.playlistName}</h5>
          <p>
            No of songs: {data.playlistSongs ? data.playlistSongs.length : null}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
