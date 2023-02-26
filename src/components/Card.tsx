const Card = ({ data }: any) => {
  return (
    <div className='card p-0 mx-2' style={{ border: 'none' }}>
      <img src={data.share.image} className='card-img-top' alt='...' />
      <div className='card-body p-1'>
        <h5 className='card-title fs-6 w-100 '>{data.title}</h5>
        <h6 className='card-subtitle text-muted'>{data.subtitle}</h6>
      </div>
    </div>
  );
};

export default Card;
//
